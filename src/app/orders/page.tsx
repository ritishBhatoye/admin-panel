import { OrdersTable } from "@/components/layout/OrdersTable";
import DashboardLayout from "../dashboard/layout";

export default function OrdersPage() {
  return (
    <DashboardLayout>
      <div className="bg-background text-foreground min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">Orders</h1>
        <OrdersTable />
      </div>
    </DashboardLayout>
  );
}