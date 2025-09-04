import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABDUL RASHEED | Teacher • Entrepreneur • KMCC Wadi Aldavaser Secretary",
  description:
    "Portfolio of Abdul Rasheed – Teaching, Business, and Community Leadership. B.Com (IIT Delhi).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh bg-background text-foreground`}
      >
        {/* Gradient orbs */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-40" style={{
            background: "radial-gradient(circle at 30% 30%, rgba(96,165,250,.6), transparent 60%)"
          }} />
          <div className="absolute -top-16 right-[-120px] h-[460px] w-[460px] rounded-full blur-3xl opacity-40" style={{
            background: "radial-gradient(circle at 70% 30%, rgba(167,139,250,.55), transparent 60%)"
          }} />
          <div className="absolute bottom-[-140px] left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-3xl opacity-40" style={{
            background: "radial-gradient(circle at 50% 70%, rgba(244,114,182,.5), transparent 60%)"
          }} />
        </div>
        {children}
      </body>
    </html>
  );
}
