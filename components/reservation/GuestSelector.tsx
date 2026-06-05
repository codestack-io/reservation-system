"use client";

interface Props {
  value: number;
  onChange: (guests: number) => void;
}

export default function GuestSelector({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        Guests
      </label>

      <select
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className="w-full border rounded-lg p-3"
      >
        {[1,2,3,4,5,6,7,8].map((guest) => (
          <option key={guest} value={guest}>
            {guest} Guest{guest > 1 ? "s" : ""}
          </option>
        ))}
      </select>
    </div>
  );
}