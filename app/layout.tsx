import type { Metadata } from "next";
import { Merriweather_Sans, Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ['latin'],
  variable: "--font-mulish",
});

const merriweather = Merriweather_Sans({
  subsets: ['latin'],
  variable: "--font-merriweather-sans",
});

export const metadata: Metadata = {
  title: "Riyaz's Portfolio",
  description: "3D portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
