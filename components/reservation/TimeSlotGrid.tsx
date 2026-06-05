-"use client";

const timeSlots = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

interface Props {
  value: string;
  onChange: (time: string) => void;
}

export default function TimeSlotGrid({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <h3 className="font-medium mb-3">
        Select Time
      </h3>

      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((slot) => (
          <button
            key={slot}
            type="button"
            onClick={() => onChange(slot)}
            className={`p-2 rounded-lg border ${
              value === slot
                ? "bg-amber-500 text-white"
                : ""
            }`}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
}