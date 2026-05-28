import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ReserveTable",
  description: "Luxury Restaurant Reservation System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${playfair.variable}
        h-full antialiased
      `}
    >
    <body className="min-h-full flex flex-col overflow-x-hidden relative">

  <div className="fixed inset-0 -z-10 overflow-hidden">

    {/* <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-orange-500/30 blur-[140px] rounded-full animate-pulse" />

    <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-pink-500/20 blur-[140px] rounded-full animate-pulse" />

    <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-yellow-500/10 blur-[120px] rounded-full" /> */}

  </div>

  {children}
</body>
    </html>
  );
}