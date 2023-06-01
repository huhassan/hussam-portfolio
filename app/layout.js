import "./globals.css";
import { Ibarra_Real_Nova } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import Navbar from "./Navbar";

const IRN = Ibarra_Real_Nova({ subsets: ["latin"] });

export const metadata = {
  title: "Hussam Hassan | Persona Portfolio Website",
  description:
    "I'm Hussam, a skilled Project Manager based in Cairo, with a diverse background that spans industries such as localization and travel. From Project Management to Software Development and Customer Support, I've been fortunate to lead teams to success, and gain extensive experience in various domains.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={IRN.className}>
        <Providers>
          <div className="container mx-auto max-w-prose mt-5 px-5">
            <Navbar />
            {children}
            <Analytics />
          </div>
        </Providers>
      </body>
    </html>
  );
}
