import { UsersTable } from "@/components/layout/UsersTable";
import DashboardLayout from "../dashboard/layout";

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">
            Here's a list of all users in your system.
          </p>
        </div>
        <UsersTable />
      </div>
    </DashboardLayout>
  );
}
