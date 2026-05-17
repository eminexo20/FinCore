"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { AlertTriangle, CheckCircle2, TrendingUp, Wallet, Edit2, Save } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import React from 'react'
const initialBudgets = [
  { id: "food", name: "Yemək və İçki", limit: 500, spent: 420, color: "bg-orange-500", icon: "🍔" },
  { id: "transport", name: "Nəqliyyat", limit: 200, spent: 145, color: "bg-blue-500", icon: "🚗" },
  { id: "shopping", name: "Alış-veriş", limit: 300, spent: 285, color: "bg-purple-500", icon: "🛍️" },
  { id: "utilities", name: "Kommunal", limit: 250, spent: 180, color: "bg-green-500", icon: "💡" },
  { id: "entertainment", name: "Əyləncə", limit: 150, spent: 125, color: "bg-pink-500", icon: "🎬" },
  { id: "other", name: "Digər", limit: 200, spent: 95, color: "bg-slate-500", icon: "📦" },
];

export function BudgetManagement() {
  const [budgets, setBudgets] = useState(initialBudgets);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const { t } = useLanguage();

  const totalLimit = budgets.reduce((sum, b) => sum + b.limit, 0);
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const totalPercentage = (totalSpent / totalLimit) * 100;

  const getStatusColor = (percentage) => {
    if (percentage >= 100) return "text-red-600";
    if (percentage >= 80) return "text-orange-600";
    return "text-green-600";
  };

  const getStatusIcon = (percentage) => {
    if (percentage >= 100) return <AlertTriangle className="h-4 w-4 text-red-600" />;
    if (percentage >= 80) return <AlertTriangle className="h-4 w-4 text-orange-600" />;
    return <CheckCircle2 className="h-4 w-4 text-green-600" />;
  };

  const getStatusBadge = (percentage) => {
    if (percentage >= 100) return <Badge variant="secondary" className="bg-red-100 text-red-700">{t.limitExceeded}</Badge>;
    if (percentage >= 80) return <Badge variant="secondary" className="bg-orange-100 text-orange-700">{t.attention}</Badge>;
    return <Badge variant="secondary" className="bg-green-100 text-green-700">{t.normal}</Badge>;
  };

  const handleEdit = (id, currentLimit) => {
    setEditingId(id);
    setEditValue(currentLimit.toString());
  };

  const handleSave = (id) => {
    const newLimit = parseFloat(editValue);
    if (!isNaN(newLimit) && newLimit > 0) {
      setBudgets(budgets.map(b => b.id === id ? { ...b, limit: newLimit } : b));
    }
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-slate-900">{t.budgetManagement}</h3>
          <p className="text-slate-600">{t.budgetDesc}</p>
        </div>
        <div className="flex items-center gap-2">
          <Wallet className="h-5 w-5 text-slate-600" />
          <span className="text-slate-900">Bu ay: {new Date().toLocaleDateString('az-AZ', { month: 'long', year: 'numeric' })}</span>
        </div>
      </div>

      {/* Overall Budget Status */}
      <Card className="border-2 bg-gradient-to-br from-blue-50 to-purple-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-slate-600 mb-1">{t.totalBudget}</div>
              <div className="text-slate-900">
                ₼{totalSpent.toFixed(2)} / ₼{totalLimit.toFixed(2)}
              </div>
            </div>
            <div className={`text-right ${getStatusColor(totalPercentage)}`}>
              <div className="mb-1">
                {totalPercentage.toFixed(0)}%
              </div>
              <div className="text-slate-600">{t.used}</div>
            </div>
          </div>
          <Progress value={totalPercentage} className="h-3 mb-4" />
          
          {/* AI Warning */}
          {totalPercentage >= 80 && (
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-2 border-orange-200">
              <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-slate-900 mb-1">{t.aiWarning}</div>
                <p className="text-slate-600">
                  {totalPercentage >= 100 
                    ? "Aylıq büdcə limitiniz aşılıb! Xərcləriniizi azaltmağı tövsiyə edirik."
                    : `Büdcənizin ${totalPercentage.toFixed(0)}%-ni istifadə etmisiniz. Diqqətli olun!`}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Category Budgets */}
      <div className="grid md:grid-cols-2 gap-4">
        {budgets.map((budget) => {
          const percentage = (budget.spent / budget.limit) * 100;
          return (
            <Card key={budget.id} className="border-2 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{budget.icon}</div>
                    <div>
                      <div className="text-slate-900">{budget.name}</div>
                      <div className="text-slate-600">
                        ₼{budget.spent.toFixed(2)} / ₼{budget.limit.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(percentage)}
                    {editingId === budget.id ? (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleSave(budget.id)}
                      >
                        <Save className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(budget.id, budget.limit)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                {editingId === budget.id ? (
                  <div className="mb-4">
                    <Label htmlFor={`limit-${budget.id}`}>{t.newLimit}</Label>
                    <Input
                      id={`limit-${budget.id}`}
                      type="number"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                ) : (
                  <>
                    <Progress value={percentage} className="h-2 mb-2" />
                    <div className="flex items-center justify-between">
                      <span className={getStatusColor(percentage)}>
                        {percentage.toFixed(0)}%
                      </span>
                      {getStatusBadge(percentage)}
                    </div>
                  </>
                )}

                {/* AI Recommendation */}
                {percentage >= 80 && percentage < 100 && editingId !== budget.id && (
                  <div className="mt-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-slate-600">
                      💡 Bu kateqoriyada xərclərinizi {(100 - percentage).toFixed(0)}% azaltsanız, ₼{((budget.limit - budget.spent) * 0.2).toFixed(2)} qənaət edərsiniz
                    </p>
                  </div>
                )}
                
                {percentage >= 100 && editingId !== budget.id && (
                  <div className="mt-3 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-slate-600">
                      ⚠️ Limit aşılıb! Gələn ay üçün büdcəni artırmağı və ya xərcləri azaltmağı düşünün.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* AI Suggestions */}
      <Card className="border-2 bg-gradient-to-br from-green-50 to-emerald-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            {t.aiSavings}
          </CardTitle>
          <CardDescription>{t.aiSavingsDesc}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
              <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
              <div>
                <div className="text-slate-900 mb-1">Yemək xərcləri optimallaşdırması</div>
                <p className="text-slate-600">
                  Həftə sonları restoran xərclərini 30% azaltsanız, aylıq <span className="text-green-600">₼126</span> qənaət edərsiniz
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
              <div>
                <div className="text-slate-900 mb-1">Nəqliyyat planlaması</div>
                <p className="text-slate-600">
                  Həftə ərzində ictimai nəqliyyatdan daha çox istifadə etsəniz, aylıq <span className="text-blue-600">₼80</span> qənaət edərsiniz
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
              <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
              <div>
                <div className="text-slate-900 mb-1">Alış-veriş strategiyası</div>
                <p className="text-slate-600">
                  Kampaniya günlərində alış-veriş etsəniz, aylıq <span className="text-purple-600">₼60</span> qənaət edərsiniz
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
