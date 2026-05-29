"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full px-6 md:px-12 py-5 flex items-center justify-between  text-white">
      
     

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        
        {/* LOGIN BUTTON */}
        <Link
          href="/login"
          className="px-5 py-2 rounded-full border border-white/20 hover:border-white transition duration-300"
        >
          Login
        </Link>

        {/* MY ACCOUNT BUTTON */}
        <Link
          href="/account"
          className="px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition duration-300"
        >
          My Account
        </Link>

      </div>
    </header>
  );
};

export default Header;