"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, AlertTriangle, Lightbulb, Sparkles, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import React from 'react';
const spendingTrendData = [
  { day: "Baz.e", spending: 120 },
  { day: "Çər", spending: 180 },
  { day: "Çər.a", spending: 95 },
  { day: "C.a", spending: 220 },
  { day: "Cümə", spending: 310 },
  { day: "Şənbə", spending: 280 },
  { day: "Bazar", spending: 150 },
];

const insights = [
  {
    type: "recommendation",
    icon: Lightbulb,
    title: "Xərc optimallaşdırması",
    description: "Bu ay yemək xərcləriniz ötən aya nisbətən 20% artıb. Büdcə planlaşdırması tövsiyə olunur.",
    trend: "up",
    percentage: 20,
    color: "from-orange-500 to-red-500",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    type: "achievement",
    icon: Sparkles,
    title: "Qənaət məqsədinə yaxınsınız",
    description: "Aylıq qənaət məqsədinizin 85%-nə çatmısınız. Davam edin!",
    trend: "up",
    percentage: 85,
    color: "from-green-500 to-emerald-500",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    type: "alert",
    icon: AlertTriangle,
    title: "Şübhəli əməliyyat",
    description: "Hesabınızda qeyri-adi lokasiyadan giriş cəhdi müşahidə edilib. Təhlükəsizliyi yoxlayın.",
    trend: "neutral",
    percentage: 0,
    color: "from-red-500 to-pink-500",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    type: "insight",
    icon: TrendingUp,
    title: "Gəlir artımı",
    description: "Son 3 ayda gəlirləriniz orta hesabla 15% artıb. Əla nəticədir!",
    trend: "up",
    percentage: 15,
    color: "from-blue-500 to-cyan-500",
    badgeColor: "bg-blue-100 text-blue-700",
  },
];

export function AIInsightsPanel() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-slate-900">AI İntelektual Analitika</h3>
          <p className="text-slate-600">Süni intellekt tərəfindən hazırlanmış şəxsi tövsiyələr</p>
        </div>
      </div>

      {/* Monthly Spending Trend Chart */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Həftəlik Xərc Trendi</CardTitle>
          <CardDescription>Son 7 günün xərc analizi</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={spendingTrendData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" />
              <XAxis dataKey="day" className="text-slate-600" />
              <YAxis className="text-slate-600" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
                formatter={(value) => `₼${value}`}
              />
              <Line 
                type="monotone" 
                dataKey="spending" 
                stroke="url(#colorGradient)" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', r: 4 }}
                activeDot={{ r: 6 }}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
          
          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              <span className="text-slate-900">AI Proqnoz</span>
            </div>
            <p className="text-slate-600">
              Hazırkı xərc tempinizə əsasən, bu ay üçün proqnozlaşdırılan ümumi xərc: <span className="text-slate-900">₼8,450</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* AI Insights Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <Card key={index} className="border-2 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${insight.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-slate-900">{insight.title}</span>
                      {insight.trend === "up" && insight.percentage > 0 && (
                        <Badge variant="secondary" className={insight.badgeColor}>
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          {insight.percentage}%
                        </Badge>
                      )}
                    </div>
                    <p className="text-slate-600">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card className="border-2 bg-gradient-to-br from-blue-50 to-purple-50">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-5 w-5 text-purple-600" />
            <span className="text-slate-900">AI Tövsiyələri</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
              <p className="text-slate-600">
                Həftə sonları xərclərinizi 30% azaltmaqla aylıq ₼1,200 qənaət edə bilərsiniz
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
              <p className="text-slate-600">
                Aylıq gəlirinizin 20%-ni investisiya etməyi düşünün - orta gəlir: ₼450/ay
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
              <p className="text-slate-600">
                Avtomatik ödəniş planı qurub aylıq ₼200 cərimə xərclərindən qurtula bilərsiniz
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
