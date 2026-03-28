import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | VoltMasters ATX',
  description: 'Terms of Service for VoltMasters ATX — Austin EV Charger Installation.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-zinc-950 py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-accent text-sm font-semibold hover:underline mb-6 inline-block">
            ← Back to VoltMasters ATX
          </Link>
          <h1 className="text-4xl font-black text-white mt-4">Terms of Service</h1>
          <p className="text-zinc-400 mt-3">Last updated: March 28, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 py-16">

        <p className="text-zinc-600 text-lg leading-relaxed">
          These Terms of Service ("Terms") govern your use of voltmastersatx.com and any services provided by VoltMasters ATX ("we," "us," or "our"). By using our website or engaging our services, you agree to these Terms.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">1. Services</h2>
        <p className="text-zinc-600 leading-relaxed">
          VoltMasters ATX provides EV charger installation services in the greater Austin, Texas area. Services include but are not limited to Level 2 charger installation, Tesla Wall Connector installation, panel upgrades, and Austin Energy rebate filing assistance.
        </p>
        <p className="text-zinc-600 leading-relaxed mt-4">
          Submitting a quote request on our website does not constitute a binding agreement. A service agreement will be provided and must be signed before any work begins.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">2. Quotes & Pricing</h2>
        <p className="text-zinc-600 leading-relaxed">
          All quotes provided are estimates based on the information you provide. Final pricing may vary if on-site conditions differ materially from what was described (e.g., additional wiring runs required, panel upgrade needed). Any changes to scope will be communicated and agreed upon before additional work proceeds.
        </p>
        <p className="text-zinc-600 leading-relaxed mt-4">
          Quotes are valid for 30 days from the date of issue unless otherwise stated.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">3. Scheduling & Cancellations</h2>
        <p className="text-zinc-600 leading-relaxed">
          Installation appointments may be rescheduled or cancelled with at least 24 hours notice at no charge. Cancellations with less than 24 hours notice may be subject to a trip fee. We reserve the right to reschedule appointments due to weather, equipment availability, or other circumstances beyond our control.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">4. Payment</h2>
        <p className="text-zinc-600 leading-relaxed">
          Payment is due upon completion of installation unless otherwise agreed in writing. We accept cash, check, and major credit cards. Any applicable fees for credit card processing will be disclosed prior to payment.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">5. Austin Energy Rebate</h2>
        <p className="text-zinc-600 leading-relaxed">
          VoltMasters ATX will assist eligible customers in filing for the Austin Energy EV charger rebate. Rebate eligibility, amounts, and timelines are determined solely by Austin Energy and are subject to change. We make no guarantees regarding rebate approval or payment amounts. Rebate assistance is provided as a courtesy and does not affect the total cost of our services.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">6. Warranties & Workmanship</h2>
        <p className="text-zinc-600 leading-relaxed">
          VoltMasters ATX warrants all labor and workmanship for a period of one (1) year from the date of installation. This warranty covers defects in our installation work only and does not cover damage caused by misuse, modification, acts of nature, or third-party interference. Manufacturer warranties on equipment are separate and governed by the respective manufacturer.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">7. Limitation of Liability</h2>
        <p className="text-zinc-600 leading-relaxed">
          To the fullest extent permitted by law, VoltMasters ATX shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website. Our total liability for any claim shall not exceed the amount paid for the specific service giving rise to the claim.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">8. Website Use</h2>
        <p className="text-zinc-600 leading-relaxed">
          You agree to use our website only for lawful purposes. You may not attempt to interfere with the operation of the site, submit false information, or use automated tools to scrape content. We reserve the right to terminate access for any violation of these Terms.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">9. Intellectual Property</h2>
        <p className="text-zinc-600 leading-relaxed">
          All content on voltmastersatx.com — including text, graphics, logos, and code — is the property of VoltMasters ATX and may not be reproduced without written permission.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">10. Governing Law</h2>
        <p className="text-zinc-600 leading-relaxed">
          These Terms are governed by the laws of the State of Texas. Any disputes arising from these Terms or our services shall be resolved in the courts of Travis County, Texas.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">11. Changes to These Terms</h2>
        <p className="text-zinc-600 leading-relaxed">
          We may update these Terms from time to time. Changes will be posted on this page with an updated date. Continued use of our website or services after changes constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-4">12. Contact Us</h2>
        <p className="text-zinc-600 leading-relaxed">
          Questions about these Terms? Contact us:
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
