import { UsersTable } from "@/components/layout/UsersTable";
import DashboardLayout from "../dashboard/layout";

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="bg-background text-foreground min-h-screen p-8">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Users</h1>
        <p className="text-muted-foreground mb-6">
          Here's a list of all users in your system.
        </p>
        <UsersTable />
      </div>
    </DashboardLayout>
  );
}
