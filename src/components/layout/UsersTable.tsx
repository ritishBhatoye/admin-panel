"use client"

import { useState } from "react";
import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", lastOrder: "2023-01-01", method: "Credit Card", avatar: "/avatars/avatar-1.png" },
  { id: 2, name: "Alice Smith", email: "alice@example.com", lastOrder: "2023-02-15", method: "PayPal", avatar: "/avatars/avatar-2.png" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", lastOrder: "2023-03-20", method: "Stripe", avatar: "/avatars/avatar-3.png" },
  { id: 4, name: "Emma Brown", email: "emma@example.com", lastOrder: "2023-04-10", method: "Venmo", avatar: "/avatars/avatar-4.png" },
  { id: 5, name: "Michael Davis", email: "michael@example.com", lastOrder: "2023-05-05", method: "Cash", avatar: "/avatars/avatar-5.png" },
  { id: 6, name: "Sophia Wilson", email: "sophia@example.com", lastOrder: "2023-06-18", method: "Bank Transfer", avatar: "/avatars/avatar-6.png" },
  { id: 7, name: "Liam Garcia", email: "liam@example.com", lastOrder: "2023-07-22", method: "Payoneer", avatar: "/avatars/avatar-7.png" },
  { id: 8, name: "Olivia Martinez", email: "olivia@example.com", lastOrder: "2023-08-30", method: "Apple Pay", avatar: "/avatars/avatar-8.png" },
];

const ITEMS_PER_PAGE = 5;

export function UsersTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentUsers = users.slice(startIndex, endIndex);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Last Order</TableHead>
            <TableHead>Method</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <Image src={user.avatar} alt={user.name} width={32} height={32} className="rounded-full mr-2" />
                  {user.name}
                </div>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.lastOrder}</TableCell>
              <TableCell>{user.method}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
