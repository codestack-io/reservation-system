import type { Metadata } from "next";
import { Caveat_Brush } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const caveatBrush = Caveat_Brush({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: "400",
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
        ${caveatBrush.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden relative">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Background effects */}
        </div>

        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}