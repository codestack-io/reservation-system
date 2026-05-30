"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
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
import { Button } from "@/components/ui/button";

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
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex min-h-screen bg-background text-foreground relative">
      
      {/* Hover trigger zone */}
      <div
        className="fixed left-0 top-0 h-full w-3 z-50"
        onMouseEnter={() => setOpen(true)}
      />

      {/* Sidebar */}
      <aside
        onMouseLeave={() => setOpen(false)}
        className={`fixed left-0 top-0 h-full bg-muted/40 backdrop-blur-md border-r shadow-lg transition-all duration-500 overflow-hidden flex flex-col ${
          open ? "w-72" : "w-2"
        }`}
      >
        {/* TOP HEADER */}
        <div className="flex items-center justify-between p-3">
          {open && (
            <h1 className="font-bold text-lg animate-fade-down">
              Admin Panel
            </h1>
          )}

          <Menu className="ml-auto" />
        </div>

        {/* NAV */}
        <nav className="mt-6 space-y-1 px-2 flex-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all duration-300
                ${
                  active
                    ? "bg-primary text-white shadow-md"
                    : "hover:bg-muted"
                }
                ${
                  open
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }
                animate-[drop_0.5s_ease_forwards]`}
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                <Icon size={18} />
                {open && item.name}
              </Link>
            );
          })}
        </nav>

        {/* THEME BUTTON (BOTTOM FIXED INSIDE SIDEBAR) */}
        <div className="p-3 border-t">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            {theme === "dark" ? (
              <>
                <Sun size={18} />
                {open && <span>Light Mode</span>}
              </>
            ) : (
              <>
                <Moon size={18} />
                {open && <span>Dark Mode</span>}
              </>
            )}
          </Button>
        </div>
      </aside>

      {/* MAIN */}
      <main
        className={`flex-1 p-6 transition-all duration-500 ${
          open ? "ml-72" : "ml-2"
        }`}
      >
        {children}
      </main>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes drop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-down {
          animation: drop 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}