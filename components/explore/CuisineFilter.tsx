"use client";

interface CuisineFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CuisineFilter({
  value,
  onChange,
}: CuisineFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-lg px-4 py-2"
    >
      <option value="">All Cuisines</option>
      <option value="Bangladeshi">Bangladeshi</option>
      <option value="Chinese">Chinese</option>
      <option value="Italian">Italian</option>
      <option value="Thai">Thai</option>
      <option value="Indian">Indian</option>
    </select>
  );
}