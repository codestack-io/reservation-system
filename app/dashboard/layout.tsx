"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

const allNavItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Reservations", href: "/dashboard/reservation", icon: Calendar },

  // ADMIN ONLY
  { name: "Menu", href: "/dashboard/menu", icon: Utensils, role: "user" },
  { name: "Tables", href: "/dashboard/tables", icon: Table, role: "admin" },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3, role: "admin" },
  { name: "Users", href: "/dashboard/users", icon: Users, role: "admin" },

  // USER ONLY (PROFILE)
  { name: "Profile", href: "/dashboard/profile", icon: Users, role: "user" },

  { name: "Settings", href: "/dashboard/settings", icon: Settings, role: "user" },
];
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const router = useRouter();

  // ✅ LOAD USER FROM LOCALSTORAGE (FIXED)
 

  // 🚨 PROTECT ROUTE (FIXED LOOP ISSUE)
 useEffect(() => {
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/auth/login");
        return;
      }

      const API = process.env.NEXT_PUBLIC_API_URL;

      const res = await fetch(`${API}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        router.push("/auth/login");
        return;
      }

      const data = await res.json();

      setRole(data.user.role);

      // optional sync
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (err) {
      console.error(err);
      router.push("/auth/login");
    } finally {
      setLoading(false);
    }
  };

  fetchUser();
}, []);

  // FILTER NAV ITEMS
  const navItems = allNavItems.filter((item) => {
    if (!item.role) return true;
    return item.role === role;
  });

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  // 🔥 IMPORTANT: prevent UI flash before role loads
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-sm opacity-60">Loading dashboard...</p>
      </div>
    );
  }

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
        className={`fixed left-0 top-0 h-full border-r bg-[color:var(--background)]
        shadow-sm transition-all duration-300 flex flex-col
        ${open ? "w-72" : "w-16"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b">
          {open && (
            <div>
              <h1 className="text-base font-semibold">Admin Panel</h1>
              <p className="text-xs opacity-60 capitalize">
                Role: {role || "user"}
              </p>
            </div>
          )}

          <Menu size={20} className="opacity-70" />
        </div>

        {/* NAV */}
        <nav className="mt-4 flex-1 space-y-1 px-2">
          {navItems.map((item) => {
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