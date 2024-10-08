"use client"

import Link from "next/link";
import { LayoutDashboard, Users, ShoppingCart, Settings, Briefcase } from "lucide-react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-background text-foreground h-screen">
      <ul className="flex flex-col py-4 space-y-1">
        <SidebarItem href="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" isActive={pathname === "/dashboard"} />
        <SidebarItem href="/users" icon={<Users size={20} />} label="Users" isActive={pathname === "/users"} />
        <SidebarItem href="/orders" icon={<ShoppingCart size={20} />} label="Orders" isActive={pathname === "/orders"} />
        <SidebarItem href="/jobs" icon={<Briefcase size={20} />} label="Jobs" isActive={pathname === "/jobs"} />
        <SidebarItem href="/settings" icon={<Settings size={20} />} label="Settings" isActive={pathname === "/settings"} />
      </ul>
    </div>
  );
};

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const SidebarItem = ({ href, icon, label, isActive }: SidebarItemProps) => (
  <li>
    <Link
      href={href}
      className={`flex items-center px-6 py-3 transition-colors duration-200 ${
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
      }`}
    >
      <span className="mr-3">{icon}</span>
      {label}
    </Link>
  </li>
);

export default Sidebar;
