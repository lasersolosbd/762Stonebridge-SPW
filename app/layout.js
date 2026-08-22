import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://762stonebridge.solomonhomeservices.com"),

  title: {
    default: "762 Stonebridge Drive — Longmont, CO 80503 | $460,000 | Solomon Home Services",
    template: "%s | Solomon Home Services",
  },

  description:
    "A 2019-built townhome in Parkes at Stonebridge, Longmont, CO 80503. 3 bed · 2.5 bath · 1,549 sq ft · 2-car garage · Listed at $460,000. Served by St. Vrain Valley schools. Listed by Mark Solomon, REALTOR®.",

  alternates: {
    canonical: "https://762stonebridge.solomonhomeservices.com/",
  },

  openGraph: {
    title: "762 Stonebridge Drive — Longmont, CO 80503 | $460,000",
    description:
      "A 2019-built townhome in Parkes at Stonebridge. 3 bed · 2.5 bath · 1,549 sq ft · 2-car garage. Listed by Mark Solomon, REALTOR®. Schedule a tour today.",
    url: "https://762stonebridge.solomonhomeservices.com/",
    siteName: "Solomon Home Services",
    images: [
      {
        url: "/02-MG_6804.jpg",
        width: 1200,
        height: 630,
        alt: "762 Stonebridge Drive, Longmont CO 80503 — exterior view of townhome listing",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "762 Stonebridge Drive — Longmont, CO 80503 | $460,000",
    description:
      "3 bed · 2.5 bath · 1,549 sq ft · Built 2019 · 2-car garage. Listed by Mark Solomon, REALTOR®.",
    images: ["/02-MG_6804.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — Fraunces (display) + DM Sans (body) */}
        <meta property="fb:app_id" content="906306361981533" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f5f0e8] text-[#1a2744] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
