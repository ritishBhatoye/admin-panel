import { Card } from "@/components/ui/card";
import { UsersIcon, ShoppingCartIcon, DollarSignIcon, PackageIcon } from "lucide-react";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title="Total Users" value="1,234" icon={<UsersIcon className="h-6 w-6" />} />
        <DashboardCard title="Total Revenue" value="$12,345" icon={<DollarSignIcon className="h-6 w-6" />} />
        <DashboardCard title="Active Products" value="567" icon={<PackageIcon className="h-6 w-6" />} />
        <DashboardCard title="Pending Orders" value="89" icon={<ShoppingCartIcon className="h-6 w-6" />} />
      </div>
    </div>
  );
}

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

function DashboardCard({ title, value, icon }: DashboardCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="bg-blue-100 p-3 rounded-full">{icon}</div>
      </div>
    </Card>
  );
}