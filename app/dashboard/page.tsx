"use client";

import Navbar from "../../components/shared/Navbar";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ================= NAVBAR ================= */}
      <Navbar locations={[]} />
       
     {/* ================= HEADER ================= */}
        <div className="space-y-2 mb-8">

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Dashboard Overview
          </h1>

          <p className="text-muted-foreground">
            Welcome to your restaurant admin panel.
          </p>

        </div>

        {/* ================= STATS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="p-6 rounded-xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all">
            <p className="text-sm text-muted-foreground">
              Total Reservations
            </p>

            <h2 className="text-2xl font-semibold mt-2">
              120
            </h2>
          </div>

          {/* CARD 2 */}
          <div className="p-6 rounded-xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all">
            <p className="text-sm text-muted-foreground">
              Active Tables
            </p>

            <h2 className="text-2xl font-semibold mt-2">
              18
            </h2>
          </div>

          {/* CARD 3 */}
          <div className="p-6 rounded-xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all">
            <p className="text-sm text-muted-foreground">
              Menu Items
            </p>

            <h2 className="text-2xl font-semibold mt-2">
              45
            </h2>
          </div>

        </div>

    
    </div>
  );
}