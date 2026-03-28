import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | VoltMasters ATX',
  description: 'Privacy Policy for VoltMasters ATX — Austin EV Charger Installation.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-zinc-950 py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-accent text-sm font-semibold hover:underline mb-6 inline-block">
            ← Back to VoltMasters ATX
          </Link>
          <h1 className="text-4xl font-black text-white mt-4">Privacy Policy</h1>
          <p className="text-zinc-400 mt-3">Last updated: March 28, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 py-16">

        <p className="text-zinc-600 text-lg leading-relaxed">
          VoltMasters ATX ("we," "us," or "our") operates voltmastersatx.com. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website or request a quote.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">1. Information We Collect</h2>
        <p className="text-zinc-600 leading-relaxed">When you submit a quote request, we collect:</p>
        <ul className="list-disc list-inside text-zinc-600 space-y-2 mt-3">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Information about your home electrical setup (garage type, panel distance, panel size)</li>
          <li>Any additional notes you choose to provide</li>
        </ul>
        <p className="text-zinc-600 leading-relaxed mt-4">
          We also automatically collect basic website usage data (pages visited, browser type, IP address) through standard web analytics tools.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">2. How We Use Your Information</h2>
        <p className="text-zinc-600 leading-relaxed">We use your information solely to:</p>
        <ul className="list-disc list-inside text-zinc-600 space-y-2 mt-3">
          <li>Contact you with a quote for EV charger installation services</li>
          <li>Schedule and complete your installation</li>
          <li>File your Austin Energy rebate paperwork on your behalf</li>
          <li>Send you service-related communications</li>
          <li>Improve our website and services</li>
        </ul>
        <p className="text-zinc-600 leading-relaxed mt-4 font-semibold">
          We do not sell, rent, or share your personal information with third parties for marketing purposes.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">3. How We Store Your Information</h2>
        <p className="text-zinc-600 leading-relaxed">
          Quote request data is stored securely in Airtable, a cloud-based database service. We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time by contacting us.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">4. Cookies & Tracking</h2>
        <p className="text-zinc-600 leading-relaxed">
          Our website may use cookies and similar tracking technologies, including the Meta Pixel, to understand how visitors interact with our site and to improve our advertising. You can control cookie settings through your browser preferences. Disabling cookies will not affect your ability to use the site.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">5. Third-Party Services</h2>
        <p className="text-zinc-600 leading-relaxed">We use the following third-party services to operate our website:</p>
        <ul className="list-disc list-inside text-zinc-600 space-y-2 mt-3">
          <li><strong>Vercel</strong> — website hosting</li>
          <li><strong>Resend</strong> — email delivery</li>
          <li><strong>Airtable</strong> — lead data storage</li>
          <li><strong>Meta (Facebook)</strong> — advertising and analytics</li>
        </ul>
        <p className="text-zinc-600 leading-relaxed mt-4">
          Each of these services has their own privacy policy governing how they handle data.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">6. Your Rights</h2>
        <p className="text-zinc-600 leading-relaxed">You have the right to:</p>
        <ul className="list-disc list-inside text-zinc-600 space-y-2 mt-3">
          <li>Request access to the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt out of marketing communications at any time</li>
        </ul>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">7. Children's Privacy</h2>
        <p className="text-zinc-600 leading-relaxed">
          Our services are not directed at children under 13. We do not knowingly collect personal information from children under 13.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">8. Changes to This Policy</h2>
        <p className="text-zinc-600 leading-relaxed">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website after changes constitutes acceptance of the updated policy.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">9. Contact Us</h2>
        <p className="text-zinc-600 leading-relaxed">
          If you have any questions about this Privacy Policy or how we handle your data, please contact us:
        </p>
        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 mt-4">
          <p className="text-zinc-800 font-bold text-lg">VoltMasters ATX</p>
          <p className="text-zinc-600 mt-1">Austin, Texas</p>
          <p className="text-zinc-600 mt-1">
            Email: <a href="mailto:info@voltmastersatx.com" className="text-accent font-semibold hover:underline">info@voltmastersatx.com</a>
          </p>
          <p className="text-zinc-600 mt-1">
            Phone: <a href="tel:+15125375145" className="text-accent font-semibold hover:underline">(512) 537-5145</a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-100 py-8 px-5 text-center">
        <Link href="/" className="text-accent font-semibold hover:underline text-sm">
          ← Back to VoltMasters ATX
        </Link>
        <p className="text-zinc-400 text-xs mt-3">© {new Date().getFullYear()} VoltMasters ATX. All rights reserved.</p>
      </div>
    </div>
  );
}
