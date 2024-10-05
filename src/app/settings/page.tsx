"use client"

import { useState } from "react";
import DashboardLayout from "../dashboard/layout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const initialSettings = [
  { category: "Account", value: true },
  { category: "Notifications", value: false },
  { category: "Language", value: "English" },
  { category: "Theme", value: "Dark" },
];

export default function SettingsPage() {
  const [settings, setSettings] = useState(initialSettings);

  const handleToggle = (index: number) => {
    const newSettings = [...settings];
    newSettings[index].value = !newSettings[index].value;
    setSettings(newSettings);
  };

  const handleSelect = (index: number, value: string) => {
    const newSettings = [...settings];
    newSettings[index].value = value;
    setSettings(newSettings);
  };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {settings.map((setting, index) => (
              <TableRow key={setting.category}>
                <TableCell className="font-medium">{setting.category}</TableCell>
                <TableCell>
                  {typeof setting.value === "boolean" ? (
                    <Switch
                      checked={setting.value}
                      onCheckedChange={() => handleToggle(index)}
                    />
                  ) : setting.category === "Language" ? (
                    <Select
                      value={setting.value as string}
                      onValueChange={(value) => handleSelect(index, value)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Spanish">Spanish</SelectItem>
                        <SelectItem value="French">French</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Select
                      value={setting.value as string}
                      onValueChange={(value) => handleSelect(index, value)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Light">Light</SelectItem>
                        <SelectItem value="Dark">Dark</SelectItem>
                        <SelectItem value="System">System</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
}