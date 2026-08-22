import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

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
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1870877813130941');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1870877813130941&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
