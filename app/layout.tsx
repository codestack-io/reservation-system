import type { Metadata } from "next";
import { Caveat_Brush } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Providers } from "./provider";
import "leaflet/dist/leaflet.css";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={caveatBrush.variable}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden relative">
        
        <Providers>
          {children}
        </Providers>

        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}