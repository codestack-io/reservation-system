"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
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
  const { theme, setTheme } = useTheme();

  const [user, setUser] = useState<any>(null);

  // Load user safely
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Invalid user in localStorage");
        localStorage.removeItem("user");
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null); // instantly update UI
    window.location.href = "/auth/login";
  };

  const loggedInLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Blog", href: "/blog" },
  ];

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

          {/* THEME TOGGLE */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-xl border border-border"
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* AUTH SECTION */}
          {!user ? (
            <>
              <Link href="/auth/login">Login</Link>
              <Link href="/auth/register">Sign Up</Link>
            </>
          ) : (
            <>
              {loggedInLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              ))}

              {/* PROFILE DROPDOWN */}
              <div className="relative group">
                <button className="px-4 py-2 border rounded-xl">
                  {user?.name || "Profile"}
                </button>

                <div className="absolute hidden group-hover:block right-0 mt-2 bg-white text-black shadow-lg rounded-xl overflow-hidden min-w-[150px]">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>

                  <Link
                    href="/settings"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Settings
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}

          {/* RESERVE CTA */}
          <Link
            href="/reservations"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-xl"
          >
            Reserve
          </Link>
        </div>
      </div>
    </header>
  );
}