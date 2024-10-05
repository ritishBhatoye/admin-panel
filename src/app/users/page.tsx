import { UsersTable } from "@/components/layout/UsersTable";
import DashboardLayout from "../dashboard/layout";

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        <UsersTable />
      </div>
    </DashboardLayout>
  );
}
