import { NextRequest, NextResponse } from 'next/server';
import Airtable from 'airtable';
import { Resend } from 'resend';

// ─── Types ────────────────────────────────────────────────────────────────────
interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  garageType: string;
  panelDistance: string;
  panelSize: string;
  message?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatLabel(val: string): string {
  const labels: Record<string, string> = {
    'attached-garage': 'Attached garage',
    'detached-garage': 'Detached garage',
    carport: 'Carport',
    'driveway-exterior': 'Driveway / exterior wall',
    'not-sure': 'Not sure',
    'under-25ft': 'Under 25 feet',
    '25-50ft': '25–50 feet',
    'over-50ft': 'Over 50 feet',
    '100a': '100 amp',
    '150a': '150 amp',
    '200a': '200 amp',
  };
  return labels[val] ?? val;
}

// ─── Route Handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body: QuoteFormData = await req.json();
    const { name, email, phone, garageType, panelDistance, panelSize, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !garageType || !panelDistance || !panelSize) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const errors: string[] = [];

    // ── 1. Save to Airtable ──────────────────────────────────────────────────
    try {
      const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
        process.env.AIRTABLE_BASE_ID!
      );

      await base(process.env.AIRTABLE_TABLE_NAME ?? 'Leads').create({
        'Full Name': name,
        Email: email,
        Phone: phone,
        'Charger Location': formatLabel(garageType),
        'Panel Distance': formatLabel(panelDistance),
        'Panel Size': formatLabel(panelSize),
        Notes: message ?? '',
        Status: 'New Lead',
        'Submitted At': new Date().toISOString(),
      });
    } catch (airtableErr) {
      console.error('Airtable error:', airtableErr);
      errors.push('airtable');
    }

    // ── 2. Send notification email via Resend ────────────────────────────────
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'VoltMasters ATX <noreply@voltmastersatx.com>',
        to: process.env.NOTIFICATION_EMAIL ?? 'info@voltmastersatx.com',
        subject: `🔌 New Quote Request — ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0a0a0a; padding: 24px 32px; border-radius: 12px 12px 0 0;">
              <h1 style="color: #FCD34D; font-size: 22px; margin: 0;">New Quote Request</h1>
              <p style="color: #a1a1aa; margin: 6px 0 0;">VoltMasters ATX · voltmastersatx.com</p>
            </div>
            <div style="background: #f9fafb; padding: 32px; border: 1px solid #e4e4e7; border-top: none; border-radius: 0 0 12px 12px;">

              <h2 style="font-size: 16px; color: #18181b; margin: 0 0 16px;">Contact Info</h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr><td style="padding: 8px 0; color: #71717a; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600; color: #18181b;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #71717a;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #FCD34D;">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #71717a;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone.replace(/\D/g, '')}" style="color: #FCD34D;">${phone}</a></td></tr>
              </table>

              <h2 style="font-size: 16px; color: #18181b; margin: 0 0 16px;">Job Details</h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr><td style="padding: 8px 0; color: #71717a; width: 200px;">Charger Location</td><td style="padding: 8px 0; font-weight: 600; color: #18181b;">${formatLabel(garageType)}</td></tr>
                <tr><td style="padding: 8px 0; color: #71717a;">Panel Distance</td><td style="padding: 8px 0; font-weight: 600; color: #18181b;">${formatLabel(panelDistance)}</td></tr>
                <tr><td style="padding: 8px 0; color: #71717a;">Panel Size</td><td style="padding: 8px 0; font-weight: 600; color: #18181b;">${formatLabel(panelSize)}</td></tr>
                ${message ? `<tr><td style="padding: 8px 0; color: #71717a; vertical-align: top;">Notes</td><td style="padding: 8px 0; color: #18181b;">${message}</td></tr>` : ''}
              </table>

              <div style="background: #FCD34D; padding: 16px 20px; border-radius: 8px; text-align: center;">
                <p style="margin: 0; font-weight: 700; color: #0a0a0a; font-size: 15px;">Follow up within a few hours — call or text ${phone}</p>
              </div>
            </div>
          </div>
        `,
      });
    } catch (resendErr) {
      console.error('Resend error:', resendErr);
      errors.push('email');
    }

    // ── 3. Send confirmation email to customer ───────────────────────────────
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'VoltMasters ATX <noreply@voltmastersatx.com>',
        to: email,
        subject: 'We got your quote request!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0a0a0a; padding: 24px 32px; border-radius: 12px 12px 0 0;">
              <h1 style="color: #FCD34D; font-size: 22px; margin: 0;">VoltMasters ATX</h1>
              <p style="color: #a1a1aa; margin: 6px 0 0;">Austin's #1 EV Charger Installer</p>
            </div>
            <div style="background: #f9fafb; padding: 32px; border: 1px solid #e4e4e7; border-top: none; border-radius: 0 0 12px 12px;">
              <h2 style="color: #18181b; margin: 0 0 12px;">Hi ${name.split(' ')[0]}, we've got your request!</h2>
              <p style="color: #52525b; line-height: 1.6; margin: 0 0 20px;">Thanks for reaching out. We'll call or text you at <strong>${phone}</strong> within a few hours to go over your quote.</p>
              <p style="color: #52525b; line-height: 1.6; margin: 0 0 24px;">Most quotes are clear, all-in prices — charger, install, and rebate filing included. No surprises.</p>

              <div style="background: #0a0a0a; padding: 16px 20px; border-radius: 8px; margin-bottom: 24px;">
                <p style="margin: 0; color: #a1a1aa; font-size: 14px;">Questions? Reach us directly:</p>
                <p style="margin: 6px 0 0; color: #FCD34D; font-weight: 700; font-size: 16px;">(512) 537-5145</p>
              </div>

              <p style="color: #a1a1aa; font-size: 12px; margin: 0;">You're receiving this because you submitted a quote request at voltmastersatx.com</p>
            </div>
          </div>
        `,
      });
    } catch (confirmErr) {
      console.error('Confirmation email error:', confirmErr);
      // Don't add to errors — confirmation is non-critical
    }

    if (errors.length === 2) {
      // Both Airtable and email failed — something is very wrong
      return NextResponse.json({ error: 'Submission failed — please call us directly.' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Form handler error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
