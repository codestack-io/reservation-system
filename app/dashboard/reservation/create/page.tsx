"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateReservationPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    tableId: "",
    specialRequest: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        status: "pending",
      }),
    });

    router.push("/dashboard/reservation");
    router.refresh();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">
        Create Reservation
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="customerName"
          placeholder="Customer Name"
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-[color:var(--border)]"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-[color:var(--border)]"
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-[color:var(--border)]"
        />

        <input
          name="guests"
          placeholder="Guests"
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-[color:var(--border)]"
        />

        <input
          name="date"
          type="date"
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-[color:var(--border)]"
        />

        <input
          name="time"
          type="time"
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-[color:var(--border)]"
        />

        <textarea
          name="specialRequest"
          placeholder="Special Request"
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-[color:var(--border)]"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-[color:var(--primary)] text-white"
        >
          Create Reservation
        </button>

      </form>
    </div>
  );
}