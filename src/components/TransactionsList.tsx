"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowUpRight, ArrowDownLeft, Clock, CheckCircle2, XCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import React from 'react'

const transactions = [
  {
    id: "TXN001",
    type: "income",
    description: "Maaş köçürməsi",
    amount: 4500,
    date: "2025-11-20",
    status: "completed",
    category: "Maaş",
  },
  {
    id: "TXN002",
    type: "expense",
    description: "Supermarket alışı",
    amount: 125.50,
    date: "2025-11-19",
    status: "completed",
    category: "Yemək",
  },
  {
    id: "TXN003",
    type: "income",
    description: "Freelance layihə",
    amount: 850,
    date: "2025-11-18",
    status: "pending",
    category: "Digər",
  },
  {
    id: "TXN004",
    type: "expense",
    description: "Yanacaq doldurma",
    amount: 80,
    date: "2025-11-18",
    status: "completed",
    category: "Nəqliyyat",
  },
  {
    id: "TXN005",
    type: "expense",
    description: "Restoran",
    amount: 145,
    date: "2025-11-17",
    status: "completed",
    category: "Əyləncə",
  },
  {
    id: "TXN006",
    type: "income",
    description: "İnvestisiya gəliri",
    amount: 320,
    date: "2025-11-16",
    status: "completed",
    category: "İnvestisiyalar",
  },
  {
    id: "TXN007",
    type: "expense",
    description: "Kommunal ödənişlər",
    amount: 180,
    date: "2025-11-15",
    status: "failed",
    category: "Ev xərcləri",
  },
  {
    id: "TXN008",
    type: "expense",
    description: "Online alış-veriş",
    amount: 250,
    date: "2025-11-14",
    status: "completed",
    category: "Digər",
  },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="h-4 w-4 text-green-600" />;
    case "pending":
      return <Clock className="h-4 w-4 text-yellow-600" />;
    case "failed":
      return <XCircle className="h-4 w-4 text-red-600" />;
    default:
      return null;
  }
};

const getStatusBadge = (status, t) => {
  switch (status) {
    case "completed":
      return <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">{t.completed}</Badge>;
    case "pending":
      return <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">{t.pending}</Badge>;
    case "failed":
      return <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-100">{t.failed}</Badge>;
    default:
      return null;
  }
};

export function TransactionsList() {
  const { t } = useLanguage();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.transactionsTitle}</CardTitle>
        <CardDescription>{t.transactionsDesc}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className={`p-2 rounded-lg ${
                  transaction.type === "income" 
                    ? "bg-green-100" 
                    : "bg-red-100"
                }`}>
                  {transaction.type === "income" ? (
                    <ArrowDownLeft className="h-5 w-5 text-green-600" />
                  ) : (
                    <ArrowUpRight className="h-5 w-5 text-red-600" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-slate-900">{transaction.description}</span>
                    {getStatusIcon(transaction.status)}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <span>{transaction.date}</span>
                    <span>•</span>
                    <span>{transaction.category}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`text-right ${
                  transaction.type === "income" 
                    ? "text-green-600" 
                    : "text-red-600"
                }`}>
                  {transaction.type === "income" ? "+" : "-"}₼{transaction.amount.toFixed(2)}
                </div>
                {getStatusBadge(transaction.status, t)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
