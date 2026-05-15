# 762 Stonebridge Drive — Single Property Website (SPW)

A high-converting single-property listing website for **762 Stonebridge Drive, Longmont, CO 80503**, built with Next.js 14 (App Router) and Tailwind CSS. Designed to match the [Solomon Home Services](https://solomonhomeservices.com) brand system and deployed on Vercel.

## Stack

- **Framework:** Next.js 14 (App Router, JavaScript)
- **Styling:** Tailwind CSS
- **Fonts:** Fraunces (display) + DM Sans (body) via Google Fonts
- **Deployment:** Vercel

## Sections

| Section | Purpose |
|---|---|
| Hero | Address, headline, tour CTA, photo placeholder |
| Specs Bar | 3 Bed · 3 Bath · 1,549 sq ft · 2-Car Garage |
| "Picture This" Description | Narrative lifestyle copy, feature bullets, sticky highlight card |
| Neighborhood | Parkes at Stonebridge community cards, AARP Livability scores (80/100 Health · 87/100 Civic), mega CTA to neighborhood microsite |
| AI Intake Widget | Voice/Text toggle, name + phone capture, 24/7 lead intake |
| Gallery | Masonry placeholder grid, 5 rooms |
| Open House | Upcoming dates, May 17–18 public + May 22 private |
| Seller CTA | "Want This?" — List With Mark |
| Agent CTA | "Steal My Marketing" — Get Your Site |

## SEO & AEO

- Full Next.js `metadata` export (title, description, OG tags, Twitter card, canonical)
- JSON-LD `@graph` with:
  - `RealEstateListing` — price, address, amenities, agent, broker
  - `SingleFamilyResidence` — detailed property facts
  - `FAQPage` — 6 buyer/seller questions structured for AI answer engines
  - `BreadcrumbList`

## Global Components

`Navbar.js` and `Footer.js` are imported from the shared SHS component pattern — includes Real Broker co-branding, Colorado brokerage disclosure, REALTOR® mark, EHO logo, and the DoD disclaimer.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Compliance Notes

- Brokerage Disclosure: Mark Solomon, Colorado license #100084304, Real Broker LLC
- All real estate advertised herein is subject to the Federal Fair Housing Act
- MLS data deemed reliable but not guaranteed
- Payment calculator section intentionally omitted per compliance requirements
