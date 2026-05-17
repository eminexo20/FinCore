"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";
import React from 'react';

const monthlyData = [
  { month: "Yan", gelir: 12000, xerc: 8000 },
  { month: "Fev", gelir: 15000, xerc: 9500 },
  { month: "Mar", gelir: 13500, xerc: 8800 },
  { month: "Apr", gelir: 18000, xerc: 11000 },
  { month: "May", gelir: 16500, xerc: 9200 },
  { month: "İyn", gelir: 19000, xerc: 10500 },
];

const categoryData = [
  { name: "Maaş", value: 45000 },
  { name: "İnvestisiyalar", value: 15000 },
  { name: "Digər", value: 8000 },
];

const expenseData = [
  { name: "Ev xərcləri", value: 3200 },
  { name: "Yemək", value: 1500 },
  { name: "Nəqliyyat", value: 800 },
  { name: "Əyləncə", value: 1200 },
  { name: "Digər", value: 1620 },
];

const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"];

export function AnalyticsCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Income vs Expenses Chart */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Gəlir və Xərclər Dinamikası</CardTitle>
          <CardDescription>Son 6 ayın məlumatları</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" />
              <XAxis dataKey="month" className="text-slate-600" />
              <YAxis className="text-slate-600" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="gelir" 
                stroke="#10b981" 
                strokeWidth={2}
                name="Gəlir (₼)"
              />
              <Line 
                type="monotone" 
                dataKey="xerc" 
                stroke="#ef4444" 
                strokeWidth={2}
                name="Xərc (₼)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Income Sources */}
      <Card>
        <CardHeader>
          <CardTitle>Gəlir Mənbələri</CardTitle>
          <CardDescription>Kateqoriyalar üzrə bölgü</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
                formatter={(value: number) => `₼${value.toLocaleString()}`}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Expense Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Xərc Təhlili</CardTitle>
          <CardDescription>Xərc kateqoriyaları</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={expenseData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" />
              <XAxis 
                dataKey="name" 
                className="text-slate-600"
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis className="text-slate-600" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
                formatter={(value) => `₼${value.toLocaleString()}`}
              />
              <Bar dataKey="value" fill="#8b5cf6" name="Xərc (₼)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
