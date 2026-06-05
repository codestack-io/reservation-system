import Link from "next/link";

export default function FailedPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-red-600">
        Reservation Failed
      </h1>

      <Link
        href="/reservation"
        className="mt-6 inline-block"
      >
        Try Again
      </Link>
    </div>
  );
}