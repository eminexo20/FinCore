"use client";
import { CreditCard, BarChart3, Link2, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import React from 'react'

export function Features() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: CreditCard,
      title: t.paymentTitle,
      description: t.paymentDesc,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: t.analyticsTitle,
      description: t.analyticsDesc,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Link2,
      title: t.apiTitle,
      description: t.apiDesc,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: t.securityTitle,
      description: t.securityDesc,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">
            {t.featuresTitle}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t.featuresSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-blue-600 mb-2">⚡</div>
              <div className="text-slate-900 mb-2">{t.lightningFast}</div>
              <p className="text-slate-600">{t.lightningDesc}</p>
            </div>
            <div>
              <div className="text-purple-600 mb-2">🌍</div>
              <div className="text-slate-900 mb-2">{t.globalCoverage}</div>
              <p className="text-slate-600">{t.globalDesc}</p>
            </div>
            <div>
              <div className="text-pink-600 mb-2">🔄</div>
              <div className="text-slate-900 mb-2">{t.autoUpdates}</div>
              <p className="text-slate-600">{t.autoDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
