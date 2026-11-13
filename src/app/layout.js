// Packages
import localFont from "next/font/local";

// Utils
import "./globals.css";
import "../styles/custom.css";

const gotham = localFont({
  src: [
    { path: "../assets/fonts/gotham_book.woff", weight: "400", style: "normal" },
    { path: "../assets/fonts/gotham_med.woff", weight: "500", style: "normal" },
  ],
  variable: "--font-gotham",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Daniyal Hasan Shah — Experienced Software Engineer",
  icons: { icon: "/portfolio.svg" },
  description:
    "Experienced software engineer building web applications end to end with React, Next.js, Node.js and Python.",
  openGraph: {
    title: "Daniyal Hasan Shah — Experienced Software Engineer",
    description:
      "Experienced software engineer building web applications end to end with React, Next.js, Node.js and Python.",
    images: ["/images/og-image-2027.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={gotham.variable}>
      <body className="bg-backdrop font-sans text-base leading-[1.6] text-ink">{children}</body>
    </html>
  );
}
