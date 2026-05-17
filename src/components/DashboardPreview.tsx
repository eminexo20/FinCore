"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { LoginForm } from "./LoginForm";
import { ProfilePanel } from "./ProfilePanel";
import { AnalyticsCharts } from "./AnalyticsCharts";
import { TransactionsList } from "./TransactionsList";
import { CardModule } from "./CardModule";
import { AIInsightsPanel } from "./AIInsightsPanel";
import { BudgetManagement } from "./BudgetManagement";
import { FraudDetection } from "./FraudDetection";
import { SmartCategorization } from "./SmartCategorization";
import { AIChat } from "./AIChat";
import { useLanguage } from "../contexts/LanguageContext";
import React from 'react'

export function DashboardPreview() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="dashboard" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">
            {t.dashboardTitle}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t.dashboardSubtitle}
          </p>
        </div>

        {!isLoggedIn ? (
          <div className="max-w-4xl mx-auto">
            <LoginForm onLogin={() => setIsLoggedIn(true)} />
          </div>
        ) : (
          <div className="space-y-8">
            <ProfilePanel />
            
            <Tabs defaultValue="cards" className="w-full">
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-7">
                <TabsTrigger value="cards">{t.cards}</TabsTrigger>
                <TabsTrigger value="categorization">{t.categorization}</TabsTrigger>
                <TabsTrigger value="budget">{t.budget}</TabsTrigger>
                <TabsTrigger value="analytics">{t.analytics}</TabsTrigger>
                <TabsTrigger value="transactions">{t.transactions}</TabsTrigger>
                <TabsTrigger value="security">{t.security}</TabsTrigger>
                <TabsTrigger value="ai-insights">{t.aiInsights}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cards" className="mt-8">
                <CardModule />
              </TabsContent>

              <TabsContent value="categorization" className="mt-8">
                <SmartCategorization />
              </TabsContent>

              <TabsContent value="budget" className="mt-8">
                <BudgetManagement />
              </TabsContent>
              
              <TabsContent value="analytics" className="mt-8">
                <AnalyticsCharts />
              </TabsContent>
              
              <TabsContent value="transactions" className="mt-8">
                <TransactionsList />
              </TabsContent>

              <TabsContent value="security" className="mt-8">
                <FraudDetection />
              </TabsContent>

              <TabsContent value="ai-insights" className="mt-8">
                <AIInsightsPanel />
              </TabsContent>
            </Tabs>

            {/* AI Chat - Always visible when logged in */}
            <AIChat />
          </div>
        )}
      </div>
    </section>
  );
}
