"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

const navItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Reservations", href: "/dashboard/reservations", icon: Calendar },
  { name: "Menu", href: "/dashboard/menu", icon: Utensils },
  { name: "Tables", href: "/dashboard/tables", icon: Table },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background text-foreground">

      {/* ================= HOVER TRIGGER ZONE ================= */}
      <div
        className="fixed left-0 top-0 h-full w-2 z-50"
        onMouseEnter={() => setOpen(true)}
      />

      {/* ================= SIDEBAR ================= */}
      <aside
        onMouseLeave={() => setOpen(false)}
        className={`fixed left-0 top-0 h-full border-r border-border bg-card backdrop-blur-md shadow-lg transition-all duration-300 flex flex-col
        ${open ? "w-72" : "w-16"}`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b border-border">

          {open && (
            <h1 className="font-semibold text-lg tracking-wide">
              Admin Panel
            </h1>
          )}

          <Menu size={20} className="ml-auto text-muted-foreground" />

        </div>

        {/* NAV */}
        <nav className="mt-4 flex-1 space-y-1 px-2">

          {navItems.map((item, index) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all duration-300
                  ${active
                    ? "bg-primary text-primary-foreground shadow"
                    : "hover:bg-secondary/60"
                  }
                `}
              >
                <Icon size={18} />

                {open && (
                  <span className="animate-fade-in">
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}

        </nav>

      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main
        className={`flex-1 p-6 transition-all duration-300
        ${open ? "ml-72" : "ml-16"}`}
      >
        {children}
      </main>

      {/* ================= ANIMATION ================= */}
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
          animation: fade-in 0.3s ease-out;
        }
      `}</style>

    </div>
  );
}