import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEMO 2026 | USC's Largest Student Organized Entrepreneurship Conference",
  description: "Join us on April 22nd at USC TCC Ballroom for DEMO 2026 - USC's largest student organized entrepreneurship conference. Sponsored by the USC Lloyd Greif Center for Entrepreneurial Studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
