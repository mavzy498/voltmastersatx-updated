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

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length === 11 && digits[0] === '1') {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  return raw; // return as-is if unrecognised format
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
      const formattedPhone = formatPhone(phone);

      await resend.emails.send({
        from: 'VoltMasters ATX <noreply@voltmastersatx.com>',
        to: process.env.NOTIFICATION_EMAIL ?? 'info@voltmastersatx.com',
        subject: `⚡ New Quote Request — ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 14px; overflow: hidden; border: 1px solid #27272a;">

            <!-- Header with logo -->
            <div style="background: #0a0a0a; padding: 24px 32px;">
              <table style="border-collapse: collapse; width: 100%;">
                <tr>
                  <td style="vertical-align: middle;">
                    <table style="border-collapse: collapse;">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 10px;">
                          <div style="width: 32px; height: 32px; background: #FCD34D; border-radius: 50%; text-align: center; line-height: 32px; font-size: 18px; font-weight: 900; color: #0a0a0a;">⚡</div>
                        </td>
                        <td style="vertical-align: middle;">
                          <span style="font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: 0.02em;">VOLT<span style="color: #FCD34D;">MASTERS</span></span>
                          <span style="color: #52525b; font-size: 13px; font-weight: 400; margin-left: 6px;">ATX</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style="text-align: right; vertical-align: middle;">
                    <span style="background: #FCD34D; color: #0a0a0a; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.05em;">New Lead</span>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Alert strip -->
            <div style="background: #18181b; padding: 12px 32px; border-bottom: 1px solid #27272a;">
              <p style="margin: 0; color: #a1a1aa; font-size: 13px;">New quote request submitted — <strong style="color: #ffffff;">follow up within a few hours</strong></p>
            </div>

            <!-- Body -->
            <div style="background: #f9fafb; padding: 28px 32px;">

              <!-- Contact Info -->
              <p style="font-size: 11px; font-weight: 700; color: #71717a; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 10px;">Contact Info</p>
              <table style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 10px; overflow: hidden; margin-bottom: 20px; border: 1px solid #e4e4e7;">
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="padding: 11px 16px; color: #71717a; font-size: 13px; width: 110px;">Name</td>
                  <td style="padding: 11px 16px; font-weight: 700; color: #18181b; font-size: 14px;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="padding: 11px 16px; color: #71717a; font-size: 13px;">Email</td>
                  <td style="padding: 11px 16px; font-size: 14px;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 11px 16px; color: #71717a; font-size: 13px;">Phone</td>
                  <td style="padding: 11px 16px; font-size: 14px;"><a href="tel:+1${phone.replace(/\D/g, '')}" style="color: #2563eb; font-weight: 700; text-decoration: none;">${formattedPhone}</a></td>
                </tr>
              </table>

              <!-- Job Details -->
              <p style="font-size: 11px; font-weight: 700; color: #71717a; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 10px;">Job Details</p>
              <table style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 10px; overflow: hidden; margin-bottom: 24px; border: 1px solid #e4e4e7;">
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="padding: 11px 16px; color: #71717a; font-size: 13px; width: 160px;">Charger location</td>
                  <td style="padding: 11px 16px; font-weight: 600; color: #18181b; font-size: 14px;">${formatLabel(garageType)}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="padding: 11px 16px; color: #71717a; font-size: 13px;">Panel distance</td>
                  <td style="padding: 11px 16px; font-weight: 600; color: #18181b; font-size: 14px;">${formatLabel(panelDistance)}</td>
                </tr>
                <tr${message ? ' style="border-bottom: 1px solid #f4f4f5;"' : ''}>
                  <td style="padding: 11px 16px; color: #71717a; font-size: 13px;">Panel size</td>
                  <td style="padding: 11px 16px; font-weight: 600; color: #18181b; font-size: 14px;">${formatLabel(panelSize)}</td>
                </tr>
                ${message ? `<tr><td style="padding: 11px 16px; color: #71717a; font-size: 13px; vertical-align: top;">Notes</td><td style="padding: 11px 16px; color: #18181b; font-size: 14px;">${message}</td></tr>` : ''}
              </table>

              <!-- CTA -->
              <div style="background: #0a0a0a; border-radius: 10px; padding: 18px 24px; display: flex; align-items: center; justify-content: space-between;">
                <table style="border-collapse: collapse; width: 100%;">
                  <tr>
                    <td style="vertical-align: middle;">
                      <p style="margin: 0 0 3px; color: #71717a; font-size: 12px;">Call or text to follow up</p>
                      <p style="margin: 0; color: #FCD34D; font-size: 20px; font-weight: 900;">${formattedPhone}</p>
                    </td>
                    <td style="text-align: right; vertical-align: middle;">
                      <a href="tel:+1${phone.replace(/\D/g, '')}" style="background: #FCD34D; color: #0a0a0a; font-size: 13px; font-weight: 800; padding: 10px 20px; border-radius: 8px; text-decoration: none; display: inline-block;">Call now</a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #0a0a0a; padding: 14px 32px; text-align: center; border-top: 1px solid #27272a;">
              <p style="color: #52525b; font-size: 11px; margin: 0;">VoltMasters ATX &nbsp;·&nbsp; voltmastersatx.com &nbsp;·&nbsp; (512) 537-5145</p>
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
      const formattedPhone = formatPhone(phone);

      await resend.emails.send({
        from: 'VoltMasters ATX <noreply@voltmastersatx.com>',
        to: email,
        subject: 'We got your quote request!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 14px; overflow: hidden; border: 1px solid #27272a;">

            <!-- Header -->
            <div style="background: #0a0a0a; padding: 24px 32px;">
              <table style="border-collapse: collapse;">
                <tr>
                  <td style="vertical-align: middle; padding-right: 10px;">
                    <div style="width: 32px; height: 32px; background: #FCD34D; border-radius: 50%; text-align: center; line-height: 32px; font-size: 18px; font-weight: 900; color: #0a0a0a;">⚡</div>
                  </td>
                  <td style="vertical-align: middle;">
                    <span style="font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: 0.02em;">VOLT<span style="color: #FCD34D;">MASTERS</span></span>
                    <span style="color: #52525b; font-size: 13px; font-weight: 400; margin-left: 6px;">ATX</span>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Body -->
            <div style="background: #f9fafb; padding: 32px; border: 1px solid #e4e4e7; border-top: none;">
              <h2 style="color: #18181b; margin: 0 0 8px; font-size: 22px;">Hi ${name.split(' ')[0]}, we&apos;ve got your request!</h2>
              <p style="color: #52525b; line-height: 1.7; margin: 0 0 16px; font-size: 15px;">Thanks for reaching out. We&apos;ll call or text you at <strong style="color: #18181b;">${formattedPhone}</strong> within a few hours to go over your quote.</p>
              <p style="color: #52525b; line-height: 1.7; margin: 0 0 28px; font-size: 15px;">Your quote will be a clear, all-in price — charger, install, and Austin Energy rebate filing included. No surprises.</p>

              <div style="background: #0a0a0a; padding: 20px 24px; border-radius: 10px; margin-bottom: 24px;">
                <p style="margin: 0 0 4px; color: #71717a; font-size: 13px;">Questions? Reach us directly:</p>
                <p style="margin: 0; color: #FCD34D; font-weight: 900; font-size: 20px;">(512) 537-5145</p>
              </div>

              <p style="color: #a1a1aa; font-size: 12px; margin: 0; line-height: 1.6;">You&apos;re receiving this because you submitted a quote request at voltmastersatx.com. We&apos;ll only contact you about your installation.</p>
            </div>

            <!-- Footer -->
            <div style="background: #0a0a0a; padding: 14px 32px; text-align: center; border-top: 1px solid #27272a;">
              <p style="color: #52525b; font-size: 11px; margin: 0;">VoltMasters ATX &nbsp;·&nbsp; voltmastersatx.com &nbsp;·&nbsp; (512) 537-5145</p>
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
