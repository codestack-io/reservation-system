"use client";

import Link from "next/link";
import { Search, CalendarDays, Users } from "lucide-react";

interface Location {
  _id: string;
  city: string;
  country: string;
}

interface NavbarProps {
  locations: Location[];
}

export default function Navbar({ locations }: NavbarProps) {
  return (
    <header className="w-full bg-yellow-100 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-light tracking-widest text-slate-900"
        >
          Élan
        </Link>

        {/* Search Section */}
        <div className="hidden lg:flex items-center bg-white text-gray-700 border rounded-full shadow-md overflow-hidden">
          
          {/* Location */}
         <div className="flex items-center px-5 py-3 border-r">
  <Search size={18} />

  <select className="ml-2 outline-none bg-transparent w-56">
    <option value="">Select Location</option>

    {locations.map((location) => (
      <option key={location._id} value={location.city}>
        {location.city}, {location.country}
      </option>
    ))}
  </select>
</div>

          {/* Date */}
          <div className="flex items-center px-5 py-3 border-r">
            <CalendarDays size={18} />
            <input
              type="date"
              className="ml-2 outline-none"
            />
          </div>

          {/* Guests */}
          <div className="flex items-center px-5 py-3">
            <Users size={18} />
            <select className="ml-2 outline-none bg-transparent">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5 Guests</option>
              <option>6 Guests</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 transition">
            Search
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="text-slate-700 hover:text-slate-900"
          >
            Dashboard
          </Link>

          <Link
            href="/reservations"
            className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition"
          >
            Reserve
          </Link>
        </div>
      </div>
    </header>
  );
}