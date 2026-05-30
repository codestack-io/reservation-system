import Link from "next/link";

const navItems = [
  { name: "Overview", href: "/dashboard" },
  { name: "Reservations", href: "/dashboard/reservations" },
  { name: "Menu", href: "/dashboard/menu" },
  { name: "Tables", href: "/dashboard/tables" },
  { name: "Analytics", href: "/dashboard/analytics" },
  { name: "Users", href: "/dashboard/users" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white p-5">
        <h2 className="text-xl font-bold mb-6">
          Admin Dashboard
        </h2>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        {children}
      </main>
    </div>
  );
}