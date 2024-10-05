"use client"

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const orders = [
  { id: "ORD001", status: "Pending", lastOrder: "2023-01-15", method: "Credit Card" },
  { id: "ORD002", status: "Processing", lastOrder: "2023-02-20", method: "PayPal" },
  { id: "ORD003", status: "Completed", lastOrder: "2023-03-10", method: "Stripe" },
  { id: "ORD004", status: "Pending", lastOrder: "2023-04-05", method: "Venmo" },
  { id: "ORD005", status: "Completed", lastOrder: "2023-05-12", method: "Bank Transfer" },
  { id: "ORD006", status: "Processing", lastOrder: "2023-06-18", method: "Apple Pay" },
  { id: "ORD007", status: "Completed", lastOrder: "2023-07-22", method: "Google Pay" },
  { id: "ORD008", status: "Pending", lastOrder: "2023-08-30", method: "Cryptocurrency" },
  { id: "ORD009", status: "Processing", lastOrder: "2023-09-05", method: "Alipay" },
  { id: "ORD010", status: "Completed", lastOrder: "2023-10-18", method: "WeChat Pay" },
];

const ITEMS_PER_PAGE = 5;

export function OrdersTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentOrders = orders.slice(startIndex, endIndex);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-red-100 text-red-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Order</TableHead>
            <TableHead>Method</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </TableCell>
              <TableCell>{order.lastOrder}</TableCell>
              <TableCell>{order.method}</TableCell>
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