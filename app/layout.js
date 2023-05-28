import "./globals.css";
import { Ibarra_Real_Nova } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import Navbar from "./Navbar";

const IRN = Ibarra_Real_Nova({ subsets: ["latin"] });

export const metadata = {
  title: "Hussam Hassan",
  description: "Hussam's personal website.",
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
