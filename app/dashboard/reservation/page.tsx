"use client";

import { useEffect, useState } from "react";
import TableLayout from "../tables/components/TableLayout";

interface Table {
  _id: string;
  tableNumber: string | number;
  capacity: number;
  category: "Regular" | "VIP" | "Smoking Room" | "Dinner";
  status: "available" | "reserved" | "maintenance";
  reservationDetails?: {
    customerName: string;
    reservationId: string;
    date: string;
    time: string;
    contact: string;
    request?: string;
  };
}

type FilterTab = Table["category"] | "Booked";

export default function ReservationsPage() {
  const [tables, setTables] = useState<Table[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<FilterTab>("Regular");
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);

  const fetchTables = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/tables");
      const data = await res.json();
      
      const normalizedData = data.map((t: any, index: number) => {
        // 1. Safe Category Fallback: If your DB doesn't have categories yet, 
        // let's dynamically make every 3rd table a "VIP" table so you can test it!
        let cat: Table["category"] = "Regular";
        const dbCat = String(t.category || "").toLowerCase().trim();
        
        if (dbCat === "vip" || index % 3 === 0) {
          cat = "VIP"; // Forces temporary VIP status for testing if empty
        } else if (dbCat === "smoking room") {
          cat = "Smoking Room";
        } else if (dbCat === "dinner") {
          cat = "Dinner";
        }

        // 2. Status Mapping: Since your DB uses "maintenance", 
        // let's treat "maintenance" tables as our "Booked" visual state for now!
        let stat: Table["status"] = "available";
        const dbStat = String(t.status || "").toLowerCase().trim();
        
        if (dbStat === "maintenance" || dbStat === "reserved") {
          stat = "reserved"; // This forces your maintenance tables to look "Booked" on the UI
        }

        return {
          _id: t._id,
          tableNumber: t.tableNumber || `0${index + 1}A`,
          capacity: t.capacity || 4,
          category: cat,
          status: stat,
          reservationDetails: stat === "reserved" ? {
            customerName: "Emily Williams",
            reservationId: `#${t._id ? t._id.slice(-6) : "123456"}`,
            date: "23/06/2026",
            time: "19:00",
            contact: "0824151421",
            request: "Near window"
          } : undefined
        };
      });

      setTables(normalizedData);
    } catch (err) {
      console.error("Error fetching tables:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);

  const totalTables = tables.length;
  const bookedCount = tables.filter((t) => t.status === "reserved").length;
  const availableCount = tables.filter((t) => t.status === "available").length;

  // Filter Logic
  const filteredTables = tables.filter((table) => {
    if (activeTab === "Booked") {
      return table.status === "reserved";
    }
    return table.category === activeTab;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-gray-500 font-medium animate-pulse">Loading seating arrangement...</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto p-6 bg-white min-h-screen">
      {/* Header Breadcrumb */}
      <div className="flex gap-6 border-b border-gray-100 pb-3 mb-6 text-sm font-medium text-gray-400">
        <button className="hover:text-gray-600">Reservation list</button>
        <button className="hover:text-gray-600">Reservation detail</button>
        <button className="text-gray-800 border-b-2 border-amber-400 pb-3 -mb-[14px]">
          Table Reservation
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Side: Layout Grid Map */}
        <div className="lg:col-span-3">
          <div className="flex flex-wrap gap-3 mb-8">
            {(["Regular", "VIP", "Smoking Room", "Dinner"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedTable(null);
                }}
                className={`px-5 py-2 rounded-full text-xs font-semibold border transition-all ${
                  activeTab === tab
                    ? "bg-amber-400 text-white border-amber-400 shadow-sm shadow-amber-200"
                    : "bg-white text-gray-400 border-gray-200 hover:border-gray-300"
                }`}
              >
                {tab} ({tables.filter(t => t.category === tab).length})
              </button>
            ))}

            <button
              onClick={() => {
                setActiveTab("Booked");
                setSelectedTable(null);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold border transition-all ${
                activeTab === "Booked"
                  ? "bg-red-500 text-white border-red-500 shadow-sm shadow-red-200"
                  : "bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100"
              }`}
            >
              Booked ({bookedCount})
            </button>
          </div>

          {filteredTables.length > 0 ? (
            <TableLayout 
              tables={filteredTables} 
              onSelectTable={(table) => setSelectedTable(table)}
              selectedTableId={selectedTable?._id}
            />
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <p className="text-gray-400 text-sm">
                No tables currently listed under {activeTab}.
              </p>
            </div>
          )}
        </div>

        {/* Right Side: Information Panels */}
        <div className="space-y-6">
          {selectedTable ? (
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative">
              <button onClick={() => setSelectedTable(null)} className="absolute top-4 right-4 text-xs text-gray-400 hover:text-gray-600">✕ Clear</button>
              <h3 className="text-base font-bold text-gray-800 mb-1">Reservation Data</h3>
              <p className="text-xs text-amber-500 font-semibold mb-4">Table {selectedTable.tableNumber}</p>
              
              {selectedTable.status === "reserved" ? (
                <div className="space-y-4 text-sm">
                  <h4 className="font-bold text-gray-800">{selectedTable.reservationDetails?.customerName}</h4>
                  <div className="space-y-2 pt-2 border-t text-gray-600">
                    <div className="flex justify-between"><span>Date</span><span>{selectedTable.reservationDetails?.date}</span></div>
                    <div className="flex justify-between"><span>Time</span><span>{selectedTable.reservationDetails?.time}</span></div>
                    <div className="flex justify-between"><span>Contact</span><span>{selectedTable.reservationDetails?.contact}</span></div>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-green-600 font-semibold">This table is Available / Ready!</p>
              )}
            </div>
          ) : (
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="text-base font-bold text-gray-800 mb-4">Seating Analytics</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between"><span>Total Active</span><span className="font-bold">{totalTables}</span></div>
                <div className="flex justify-between"><span>Booked (Maintenance)</span><span className="text-amber-600 font-semibold">{bookedCount}</span></div>
                <div className="flex justify-between"><span>Available</span><span className="text-green-600 font-semibold">{availableCount}</span></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}