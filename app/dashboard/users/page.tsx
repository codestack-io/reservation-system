import { getUsers } from "../../services/user.services";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Users Management</h1>
        <p className="text-muted-foreground">
          View all registered users
        </p>
      </div>

      <div className="rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Reservations</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user: (typeof users)[number]) => (
              <TableRow key={user._id.toString()}>
                <TableCell>{user.name ?? "-"}</TableCell>
                <TableCell>{user.email ?? "-"}</TableCell>
                <TableCell className="capitalize">
                  {user.role ?? "-"}
                </TableCell>
                <TableCell>
                  {user.reservationCount ?? 0}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}