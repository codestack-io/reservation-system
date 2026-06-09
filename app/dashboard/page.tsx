"use client";

import Navbar from "../../components/shared/Navbar";
import { getRole } from "@/lib/auth";

export default function DashboardPage() {
  const role = getRole();

  return (
    <div className="min-h-screen bg-background">

      <Navbar locations={[]} />

      {/* HEADER */}
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Dashboard Overview
        </h1>

        <p className="text-muted-foreground">
          Welcome {role === "admin" ? "Admin" : "User"} to your restaurant panel.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="p-6 rounded-xl border">
          <p>Total Reservations</p>
          <h2 className="text-2xl font-bold">120</h2>
        </div>

        <div className="p-6 rounded-xl border">
          <p>Active Tables</p>
          <h2 className="text-2xl font-bold">18</h2>
        </div>

        <div className="p-6 rounded-xl border">
          <p>Menu Items</p>
          <h2 className="text-2xl font-bold">45</h2>
        </div>

      </div>

      {/* ADMIN EXTRA SECTION */}
      {role === "admin" && (
        <div className="mt-10 p-6 border rounded-xl bg-muted/10">
          <h2 className="text-xl font-semibold">
            Admin Analytics Preview
          </h2>
          <p className="text-sm opacity-70 mt-2">
            Only visible to admin users
          </p>
        </div>
      )}

    </div>
  );
}