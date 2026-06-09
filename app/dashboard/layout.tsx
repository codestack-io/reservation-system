"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import {
  LayoutDashboard,
  Calendar,
  Utensils,
  Table,
  BarChart3,
  Users,
  Settings,
  Menu,
} from "lucide-react";

import { getRole } from "@/lib/auth";

const allNavItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },

  { name: "Reservations", href: "/dashboard/reservation", icon: Calendar },

  // 🔴 ADMIN ONLY
  { name: "Menu", href: "/dashboard/menu", icon: Utensils, role: "admin" },
  { name: "Tables", href: "/dashboard/tables", icon: Table, role: "admin" },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3, role: "admin" },
  { name: "Users", href: "/dashboard/users", icon: Users, role: "admin" },
  { name: "Settings", href: "/dashboard/settings", icon: Settings, role: "admin" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const role = getRole();

  // 🚨 protect dashboard
 useEffect(() => {
  if (!role) {
    const currentPath = pathname;

    router.push(
      `/auth/login?redirect=${encodeURIComponent(currentPath)}`
    );
  }
}, [role, pathname, router]);

  const navItems = allNavItems.filter((item) => {
    if (!item.role) return true; // public dashboard items
    return item.role === role;   // admin-only filter
  });

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex bg-[color:var(--background)] text-[color:var(--foreground)]">

      {/* HOVER ZONE */}
      <div
        className="fixed left-0 top-0 h-full w-2 z-50"
        onMouseEnter={() => setOpen(true)}
      />

      {/* SIDEBAR */}
      <aside
        onMouseLeave={() => setOpen(false)}
        className={`fixed left-0 top-0 h-full border-r
        bg-[color:var(--background)] shadow-sm transition-all duration-300 flex flex-col
        ${open ? "w-72" : "w-16"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b">
          {open && (
            <div>
              <h1 className="text-base font-semibold">Admin Panel</h1>
              <p className="text-xs opacity-60 capitalize">
                Role: {role}
              </p>
            </div>
          )}

          <Menu size={20} className="opacity-70" />
        </div>

        {/* NAV */}
        <nav className="mt-4 flex-1 space-y-1 px-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition
                  ${
                    active
                      ? "bg-[color:var(--primary)] text-white"
                      : "hover:bg-[color:var(--secondary)]/40"
                  }`}
              >
                <Icon size={18} />

                {open && (
                  <span className="animate-fade-in font-medium">
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* MAIN */}
      <main className={`flex-1 p-6 transition-all ${open ? "ml-72" : "ml-16"}`}>
        {children}
      </main>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.25s ease-out;
        }
      `}</style>
    </div>
  );
}