"use client";

import { useState } from "react";

interface ReservationFormProps {
  selectedTableId: string;
  tableNumber: string | number;
}

export default function ReservationForm({
  selectedTableId,
  tableNumber,
}: ReservationFormProps) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    request: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          tableId: selectedTableId,
          tableNumber,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Reservation failed");
        return;
      }

      alert("Reservation created successfully!");

      // reset form
      setForm({
        customerName: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        guests: 1,
        request: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* TABLE INFO */}
      <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-sm">
        <p className="font-semibold text-amber-700">
          Table #{tableNumber}
        </p>
      </div>

      {/* NAME */}
      <input
        type="text"
        name="customerName"
        placeholder="Customer Name"
        value={form.customerName}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
        required
      />

      {/* PHONE */}
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
        required
      />

      {/* EMAIL */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      {/* DATE */}
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
        required
      />

      {/* TIME */}
      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
        required
      />

      {/* GUESTS */}
      <select
        name="guests"
        value={form.guests}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
          <option key={n} value={n}>
            {n} Guest{n > 1 ? "s" : ""}
          </option>
        ))}
      </select>

      {/* REQUEST */}
      <textarea
        name="request"
        placeholder="Special Request (optional)"
        value={form.request}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition"
      >
        {loading ? "Creating Reservation..." : "Confirm Reservation"}
      </button>
    </form>
  );
}