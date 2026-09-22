import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mount Shasta Union School District",
  description: "Mount Shasta Union School District",
  openGraph: {
    title: "Mount Shasta Union School District",
    description: "Mount Shasta Union School District",
  },
  twitter: {
    title: "Mount Shasta Union School District",
    description: "Mount Shasta Union School District",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
