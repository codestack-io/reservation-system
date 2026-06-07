import Reservation from "../models/reservations";
import Table from "../models/table";

export async function getDashboardStats() {
  return {
    totalReservations: await Reservation.countDocuments(),
    activeTables: await Table.countDocuments({
      status: "occupied",
    }),
  };
}