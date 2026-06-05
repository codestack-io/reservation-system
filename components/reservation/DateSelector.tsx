"use client";

interface DateSelectorProps {
  value: string;
  onChange: (date: string) => void;
}

export default function DateSelector({
  value,
  onChange,
}: DateSelectorProps) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        Select Date
      </label>

      <input
        type="date"
        value={value}
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg p-3"
      />
    </div>
  );
}