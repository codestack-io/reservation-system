"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", reservations: 12 },
  { name: "Tue", reservations: 18 },
  { name: "Wed", reservations: 10 },
  { name: "Thu", reservations: 25 },
  { name: "Fri", reservations: 30 },
];

export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Analytics
      </h1>

      <div className="bg-white p-6 rounded-lg shadow h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="reservations"
              stroke="#000"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}