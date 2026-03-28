# VoltMasters ATX — Next.js Website

A production-ready Next.js website for VoltMasters ATX, converted from the Figma Make export.

**Stack:** Next.js 14 · Tailwind CSS · Resend (email) · Airtable (lead storage) · Vercel (hosting)

---

## What's Been Built

- ✅ Full site converted to Next.js (App Router)
- ✅ Contact form wired to Airtable + Resend
- ✅ Real phone number `(512) 537-5145` wired everywhere
- ✅ Customer confirmation email on form submit
- ✅ Instant notification email to you on every lead
- ✅ SEO metadata (title, description, OpenGraph, Twitter cards)
- ✅ `next/image` optimization ready
- ✅ TypeScript throughout

---

## First-Time Setup (do this once)

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Resend (email notifications)

1. Go to [resend.com](https://resend.com) and create a free account
2. Navigate to **Domains** → Add `voltmastersatx.com`
3. Add the DNS records Resend gives you to your domain registrar
4. Once verified, go to **API Keys** → Create API Key
5. Copy the key — you'll use it in step 4

### 3. Set up Airtable (lead storage)

1. Go to [airtable.com](https://airtable.com) and create a free account
2. Create a new **Base** named `VoltMasters Leads`
3. Create a **Table** named `Leads` with these exact fields:

| Field Name        | Field Type        |
|-------------------|-------------------|
| Full Name         | Single line text  |
| Email             | Email             |
| Phone             | Phone number      |
| Charger Location  | Single line text  |
| Panel Distance    | Single line text  |
| Panel Size        | Single line text  |
| Notes             | Long text         |
| Status            | Single select     |
| Submitted At      | Date (with time)  |

For **Status**, add these options: `New Lead`, `Contacted`, `Quoted`, `Booked`, `Closed`

4. Get your **Base ID**: open the base and copy the `appXXXXXXXX` part from the URL
5. Create a **Personal Access Token**: go to [airtable.com/create/tokens](https://airtable.com/create/tokens)
   - Scopes: `data.records:read`, `data.records:write`
   - Access: select your new base

### 4. Create your environment file

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in your real values:

```
RESEND_API_KEY=re_your_actual_key_here
NOTIFICATION_EMAIL=your@email.com
AIRTABLE_API_KEY=patXXXXXXXX.xxxx...
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_NAME=Leads
```

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploying to Vercel

Your domain is already connected to Vercel — just push this repo and it auto-deploys.

### Step-by-step:

**A. Push to GitHub**

```bash
git init
git add .
git commit -m "Initial Next.js conversion"
git remote add origin https://github.com/YOUR_USERNAME/voltmasters-atx.git
git push -u origin main
```

**B. Connect to Vercel**

1. Go to [vercel.com](https://vercel.com) → Import Project
2. Select your GitHub repo
3. Vercel auto-detects Next.js — no config needed

**C. Add environment variables in Vercel**

This is the most important step — your API keys must be in Vercel too:

1. In Vercel dashboard → your project → **Settings** → **Environment Variables**
2. Add each variable from your `.env.local`:
   - `RESEND_API_KEY`
   - `NOTIFICATION_EMAIL`
   - `AIRTABLE_API_KEY`
   - `AIRTABLE_BASE_ID`
   - `AIRTABLE_TABLE_NAME`
3. Set them for **Production**, **Preview**, and **Development**
4. Click **Save** — Vercel will trigger a redeploy automatically

**D. Point your domain**

If your domain was connected to the old Figma Make project:
1. In Vercel → Settings → Domains
2. Add `voltmastersatx.com` and `www.voltmastersatx.com`
3. Update DNS at your registrar if prompted

---

## Testing the Form

Once deployed (or running locally):

1. Fill out the form on the site
2. Check your `NOTIFICATION_EMAIL` inbox — you should get an alert email
3. Check [airtable.com](https://airtable.com) — a new row should appear in your Leads table
4. The person who submitted gets a confirmation email

---

## Project Structure

```
voltmasters-next/
├── app/
│   ├── api/
│   │   └── submit-quote/
│   │       └── route.ts      ← Form handler (Airtable + Resend)
│   ├── globals.css
│   ├── layout.tsx             ← SEO metadata lives here
│   └── page.tsx               ← Assembles all sections
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ContactForm.tsx        ← Wired form with loading/error/success states
│   ├── Footer.tsx
│   └── ... (all other sections)
├── .env.example               ← Template — copy to .env.local
├── .env.local                 ← YOUR SECRETS (never commit this)
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## Updating Phone Number

The phone number `(512) 537-5145` is defined in two places:
- `components/Header.tsx` — top of file, `PHONE` and `PHONE_HREF` constants
- `components/Footer.tsx` — same pattern
- `components/Hero.tsx` — same pattern
- `components/ContactForm.tsx` — same pattern
- `app/api/submit-quote/route.ts` — hardcoded in the confirmation email template

Search for `5125375145` to find all instances if you ever need to update it.

---

## Customization Tips

- **Colors:** accent yellow `#FCD34D` is set in `tailwind.config.js`
- **Logo:** lives in `components/Logo.tsx` as inline SVG
- **Services/FAQ/Testimonials:** all data is at the top of each component file as arrays — easy to edit
- **Stats bar:** edit the numbers in `components/StatsBar.tsx`
