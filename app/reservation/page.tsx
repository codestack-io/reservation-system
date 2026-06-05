"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReservationPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    guests: 2,
    date: "",
    time: "",
    tableId: "",
    specialRequest: "",
  });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const res = await fetch(
      "/api/reservations",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    if (res.ok) {
      router.push("/reservation/success");
    } else {
      router.push("/reservation/failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Book a Table
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3"
          value={form.customerName}
          onChange={(e) =>
            setForm({
              ...form,
              customerName: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="tel"
          placeholder="Phone"
          className="w-full border p-3"
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
        />

        <input
          type="date"
          className="w-full border p-3"
          value={form.date}
          onChange={(e) =>
            setForm({
              ...form,
              date: e.target.value,
            })
          }
        />

        <input
          type="time"
          className="w-full border p-3"
          value={form.time}
          onChange={(e) =>
            setForm({
              ...form,
              time: e.target.value,
            })
          }
        />

        <button
          type="submit"
          className="bg-amber-500 text-white px-6 py-3 rounded"
        >
          Reserve Table
        </button>
      </form>
    </div>
  );
}