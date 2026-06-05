import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-green-600">
        Reservation Successful
      </h1>

      <Link
        href="/"
        className="mt-6 inline-block"
      >
        Back Home
      </Link>
    </div>
  );
}