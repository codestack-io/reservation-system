"use client";

import { motion } from "framer-motion";

export default function DashboardPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-3xl font-bold">
        Dashboard Overview
      </h1>

      <p className="text-muted-foreground mt-2">
        Welcome to your restaurant admin panel.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-5 rounded-lg border bg-card shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all">
          Total Reservations: 120
        </div>

        <div className="p-5 rounded-lg border bg-card shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all">
          Active Tables: 18
        </div>

        <div className="p-5 rounded-lg border bg-card shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all">
          Menu Items: 45
        </div>
      </div>
    </motion.div>
  );
}