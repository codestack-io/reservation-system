"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface DashboardStats {
  totalReservations: number;
  activeTables: number;
  menuItems: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalReservations: 0,
    activeTables: 0,
    menuItems: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch("/api/dashboard");
      const data = await res.json();

      setStats(data);
    };

    fetchStats();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-3xl font-bold">
        Dashboard Overview
      </h1>

      <p className="text-muted-foreground mt-2">
        Welcome to your restaurant admin panel.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-5 rounded-lg border bg-card shadow-sm">
          Total Reservations: {stats.totalReservations}
        </div>

        <div className="p-5 rounded-lg border bg-card shadow-sm">
          Active Tables: {stats.activeTables}
        </div>

        <div className="p-5 rounded-lg border bg-card shadow-sm">
          Menu Items: {stats.menuItems}
        </div>
      </div>
    </motion.div>
  );
}