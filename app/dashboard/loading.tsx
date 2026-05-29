import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="p-8 space-y-6">

      <Skeleton className="h-10 w-64 rounded-xl" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Skeleton className="h-40 rounded-2xl" />
        <Skeleton className="h-40 rounded-2xl" />
        <Skeleton className="h-40 rounded-2xl" />

      </div>

      <Skeleton className="h-[400px] rounded-2xl" />
    </div>
  );
}