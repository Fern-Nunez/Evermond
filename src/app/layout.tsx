import type { Metadata } from "next";
import { Petit_Formal_Script, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import "./globals.css";

const petitFormalScript = Petit_Formal_Script({
  weight: "400", // required for this font
  subsets: ["latin"],
  variable: "--petit-formal-script",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["200", "300", "400"], // choose weights you need
  subsets: ["latin"],
  variable: "--plus-jakarta-sans",
});


export const metadata: Metadata = {
  title: "Evermond",
  description: "A Fashion Brand Rooted in Simplicity and Form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${petitFormalScript.variable}`}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
