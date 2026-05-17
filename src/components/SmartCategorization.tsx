"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { TrendingUp, TrendingDown, Sparkles, ArrowRight } from "lucide-react";
import React from 'react'

const categoryData = [
  { name: "Yemək və İçki", value: 420, color: "#f97316", icon: "🍔", percent: 28, trend: 15 },
  { name: "Nəqliyyat", value: 145, color: "#3b82f6", icon: "🚗", percent: 10, trend: -5 },
  { name: "Alış-veriş", value: 285, color: "#8b5cf6", icon: "🛍️", percent: 19, trend: 8 },
  { name: "Kommunal", value: 180, color: "#10b981", icon: "💡", percent: 12, trend: 2 },
  { name: "Əyləncə", value: 125, color: "#ec4899", icon: "🎬", percent: 8, trend: -3 },
  { name: "Sağlamlıq", value: 95, color: "#06b6d4", icon: "💊", percent: 6, trend: 12 },
  { name: "Təhsil", value: 150, color: "#f59e0b", icon: "📚", percent: 10, trend: 5 },
  { name: "Digər", value: 100, color: "#64748b", icon: "📦", percent: 7, trend: 0 },
];

const monthlyTrend = [
  { month: "İyul", yemek: 380, neqliyyat: 150, alisveris: 260 },
  { month: "Avq", yemek: 395, neqliyyat: 145, alisveris: 275 },
  { month: "Sen", yemek: 410, neqliyyat: 155, alisveris: 270 },
  { month: "Okt", yemek: 405, neqliyyat: 140, alisveris: 290 },
  { month: "Noy", yemek: 420, neqliyyat: 145, alisveris: 285 },
];

const recentTransactions = [
  { merchant: "Bolt Food", amount: 25.50, category: "Yemək və İçki", time: "2 saat əvvəl", confidence: 98 },
  { merchant: "Bolt Taxi", amount: 8.20, category: "Nəqliyyat", time: "5 saat əvvəl", confidence: 99 },
  { merchant: "Zara Online", amount: 145.00, category: "Alış-veriş", time: "Dünən", confidence: 95 },
  { merchant: "Azersu", amount: 45.00, category: "Kommunal", time: "2 gün əvvəl", confidence: 100 },
  { merchant: "CinemaPlus", amount: 18.00, category: "Əyləncə", time: "3 gün əvvəl", confidence: 97 },
];

export function SmartCategorization() {
  const totalSpent = categoryData.reduce((sum, cat) => sum + cat.value, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-slate-900">Ağıllı Kateqoriyalaşdırma</h3>
          <p className="text-slate-600">AI tərəfindən avtomatik təsnif edilən xərclər</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-lg">
          <Sparkles className="h-5 w-5 text-purple-600" />
          <span className="text-purple-700">AI Aktiv</span>
        </div>
      </div>

      {/* AI Info Banner */}
      <Card className="border-2 bg-gradient-to-br from-purple-50 to-pink-50">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-slate-900 mb-2">Avtomatik Kateqoriyalaşdırma Sistemi</div>
              <p className="text-slate-600 mb-3">
                Süni intellekt bütün əməliyyatlarınızı avtomatik olaraq uyğun kateqoriyalara yerləşdirir. 
                Siz heç bir əlavə iş görmədən xərclərinizdə tam şəffaflığa sahib olursunuz.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-600" />
                  <span className="text-slate-600">99.2% dəqiqlik</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-pink-600" />
                  <span className="text-slate-600">Real-vaxt təsnif</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-600" />
                  <span className="text-slate-600">Öyrənən sistem</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Distribution */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Kateqoriya Bölgüsü</CardTitle>
            <CardDescription>Bu ayın xərc paylanması</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${percent}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `₼${value.toFixed(2)}`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center">
              <div className="text-slate-600 mb-1">Ümumi xərc</div>
              <div className="text-slate-900">₼{totalSpent.toFixed(2)}</div>
            </div>
          </CardContent>
        </Card>

        {/* Category List */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Kateqoriya Detalları</CardTitle>
            <CardDescription>Xərc və trend məlumatları</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="text-2xl">{category.icon}</div>
                    <div className="flex-1">
                      <div className="text-slate-900">{category.name}</div>
                      <div className="text-slate-600">₼{category.value.toFixed(2)} • {category.percent}%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {category.trend > 0 ? (
                      <Badge variant="secondary" className="bg-red-100 text-red-700">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {category.trend}%
                      </Badge>
                    ) : category.trend < 0 ? (
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        <TrendingDown className="h-3 w-3 mr-1" />
                        {Math.abs(category.trend)}%
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                        0%
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Trend */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Top 3 Kateqoriya Trendi</CardTitle>
          <CardDescription>Son 5 ayın müqayisəsi</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value: number) => `₼${value}`} />
              <Legend />
              <Bar dataKey="yemek" fill="#f97316" name="Yemək" />
              <Bar dataKey="neqliyyat" fill="#3b82f6" name="Nəqliyyat" />
              <Bar dataKey="alisveris" fill="#8b5cf6" name="Alış-veriş" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Auto-Categorized Transactions */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Son Avtomatik Təsnif Edilmiş Əməliyyatlar</CardTitle>
          <CardDescription>AI tərəfindən kateqoriyalaşdırılmış son əməliyyatlar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-slate-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-slate-900">{transaction.merchant}</span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      {transaction.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600">
                    <span>{transaction.time}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      AI Əminlik: {transaction.confidence}%
                    </span>
                  </div>
                </div>
                <div className="text-slate-900">
                  ₼{transaction.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
