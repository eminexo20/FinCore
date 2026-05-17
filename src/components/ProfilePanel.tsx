"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "../contexts/AuthContext";
import React from 'react';

export function ProfilePanel() {
  const { t } = useLanguage();
  const { user } = useAuth();

  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase()
    : "FC";

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* User Profile Card */}
      <Card className="md:col-span-2 lg:col-span-1">
        <CardHeader className="pb-3">
          <CardTitle>{t.profile}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email ?? "user"}`}
              />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-slate-900">
                {user?.name ?? "—"}
              </div>
              <div className="text-slate-600">
                {user?.email ?? "—"}
              </div>
            </div>
          </div>
          <Badge variant="secondary" className="w-fit">
            {t.premiumUser}
          </Badge>
        </CardContent>
      </Card>

      {/* Balance Card */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>{t.balance}</CardTitle>
            <Wallet className="h-4 w-4 text-slate-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-slate-900">₼45,250.50</div>
          <p className="text-slate-600">{t.totalBalance}</p>
        </CardContent>
      </Card>

      {/* Income Card */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>{t.income}</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-slate-900">₼12,450.00</div>
          <p className="text-green-600">+12.5% {t.thisMonth}</p>
        </CardContent>
      </Card>

      {/* Expenses Card */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>{t.expenses}</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-slate-900">₼8,320.00</div>
          <p className="text-red-600">-3.2% {t.thisMonth}</p>
        </CardContent>
      </Card>
    </div>
  );
}
