import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://762stonebridge.solomonhomeservices.com"),
  title: {
    default: "762 Stonebridge Drive, Longmont CO 80503 | Solomon Home Services",
    template: "%s | Solomon Home Services",
  },
  description:
    "762 Stonebridge Drive, Longmont, CO 80503 — 3 bed, 3 bath, 1,549 sq ft townhome in Parkes at Stonebridge. Listed at $460,000. Built 2019. 2-car garage. Served by St. Vrain Valley schools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#f5f0e8] text-[#1a2744] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
