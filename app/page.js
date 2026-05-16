import AIIntakeWidget from "@/components/AIIntakeWidget";
import PhotoGallery from "@/components/PhotoGallery";

// ─── METADATA ──────────────────────────────────────────────────────────────────
export const metadata = {
  title: "762 Stonebridge Drive, Longmont CO 80503 | 3BD/3BA Townhome For Sale",
  description:
    "762 Stonebridge Drive, Longmont, CO 80503. 3 bed, 3 bath, 1,549 sq ft townhome listed at $460,000 in Parkes at Stonebridge. Built 2019. 2-car garage. Walk directly to the community park. Eagle Crest B+, Silver Creek High A. Listed by Mark Solomon, REALTOR® — Solomon Home Services at Real Broker, LLC.",
  keywords: [
    "762 Stonebridge Drive Longmont CO",
    "Parkes at Stonebridge townhome for sale",
    "Longmont CO 80503 homes for sale",
    "3 bedroom townhome Longmont Colorado",
    "townhome near park Longmont",
    "Solomon Home Services listing",
    "Boulder County townhome 2019",
    "St Vrain Valley schools real estate",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://762stonebridge.solomonhomeservices.com",
    siteName: "Solomon Home Services",
    title: "762 Stonebridge Drive — Longmont, CO 80503 | $460,000",
    description:
      "A 2019-built townhome in Parkes at Stonebridge. 3 bed · 3 bath · 1,549 sq ft · 2-car garage. Listed by Mark Solomon, REALTOR®.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "762 Stonebridge Drive, Longmont, CO 80503" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "762 Stonebridge Drive — Longmont, CO 80503 | $460,000",
    description: "3 bed · 3 bath · 1,549 sq ft townhome in Parkes at Stonebridge. Built 2019. Listed by Mark Solomon, REALTOR®.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "https://762stonebridge.solomonhomeservices.com" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

// ─── JSON-LD ───────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateListing",
      "@id": "https://762stonebridge.solomonhomeservices.com/#listing",
      "name": "762 Stonebridge Drive, Longmont, CO 80503",
      "url": "https://762stonebridge.solomonhomeservices.com",
      "description": "A 2019-built luxury townhome in the Parkes at Stonebridge community. 3 bedrooms, 3 bathrooms, 1,549 square feet, 2-car garage, versatile study loft, Hardiboard exterior, forced air heat, central A/C. Steps from the community park. Top-rated St. Vrain Valley schools.",
      "offers": { "@type": "Offer", "price": "460000", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "validFrom": "2026-05-14" },
      "address": { "@type": "PostalAddress", "streetAddress": "762 Stonebridge Drive", "addressLocality": "Longmont", "addressRegion": "CO", "postalCode": "80503", "addressCountry": "US" },
      "geo": { "@type": "GeoCoordinates", "latitude": "40.1583", "longitude": "-105.0603" },
      "image": "https://762stonebridge.solomonhomeservices.com/og-image.jpg",
      "numberOfRooms": "6",
      "floorSize": { "@type": "QuantitativeValue", "value": 1549, "unitCode": "FTK", "unitText": "square feet" },
      "numberOfBedrooms": 3, "numberOfBathroomsTotal": 3, "yearBuilt": 2019,
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "2-Car Garage", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Central Air Conditioning", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Study / Loft", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Community Park Access", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Hardiboard Fiber Cement Exterior", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Flood Zone X (Unshaded)", "value": true },
      ],
      "seller": {
        "@type": "RealEstateAgent", "@id": "https://solomonhomeservices.com/#agent",
        "name": "Mark Solomon", "jobTitle": "REALTOR®", "telephone": "+18168535467",
        "email": "mark@solomonhomeservices.com", "url": "https://solomonhomeservices.com",
        "worksFor": { "@type": "Organization", "name": "Solomon Home Services at Real Broker, LLC", "url": "https://solomonhomeservices.com" },
        "hasCredential": [{ "@type": "EducationalOccupationalCredential", "credentialCategory": "Colorado Real Estate Broker License #100084304" }],
      },
      "containedInPlace": { "@type": "Neighborhood", "name": "Parkes at Stonebridge", "description": "An 18-acre mixed-residential community in Longmont, CO featuring luxury townhomes, a private pocket park, walking trails, picnic areas, and custom landscaping." },
    },
    {
      "@type": "SingleFamilyResidence", "@id": "https://762stonebridge.solomonhomeservices.com/#property",
      "name": "762 Stonebridge Drive Townhome",
      "description": "Three-story townhome built in 2019 in Parkes at Stonebridge, Longmont, Colorado. 3 bedrooms, 3 bathrooms (2 full, 1 half), 1,549 sq ft, study at top of stairs, 2-car attached garage, central A/C, forced air heat, Hardiboard fiber cement siding.",
      "url": "https://762stonebridge.solomonhomeservices.com",
      "address": { "@type": "PostalAddress", "streetAddress": "762 Stonebridge Drive", "addressLocality": "Longmont", "addressRegion": "CO", "postalCode": "80503", "addressCountry": "US" },
      "floorSize": { "@type": "QuantitativeValue", "value": 1549, "unitCode": "FTK" },
      "numberOfRooms": 6, "numberOfBedrooms": 3, "numberOfBathroomsTotal": 3, "yearBuilt": 2019,
      "lotSize": { "@type": "QuantitativeValue", "value": 2178, "unitCode": "FTK" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Solomon Home Services", "item": "https://solomonhomeservices.com" },
        { "@type": "ListItem", "position": 2, "name": "762 Stonebridge Drive", "item": "https://762stonebridge.solomonhomeservices.com" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the asking price for 762 Stonebridge Drive, Longmont CO?", "acceptedAnswer": { "@type": "Answer", "text": "762 Stonebridge Drive, Longmont, CO 80503 is listed at $460,000. 3 bed, 3 bath, 1,549 sq ft townhome in Parkes at Stonebridge, listed by Mark Solomon with Solomon Home Services at Real Broker, LLC." } },
        { "@type": "Question", "name": "What subdivision is 762 Stonebridge Drive in?", "acceptedAnswer": { "@type": "Answer", "text": "762 Stonebridge Drive is in the Parkes at Stonebridge subdivision in Longmont, CO 80503 — an 18-acre community with luxury townhomes, a private pocket park, walking trails, and picnic areas." } },
        { "@type": "Question", "name": "What schools serve 762 Stonebridge Drive, Longmont CO?", "acceptedAnswer": { "@type": "Answer", "text": "The property is served by St. Vrain Valley School District: Eagle Crest Elementary (B+), Altona Middle (A-), and Silver Creek High School (A, 96% graduation rate)." } },
        { "@type": "Question", "name": "When was 762 Stonebridge Drive built?", "acceptedAnswer": { "@type": "Answer", "text": "762 Stonebridge Drive was built in 2019 with durable Hardiboard fiber cement siding — essentially newer construction with low deferred maintenance." } },
        { "@type": "Question", "name": "Does 762 Stonebridge Drive have a garage?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — an attached 2-car garage of approximately 472 square feet." } },
        { "@type": "Question", "name": "How do I schedule a showing for 762 Stonebridge Drive?", "acceptedAnswer": { "@type": "Answer", "text": "Call or text Mark Solomon at (816) 853-5467, email mark@solomonhomeservices.com, or use the AI agent on this page 24/7." } },
      ],
    },
  ],
};

// ─── OPEN HOUSE DATA ──────────────────────────────────────────────────────────
const openHouses = [
  {
    month: "May",
    day: 16,
    dow: "Sat",
    time: "1:00 PM – 3:00 PM",
    badge: "Nosey Neighbor Open House!",
    badgeStyle: "gold",
    featured: true,
    headline: "Nosey Neighbor Open House! 🏡",
    subline:
      "You don't have to sneak in to peek anymore — we're actually inviting you in. Come see your future neighbor's place (or maybe your future place). No curtain-peering required.",
    cta: null,
  },
  {
    month: "May",
    day: 17,
    dow: "Sun",
    time: "1:00 PM – 3:00 PM",
    badge: "Open House",
    badgeStyle: "gold",
    featured: false,
    headline: null,
    subline: "Public Open House · All welcome",
    cta: null,
  },
  {
    month: null,
    day: null,
    dow: null,
    time: "By Appointment Only",
    badge: "Private Showing",
    badgeStyle: "navy",
    featured: false,
    headline: "Private Showing",
    subline:
      "Want to see it on your schedule? Call Mark directly and we'll make it happen — no waiting for the next open house.",
    cta: { label: "📞 Call Mark: (816) 853-5467", href: "tel:8168535467" },
  },
];

// ─── NEIGHBORHOOD CARDS ────────────────────────────────────────────────────────
const nbhdCards = [
  {
    title: "Luxury townhome community",
    body: "Custom landscaping, architectural consistency, and pride of ownership throughout. You know the kind of neighborhood where people actually take care of their homes? That's this one.",
    icon: (
      <svg style={{ width: 24, height: 24 }} fill="none" stroke="#c9973a" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Strategic commuter location",
    body: "Diagonal Highway (CO-119) puts Boulder 15 minutes away and Denver within striking distance. You're not choosing between location and lifestyle — you're getting both.",
    icon: (
      <svg style={{ width: 24, height: 24 }} fill="none" stroke="#c9973a" strokeWidth={1.5} strokeLinecap="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: "Top-tier education pipeline",
    body: "Eagle Crest Elementary (B+) → Altona Middle (A-) → Silver Creek High (A). St. Vrain Valley School District is consistently ranked among Colorado's best.",
    icon: (
      <svg style={{ width: 24, height: 24 }} fill="none" stroke="#c9973a" strokeWidth={1.5} strokeLinecap="round" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Outdoor lifestyle built-in",
    body: "Dry Creek Trail system provides direct access to Longmont's best outdoor infrastructure. Walk, bike, or run without loading the car. Meadow Village Park is steps away.",
    icon: (
      <svg style={{ width: 24, height: 24 }} fill="none" stroke="#c9973a" strokeWidth={1.5} strokeLinecap="round" viewBox="0 0 24 24">
        <path d="M3 6h18M3 12h18M3 18h18" />
      </svg>
    ),
  },
];

// ─── SPECS ────────────────────────────────────────────────────────────────────
const specs = [
  {
    label: "Bedrooms", value: "3",
    icon: <svg style={{ width: 22, height: 22 }} fill="none" stroke="#c9973a" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  },
  {
    label: "Bathrooms", value: "3",
    icon: <svg style={{ width: 22, height: 22 }} fill="none" stroke="#c9973a" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 12h16M4 18h16M4 6h16" /><circle cx="8" cy="18" r="1" /><circle cx="16" cy="18" r="1" /></svg>,
  },
  {
    label: "Square Feet", value: "1,549",
    icon: <svg style={{ width: 22, height: 22 }} fill="none" stroke="#c9973a" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
  },
  {
    label: "Garage", value: "2-Car",
    icon: <svg style={{ width: 22, height: 22 }} fill="none" stroke="#c9973a" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7V8zM5 17h14" /><circle cx="5.5" cy="17.5" r="1.5" /><circle cx="18.5" cy="17.5" r="1.5" /></svg>,
  },
];

// ─── PAGE ──────────────────────────────────────────────────────────────────────
export default function StonebridgePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section id="hero" className="bg-[#1a2744] min-h-[88vh] grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(201,151,58,0.06) 0%, transparent 60%)" }} />
        <div className="flex flex-col justify-center px-10 lg:px-16 py-20 z-10">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-8 h-px bg-[#c9973a]" />
            <span className="text-[11px] font-medium text-[#c9973a] tracking-[0.14em] uppercase">Parkes at Stonebridge · Longmont, CO</span>
          </div>
          <h1 className="text-white font-light leading-[1.1] mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 58px)" }}>
            762 <em className="italic text-[#c9973a]">Stonebridge</em><br />Drive
          </h1>
          <p className="text-lg font-light text-[#8a9bbf] mb-7 tracking-wide">Longmont, Colorado 80503</p>
          <p className="text-[#e8e0d0] leading-relaxed mb-11 max-w-[420px]" style={{ fontSize: "clamp(14px,1.5vw,17px)" }}>
            A luxury townhome where your front door opens directly into one of Longmont&apos;s most beautiful subdivision community parks. No, really — it&apos;s literally called the Parkes. Because of the park.
          </p>
          
          {/* RESPONSIVE LAYOUT ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full sm:w-auto mt-8">
            <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-[#c9973a] hover:bg-[#ddb564] text-white text-[12px] font-semibold px-6 py-4 rounded-lg tracking-widest uppercase transition-all duration-200 hover:-translate-y-px whitespace-nowrap w-full sm:w-auto">Schedule a Tour →</a>
            <a href="#description" className="inline-flex justify-center text-white border border-white/30 bg-white/[0.07] hover:bg-white/[0.14] hover:border-white/60 text-[12px] font-medium px-5 py-4 rounded-lg tracking-widest uppercase transition-all duration-200 whitespace-nowrap w-full sm:w-auto">See the Details</a>
            <a href="#openhouse" className="inline-flex justify-center text-white border border-white/30 bg-white/[0.07] hover:bg-white/[0.14] hover:border-white/60 text-[12px] font-medium px-5 py-4 rounded-lg tracking-widest uppercase transition-all duration-200 whitespace-nowrap w-full sm:w-auto">Open House</a>
          </div>
        </div>
        
        <div className="relative bg-[#243259] min-h-[360px] lg:min-h-0">
          <div className="absolute inset-0 border-l border-white/[0.08]">
            <img 
              src="/02-MG_6804.jpg" 
              alt="762 Stonebridge Drive Exterior" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="absolute top-8 left-8">
            <span className="text-[11px] font-semibold text-[#c9973a] tracking-[0.12em] uppercase bg-[#c9973a]/15 border border-[#c9973a] px-4 py-1.5 rounded">Active Listing</span>
          </div>
          <div className="absolute bottom-6 right-6">
            <span className="text-[10px] font-medium text-[#8a9bbf] tracking-widest uppercase bg-black/50 backdrop-blur-sm border border-white/[0.08] px-4 py-1.5 rounded-full">Parkes at Stonebridge · Built 2019</span>
          </div>
        </div>
      </section>

      {/* ══ SPECS BAR ═════════════════════════════════════════════════════════ */}
      <div className="bg-[#111b35] border-t border-b border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {specs.map((spec, i) => (
            <div key={spec.label} className={`flex items-center gap-4 px-8 lg:px-10 py-7 hover:bg-white/[0.03] transition-colors ${i < 3 ? "border-r border-white/[0.08]" : ""}`}>
              <div className="w-11 h-11 bg-[#c9973a]/10 rounded-lg flex items-center justify-center flex-shrink-0">{spec.icon}</div>
              <div>
                <div className="text-white font-medium leading-none" style={{ fontFamily: "var(--font-display)", fontSize: 24 }}>{spec.value}</div>
                <div className="text-[11px] font-medium text-[#8a9bbf] tracking-widest uppercase mt-1">{spec.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ DESCRIPTION ═══════════════════════════════════════════════════════ */}
      <section id="description" className="bg-[#f5f0e8] pt-24 pb-12">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#c9973a]" />
                <span className="text-[11px] font-medium text-[#c9973a] tracking-[0.14em] uppercase">Picture This</span>
              </div>
              <h2 className="text-[#1a2744] font-light leading-tight mb-8" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,48px)" }}>
                A home that comes with its own <em className="text-[#c9973a]">park.</em>
              </h2>
              <div className="space-y-5">
                <p className="drop-cap text-[17px] text-[#1a2744] leading-[1.75]">Picture your morning routine: coffee in hand, you open your front door, and instead of staring at someone else&apos;s bumper, you step directly into a beautiful community park. Not &quot;nearby.&quot; Not &quot;a short drive.&quot; Literally the park is right there, because someone named this subdivision the Parkes at Stonebridge — yes, with an e — and they had the audacity to make it accurate.</p>
                <p className="text-[17px] text-[#1a2744] leading-[1.75]">Built in 2019, this 1,549 sq ft townhome with only one owner and this is your opportunity to change that! Hardiboard siding, forced air with central A/C, and well maintained, just for you! It&apos;s the real estate equivalent of buying a certified pre-owned vehicle — except the vehicle is a house, and the park is free.</p>
                <p className="text-[17px] text-[#1a2744] leading-[1.75]">Three bedrooms, three bathrooms, and a 2-car garage make this place genuinely livable. But here&apos;s what the MLS doesn&apos;t tell you: at the top of the stairs, there&apos;s a placed for a desk to create your own study — that will make you feel like you finally have your life together. Home office? Creative studio? Dedicated &quot;do not disturb&quot; zone? The answer is yes, and also yes, and also yes.</p>
                <p className="text-[17px] text-[#1a2744] leading-[1.75]">Eagle Crest Elementary (B+), Altona Middle (A-), and Silver Creek High (A) form your school pipeline. The Diagonal makes Boulder a 15-minute commute. And Longmont&apos;s Dry Creek Trail system is essentially your backyard. The question isn&apos;t whether this is a good fit. The question is how fast you want to move on it.</p>
              </div>
              <ul className="mt-8 divide-y divide-[#1a2744]/10">
                {[
                  "HOA = No cutting the lawn",
                  "Hardiboard exterior — low maintenance",
                  "Versatile study at top of stairs",
                  "Shops, schools, all nearby",
                  "Easy access to Boulder or Denver if you really want to go there",
                  "Mountains! We have moutains! They can't say that in Des Moines",
                  "Information provided is deemed reliable but not guaranteed. This is not an attempt to solicit an already listed property."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 py-3 text-sm font-medium text-[#1a2744]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9973a] flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pt-3">
              <div className="bg-[#1a2744] rounded-2xl p-10 sticky top-[88px]">
                <h3 className="text-white font-light mb-6" style={{ fontFamily: "var(--font-display)", fontSize: 22 }}>
                  Property at a <em className="italic text-[#c9973a]">glance.</em>
                </h3>
                <div className="divide-y divide-white/[0.08]">
                  {[
                    { label: "Property type", value: "Townhouse (Residential)" },
                    { label: "Year built", value: "2019" },
                    { label: "Living area", value: "1,549 sq ft" },
                    { label: "Lot size", value: "2,178 sq ft" },
                    { label: "Garage", value: "2 spaces" },
                    { label: "School district", value: "St. Vrain Valley (A-)" },
                    { label: "County", value: "Boulder County" },
                  ].map(({ label, value }) => (
                    <div key={label} className="py-5">
                      <div className="text-[11px] font-medium text-[#8a9bbf] tracking-widest uppercase mb-1">{label}</div>
                      <div className="text-white font-light" style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>{value}</div>
                    </div>
                  ))}
                </div>
                <a href="#openhouse" className="mt-8 block text-center bg-[#c9973a] hover:bg-[#ddb564] text-white text-[13px] font-semibold px-6 py-4 rounded-lg tracking-widest uppercase transition-colors duration-200">
                  See Open House Dates →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DIVIDER ═══════════════════════════════════════════════════════════ */}
      <div className="bg-[#f5f0e8]">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="w-full h-px bg-[#c9973a]/30" />
        </div>
      </div>

      {/* ══ GALLERY ═══════════════════════════════════════════════════════════ */}
      <section id="gallery" className="bg-[#f5f0e8] pt-12 pb-24">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#c9973a]" />
            <span className="text-[11px] font-medium text-[#c9973a] tracking-[0.14em] uppercase">Photo Gallery</span>
          </div>
          <h2 className="text-[#1a2744] font-light mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,48px)" }}>
            See <em className="italic text-[#c9973a]">inside</em> the home.
          </h2>
          <p className="text-[16px] text-[#1a2744]/60 mb-10">
            All 25 photos — click any image to open the full viewer. Use arrow keys to browse.
          </p>

          <PhotoGallery />

          <div className="mt-14 flex flex-col sm:flex-row items-center gap-5 justify-center">
            <a
              href="#openhouse"
              className="inline-flex items-center gap-2 bg-[#c9973a] hover:bg-[#ddb564] text-white text-[13px] font-semibold px-10 py-4 rounded-lg tracking-widest uppercase transition-all duration-200 hover:-translate-y-px"
            >
              See Open House Dates →
            </a>
            <a
              href="#contact"
              className="text-[#1a2744] border border-[#1a2744]/20 hover:border-[#c9973a] hover:text-[#c9973a] text-[13px] font-medium px-8 py-4 rounded-lg tracking-widest uppercase transition-all duration-200"
            >
              Talk to the AI Agent
            </a>
          </div>
        </div>
      </section>

      {/* ══ NEIGHBORHOOD ══════════════════════════════════════════════════════ */}
      <section id="neighborhood" className="bg-[#1a2744] py-24">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#c9973a]" />
            <span className="text-[11px] font-medium text-[#c9973a] tracking-[0.14em] uppercase">Community</span>
          </div>
          <h2 className="text-white font-light leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,48px)" }}>
            Discover The <em className="italic text-[#c9973a]">Parkes</em> at Stonebridge.
          </h2>
          <p className="text-[#e8e0d0] font-light text-[18px] leading-[1.65] max-w-[640px] mt-6 mb-14">
            Step outside and you&apos;re already there. The Parkes at Stonebridge is an 18-acre mixed-residential community built around a beautiful pocket park — walking trails, picnic areas, and actual green space — not a marketing brochure&apos;s version of &quot;near nature.&quot;
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {nbhdCards.map((card) => (
              <div key={card.title} className="bg-white/[0.05] border border-white/[0.08] rounded-2xl p-9 hover:bg-white/[0.08] hover:border-[#c9973a]/30 transition-all duration-200">
                <div className="w-12 h-12 bg-[#c9973a]/12 rounded-lg flex items-center justify-center mb-5">{card.icon}</div>
                <h3 className="text-white font-light mb-2.5" style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>{card.title}</h3>
                <p className="text-[14px] font-light text-[#8a9bbf] leading-[1.65]">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { score: 80, label: "Health", sub: "Prevention, Access & Quality — AARP Livability™ Index for 80503" },
              { score: 87, label: "Civic Engagement", sub: "Civic & Social Involvement — AARP Livability™ Index for 80503" },
            ].map(({ score, label, sub }) => (
              <div key={label} className="bg-[#c9973a]/[0.08] border border-[#c9973a]/20 rounded-2xl p-7 px-8 flex items-center gap-6">
                <div className="text-[#c9973a] font-light leading-none flex-shrink-0" style={{ fontFamily: "var(--font-display)", fontSize: 52 }}>
                  {score}<span className="text-xl text-[#8a9bbf]">/100</span>
                </div>
                <div>
                  <div className="text-[13px] font-medium text-[#e8e0d0] tracking-wide">{label}</div>
                  <div className="text-[12px] text-[#8a9bbf] mt-1">{sub}</div>
                </div>
              </div>
            ))}
          </div>
          <a href="https://parkes-at-stonebridge-microsite.vercel.app" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#c9973a] hover:bg-[#ddb564] text-white font-bold text-[16px] py-6 rounded-2xl tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5">
            Explore Our Full Neighborhood Guide →
          </a>
        </div>
      </section>

      {/* ══ OPEN HOUSE ════════════════════════════════════════════════════════ */}
      <section id="openhouse" className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#c9973a]" />
                <span className="text-[11px] font-medium text-[#c9973a] tracking-[0.14em] uppercase">Come See It</span>
              </div>
              <h2 className="text-[#1a2744] font-light leading-tight mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,48px)" }}>
                Upcoming <em className="italic text-[#c9973a]">open house</em> dates.
              </h2>
              <p className="text-[15px] text-[#1a2744]/65 leading-[1.75] mb-4">
                No pressure, no hard sell, no one following you from room to room saying &quot;can you just picture yourself here?&quot; Come see the home, walk the park, ask questions — or just enjoy the finishes.
              </p>
              <p className="text-[15px] text-[#1a2744]/65 leading-[1.75] mb-8">
                Tours can also be scheduled privately at a time that works for you. Use the AI agent below or call Mark directly.
              </p>
              <a href="tel:8168535467" className="inline-flex items-center gap-2 bg-[#1a2744] hover:bg-[#243259] text-white text-[13px] font-semibold px-8 py-4 rounded-lg tracking-widest uppercase transition-colors duration-200">
                📞 Call Mark: (816) 853-5467
              </a>
            </div>

            <div className="flex flex-col gap-4 pt-2">
              {openHouses.map((oh, idx) => (
                <div
                  幕key={idx}
                  className={`rounded-2xl border transition-all duration-200 ${
                    oh.featured
                      ? "border-[#c9973a] bg-[#c9973a]/[0.04]"
                      : "border-[#1a2744]/[0.08] bg-[#f5f0e8] hover:border-[#c9973a] hover:shadow-[0_4px_20px_rgba(201,151,58,0.12)]"
                  }`}
                >
                  <div
                    className="grid items-start gap-5 px-7 py-6"
                    style={{ gridTemplateColumns: oh.day ? "64px 1fr" : "1fr" }}
                  >
                    {oh.day && (
                      <div className="text-center pt-1">
                        <div className="text-[10px] font-semibold text-[#c9973a] tracking-widest uppercase">{oh.month}</div>
                        <div className="text-[#1a2744] font-light leading-none my-0.5" style={{ fontFamily: "var(--font-display)", fontSize: 34 }}>{oh.day}</div>
                        <div className="text-[10px] font-medium text-[#1a2744]/40 tracking-widest uppercase">{oh.dow}</div>
                      </div>
                    )}
                    <div>
                      <span className={`inline-block mb-2 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase ${oh.badgeStyle === "gold" ? "bg-[#c9973a] text-white" : "bg-[#1a2744]/10 text-[#1a2744]"}`}>
                        {oh.badge}
                      </span>
                      {oh.headline && (
                        <div className="text-[15px] font-semibold text-[#1a2744] mb-1">{oh.headline}</div>
                      )}
                      <div className="text-[13px] font-medium text-[#1a2744] mb-1">{oh.time}</div>
                      {oh.subline && (
                        <div className="text-[12px] text-[#1a2744]/55 leading-relaxed">{oh.subline}</div>
                      )}
                      {oh.cta && (
                        <a
                          href={oh.cta.href}
                          className="inline-flex items-center gap-2 mt-4 bg-[#c9973a] hover:bg-[#ddb564] text-white text-[12px] font-semibold px-5 py-2.5 rounded-lg tracking-widest uppercase transition-colors duration-200"
                        >
                          {oh.cta.label}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ AI INTAKE — below Open House ══════════════════════════════════════ */}
      <section id="contact" className="bg-[#ede6d8] py-24">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#c9973a]" />
                <span className="text-[11px] font-medium text-[#c9973a] tracking-[0.14em] uppercase">Smart Intake</span>
              </div>
              <h2 className="text-[#1a2744] font-light leading-tight mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,48px)" }}>
                Talk to an AI agent. <em className="italic text-[#c9973a]">Right now.</em>
              </h2>
              <p className="text-[16px] text-[#1a2744]/70 leading-[1.7] mb-8 max-w-[400px]">
                Have questions about the property, the neighborhood, or the process? Our AI agent is available 24/7 — no hold music, no voicemail, no &quot;someone will be in touch.&quot; Just answers.
              </p>
              <ul className="space-y-2">
                {[
                  "Available 24 hours a day, 7 days a week",
                  "Answer questions about the property instantly",
                  "Schedule a tour or request showing info",
                  "Connect to Mark Solomon directly if needed",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-[#1a2744]">
                    <svg style={{ width: 18, height: 18 }} fill="none" stroke="#c9973a" strokeWidth={2} viewBox="0 0 24 24" className="flex-shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <AIIntakeWidget />
          </div>
        </div>
      </section>

      {/* ══ SELLER CTA ════════════════════════════════════════════════════════ */}
      <section className="bg-[#1a2744] py-24">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-[11px] font-semibold text-[#c9973a] tracking-[0.12em] uppercase bg-[#c9973a]/12 border border-[#c9973a]/30 px-4 py-2 rounded mb-6">For Sellers</span>
              <h2 className="text-white font-light leading-tight mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,3.5vw,42px)" }}>
                Love this? Imagine what we&apos;d do <em className="italic text-[#c9973a]">for yours.</em>
              </h2>
              <p className="text-[17px] font-light text-[#e8e0d0] leading-[1.7] mb-9 max-w-[480px]">
                I build custom, AI-driven websites like this one for every single one of my sellers — because in today&apos;s market, maximum exposure means maximum offer. A cheap MLS template and a lockbox don&apos;t cut it anymore. Your home deserves a real marketing strategy.
              </p>
              <a href="https://solomonhomeservices.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#c9973a] hover:bg-[#ddb564] text-white text-[13px] font-semibold px-8 py-4 rounded-lg tracking-widest uppercase transition-colors duration-200">
                List With Mark →
              </a>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-12 text-center">
              <div className="w-[72px] h-[72px] rounded-full bg-[#c9973a]/10 border border-[#c9973a]/20 flex items-center justify-center mx-auto mb-6">
                <svg style={{ width: 36, height: 36 }} fill="none" stroke="#c9973a" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-white font-light mb-3" style={{ fontFamily: "var(--font-display)", fontSize: 22 }}>What you get</h3>
              <p className="text-[14px] text-[#8a9bbf] leading-[1.65] mb-7">
                Custom property website · Professional photography coordination · AI lead capture · Social media campaign · MLS premium placement · Tactical pricing strategy
              </p>
              <a href="https://solomonhomeservices.com" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#c9973a] text-[#c9973a] hover:bg-[#c9973a] hover:text-white text-[13px] font-semibold px-7 py-3 rounded-lg tracking-widest uppercase transition-all duration-200">
                See the Strategy →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ AGENT CTA ═════════════════════════════════════════════════════════ */}
      <div className="bg-[#ede6d8] py-16">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="bg-white rounded-2xl px-12 py-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-12">
            <div>
              <div className="text-[11px] font-medium text-[#c9973a] tracking-[0.14em] uppercase mb-3">For Agents · The &quot;Steal My Marketing&quot; Section</div>
              <h2 className="text-[#1a2744] font-light leading-tight mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,2.5vw,30px)" }}>
                Are you an agent <em className="italic text-[#c9973a]">drooling</em> over this tech?
              </h2>
              <p className="text-[15px] text-[#1a2744]/60 leading-[1.65] max-w-[520px]">
                Good news: you can steal my marketing. I build custom single-property websites for agents who want to give their listings a serious competitive advantage. Powered by AI, branded to you, live in days — not weeks. Your clients will think you hung the moon.
              </p>
            </div>
            <a href="https://solobusinessdude.com" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap inline-flex bg-[#c9973a] hover:bg-[#ddb564] text-white text-[13px] font-semibold px-8 py-4 rounded-lg tracking-widest uppercase transition-colors duration-200">
              Get Your Site →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
