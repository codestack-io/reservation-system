"use client";

import React from "react";

interface Table {
  _id: string;
  tableNumber: string | number;
  capacity: number;
  category: "Regular" | "VIP" | "Smoking Room" | "Dinner";
  status: "available" | "reserved" | "maintenance";
  // Add optional customer reservation data fields
  reservationDetails?: {
    customerName: string;
    reservationId: string;
    date: string;
    time: string;
    contact: string;
    request?: string;
  };
}

interface TableLayoutProps {
  tables: Table[];
  onSelectTable: (table: Table) => void;
  selectedTableId?: string;
}

export default function TableLayout({ tables, onSelectTable, selectedTableId }: TableLayoutProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-6 bg-gray-50 rounded-2xl">
      {tables.map((table) => (
        <TableCard 
          key={table._id} 
          table={table} 
          onClick={() => onSelectTable(table)}
          isSelected={selectedTableId === table._id}
        />
      ))}
    </div>
  );
}

function TableCard({ table, onClick, isSelected }: { table: Table; onClick: () => void; isSelected: boolean }) {
  const isBooked = table.status === "reserved";

  return (
    <div 
      onClick={onClick}
      className={`relative flex items-center justify-center h-44 w-44 mx-auto cursor-pointer group`}
    >
      {/* --- SEATS / CHAIRS --- */}
      <div className="absolute top-0 flex gap-4">
        <div className="w-7 h-4 bg-slate-800 rounded-t-md transition-transform group-hover:-translate-y-0.5" />
        {table.capacity > 4 && <div className="w-7 h-4 bg-slate-800 rounded-t-md transition-transform group-hover:-translate-y-0.5" />}
      </div>

      <div className="absolute bottom-0 flex gap-4">
        <div className="w-7 h-4 bg-slate-800 rounded-b-md transition-transform group-hover:translate-y-0.5" />
        {table.capacity > 4 && <div className="w-7 h-4 bg-slate-800 rounded-b-md transition-transform group-hover:translate-y-0.5" />}
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-7 bg-slate-800 rounded-l-md transition-transform group-hover:-translate-x-0.5" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-7 bg-slate-800 rounded-r-md transition-transform group-hover:translate-x-0.5" />

      {/* --- MAIN TABLE BODY --- */}
      <div className={`relative z-10 w-32 h-32 bg-white rounded-2xl shadow-md border flex flex-col items-center justify-center transition-all ${
        isSelected 
          ? "border-amber-400 ring-2 ring-amber-100 scale-105" 
          : "border-gray-100 group-hover:scale-105"
      }`}>
        
        {isBooked && (
          <span className="absolute top-2 text-[10px] font-bold text-amber-500 tracking-wider uppercase rotate-12">
            Booked
          </span>
        )}

        <span className="text-sm font-semibold text-gray-800">
          Table {table.tableNumber}
        </span>
        <span className="text-xs text-gray-400 mt-1">
          capacity {table.capacity}
        </span>
      </div>
    </div>
  );
}