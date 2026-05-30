export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Dashboard Overview
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome to your restaurant admin panel.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-5 bg-white rounded-lg shadow">
          <h2 className="text-sm text-gray-500">
            Total Reservations
          </h2>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="p-5 bg-white rounded-lg shadow">
          <h2 className="text-sm text-gray-500">
            Active Tables
          </h2>
          <p className="text-2xl font-bold">18</p>
        </div>

        <div className="p-5 bg-white rounded-lg shadow">
          <h2 className="text-sm text-gray-500">
            Total Menu Items
          </h2>
          <p className="text-2xl font-bold">45</p>
        </div>
      </div>
    </div>
  );
}