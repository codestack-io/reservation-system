"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Search, CalendarDays, Users, Sun, Moon } from "lucide-react";

interface Location {
  _id: string;
  city: string;
  country: string;
}

interface NavbarProps {
  locations: Location[];
}

export default function Navbar({ locations }: NavbarProps) {
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";

  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full bg-background text-foreground border-b border-border shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-light tracking-widest"
        >
          Élan
        </Link>

        {/* SEARCH */}
        <div className="hidden lg:flex items-center bg-card border border-border rounded-xl overflow-hidden">

          <div className="flex items-center px-4 py-3 border-r border-border">
            <Search size={18} />
            <select className="ml-2 bg-transparent outline-none w-44">
              <option value="">Location</option>
              {locations.map((location) => (
                <option key={location._id}>
                  {location.city}, {location.country}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center px-4 py-3 border-r border-border">
            <CalendarDays size={18} />
            <input type="date" className="ml-2 bg-transparent outline-none" />
          </div>

          <div className="flex items-center px-4 py-3 border-r border-border">
            <Users size={18} />
            <select className="ml-2 bg-transparent outline-none">
              <option>1 Guest</option>
              <option>2 Guests</option>
            </select>
          </div>

          <button className="bg-primary text-primary-foreground px-6 py-3 hover:opacity-90 transition">
            Search
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* DARK/LIGHT TOGGLE */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-xl border border-border hover:bg-secondary transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* DASHBOARD */}
          {!isDashboard && (
            <Link
              href="/dashboard"
              className="text-foreground hover:text-primary transition"
            >
              Dashboard
            </Link>
          )}

          {/* RESERVE CTA */}
          <Link
            href="/reservations"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-xl hover:opacity-90 transition"
          >
            Reserve
          </Link>

        </div>
      </div>
    </header>
  );
}