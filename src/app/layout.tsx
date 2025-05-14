import type { Metadata } from "next";
import { Caveat, Inter, Rubik } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const rubik = Rubik({
  weight: "700",
  variable: "--font-rubik",
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: "600",
  variable: "--font-caveat",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "600",
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VivaFlare",
  description: "Unleash Your Event Ignite The Culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${inter.variable} ${caveat.variable} bg-[#101010] antialiased md:overflow-hidden overflow-scroll`}
      >
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
