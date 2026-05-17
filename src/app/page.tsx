"use client";
import { useState } from "react";
import { AnimatedNav } from "@/components/ui/animated-nav";
import { GlowCard } from "@/components/ui/glow-card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { LoginModal } from "@/components/ui/login-modal";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Sparkles, Activity, ShieldCheck, BarChart3, Wallet, Play, Bitcoin, Globe, Percent, FileText, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

// Dashboard Imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfilePanel } from "@/components/ProfilePanel";
import { AnalyticsCharts } from "@/components/AnalyticsCharts";
import { TransactionsList } from "@/components/TransactionsList";
import { CardModule } from "@/components/CardModule";
import { AIInsightsPanel } from "@/components/AIInsightsPanel";
import { BudgetManagement } from "@/components/BudgetManagement";
import { FraudDetection } from "@/components/FraudDetection";
import { SmartCategorization } from "@/components/SmartCategorization";
import { AIChat } from "@/components/AIChat";

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { t } = useLanguage();
  const { user } = useAuth();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (user) {
    return (
      <div className="min-h-screen pt-24 pb-32 px-4 max-w-7xl mx-auto flex flex-col">
        <AnimatedNav onLoginClick={() => {}} />
        <div className="space-y-8 relative z-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
          <ProfilePanel />
          
          <Tabs defaultValue="cards" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-7 h-auto gap-2 p-2 bg-white/5 border border-white/10 rounded-2xl glass-panel">
              <TabsTrigger value="cards" className="rounded-xl data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60">{t.cards || "Kartlar"}</TabsTrigger>
              <TabsTrigger value="categorization" className="rounded-xl data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60">{t.categorization || "Kateqoriyalar"}</TabsTrigger>
              <TabsTrigger value="budget" className="rounded-xl data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60">{t.budget || "Büdcə"}</TabsTrigger>
              <TabsTrigger value="analytics" className="rounded-xl data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60">{t.analytics || "Analitika"}</TabsTrigger>
              <TabsTrigger value="transactions" className="rounded-xl data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60">{t.transactions || "Əməliyyatlar"}</TabsTrigger>
              <TabsTrigger value="security" className="rounded-xl data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60">{t.security || "Təhlükəsizlik"}</TabsTrigger>
              <TabsTrigger value="ai-insights" className="rounded-xl data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60">{t.aiInsights || "AI İnsights"}</TabsTrigger>
            </TabsList>
            
            <div className="p-6 mt-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl glass-panel min-h-[400px]">
              <TabsContent value="cards" className="mt-0 outline-none"><CardModule /></TabsContent>
              <TabsContent value="categorization" className="mt-0 outline-none"><SmartCategorization /></TabsContent>
              <TabsContent value="budget" className="mt-0 outline-none"><BudgetManagement /></TabsContent>
              <TabsContent value="analytics" className="mt-0 outline-none"><AnalyticsCharts /></TabsContent>
              <TabsContent value="transactions" className="mt-0 outline-none"><TransactionsList /></TabsContent>
              <TabsContent value="security" className="mt-0 outline-none"><FraudDetection /></TabsContent>
              <TabsContent value="ai-insights" className="mt-0 outline-none"><AIInsightsPanel /></TabsContent>
            </div>
          </Tabs>

          <div className="fixed bottom-6 right-6 z-50">
            <AIChat />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center pb-32">
      {/* Navigation */}
      <AnimatedNav onLoginClick={() => setIsLoginModalOpen(true)} />
      
      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />

      {/* Hero Section */}
      <section className="w-full max-w-7xl px-4 pt-36 md:pt-48 pb-24 flex flex-col items-center text-center space-y-8 md:space-y-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full glass-panel border border-white/20 text-xs md:text-sm font-medium text-foreground/90 shadow-2xl"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>{t.heroTitle?.split("–")[0] || "FinCore 2026 Süni İntellekt Platforması"}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-foreground max-w-5xl leading-[1.1]"
        >
          {t.heroTitle?.split("–")[1]?.trim() || (
            <>Gələcəyin <span className="text-gradient">Maliyyə</span> Təcrübəsi</>
          )}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-foreground/60 max-w-3xl font-light"
        >
          {t.heroSubtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 pt-4 md:pt-8 w-full sm:w-auto"
        >
          <button 
            onClick={() => setIsLoginModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-full bg-foreground text-background font-bold text-base md:text-lg hover:scale-105 transition-transform flex justify-center items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.3)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            {t.heroButton2 || "İndi Başla"} <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button 
            onClick={() => scrollTo("features")}
            className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-full glass-panel text-foreground font-medium text-base md:text-lg hover:bg-foreground/5 transition-colors flex justify-center items-center gap-3"
          >
            <Play className="w-4 h-4 md:w-5 md:h-5" /> {t.heroButton1 || "Demo İzlə"}
          </button>
        </motion.div>
      </section>

      {/* Bento Grid Section */}
      <section className="w-full max-w-7xl px-4 py-32 relative" id="dashboard">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.dashboardTitle || "Güclü İdarəetmə Paneli"}</h2>
          <p className="text-xl text-white/60">{t.dashboardSubtitle || "Platformanın güclü idarəetmə panelini kəşf edin"}</p>
        </div>
        
        <BentoGrid className="max-w-6xl mx-auto relative z-10">
          <BentoGridItem 
            title={t.analyticsTitle || "Süni İntellekt Analitikası"}
            description={t.analyticsDesc || "Xərclərinizi və gəlirlərinizi proqnozlaşdıran güclü AI alqoritmləri."}
            icon={<BarChart3 className="w-8 h-8 text-blue-400" />}
            className="md:col-span-2 min-h-[280px]"
          />
          <BentoGridItem 
            title={t.paymentTitle || "Real-time Əməliyyatlar"}
            description={t.paymentDesc || "Gecikməsiz köçürmələr və ödənişlər."}
            icon={<Activity className="w-8 h-8 text-purple-400" />}
            className="min-h-[280px]"
          />
          <BentoGridItem 
            title={t.securityTitle || "Bank Səviyyəli Təhlükəsizlik"}
            description={t.securityDesc || "Məlumatlarınız tam şifrələnmiş formada qorunur."}
            icon={<ShieldCheck className="w-8 h-8 text-green-400" />}
            className="min-h-[280px]"
          />
          <BentoGridItem 
            title={t.myCards || "Smart Pul Kisəsi"}
            description={t.myCardsDesc || "Bütün aktivləriniz, kartlarınız və hesablarınız tək ekranda cəmlənib."}
            icon={<Wallet className="w-8 h-8 text-orange-400" />}
            className="md:col-span-2 min-h-[280px]"
          />
        </BentoGrid>
      </section>

      {/* Glow Cards Section */}
      <section className="w-full max-w-7xl px-4 py-32 border-t border-black/5 dark:border-white/5" id="features">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-black/5 dark:border-white/10 text-sm font-medium text-primary mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4" /> 2026-cı İlin Ekosistemi
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">{t.featuresTitle || "Mükəmməl Xüsusiyyətlər"}</h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
            {t.featuresSubtitle || "FinCore sadəcə bir bank tətbiqi deyil, bütün maliyyə həyatınızı avtomatlaşdıran super-platformadır. Hər bir detal sizin rahatlığınız və qazancınız üçün nəzərdə tutulub."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <GlowCard className="p-8 lg:p-10 flex flex-col justify-between h-full group hover:-translate-y-2 transition-transform duration-500">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center mb-8 shadow-inner">
                <Bitcoin className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Kripto və Birja İzləmə</h3>
              <p className="text-foreground/60 text-base leading-relaxed mb-6">
                Qlobal bazarlardakı dəyişiklikləri, Bitcoin, Ethereum və əsas birja indekslərini millisekundlar içində izləyin. Ağıllı qrafiklərlə portfelinizi genişləndirin və alqoritmik tövsiyələr alın.
              </p>
            </div>
            <div className="w-full h-24 rounded-xl bg-card border border-border flex items-end px-4 pt-4 overflow-hidden relative shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
              <div className="flex w-full h-1/2 items-end space-x-1 opacity-70">
                {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-500 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </GlowCard>
          
          {/* Card 2 */}
          <GlowCard className="p-8 lg:p-10 flex flex-col justify-between h-full group hover:-translate-y-2 transition-transform duration-500">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center mb-8 shadow-inner">
                <Activity className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Süni İntellektlə Qənaət</h3>
              <p className="text-foreground/60 text-base leading-relaxed mb-6">
                FinCore AI alqoritmləri sizin xərcləmə vərdişlərinizi öyrənir, gərəksiz abunəlikləri tapır və büdcənizi avtomatik optimallaşdıraraq sizə hər ay yüzlərlə manat qazandırır.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-background/50 rounded-xl p-4 border border-border shadow-sm">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">Aylıq qənaət proqnozu</p>
                <p className="text-xl font-bold text-foreground">+₼345.50</p>
              </div>
            </div>
          </GlowCard>
          
          {/* Card 3 */}
          <GlowCard className="p-8 lg:p-10 flex flex-col justify-between h-full group hover:-translate-y-2 transition-transform duration-500">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-500/20 flex items-center justify-center mb-8 shadow-inner">
                <Globe className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Qlobal Pul Köçürmələri</h3>
              <p className="text-foreground/60 text-base leading-relaxed mb-6">
                100-dən çox ölkəyə və 50-dən çox fərqli valyutada saniyələr içində pul göndərin. Gizli rüsumlar olmadan, real bazar məzənnəsi ilə sərhədləri ləğv edin.
              </p>
            </div>
            <div className="flex -space-x-4">
              {["az", "us", "eu", "gb"].map((flag, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-card bg-muted flex items-center justify-center text-sm font-bold uppercase shadow-sm relative z-10" style={{ zIndex: 10 - i }}>
                  {flag}
                </div>
              ))}
            </div>
          </GlowCard>

          {/* Card 4 */}
          <GlowCard className="p-8 lg:p-10 flex flex-col justify-between h-full group hover:-translate-y-2 transition-transform duration-500">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center mb-8 shadow-inner">
                <Percent className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Maksimum Cashback</h3>
              <p className="text-foreground/60 text-base leading-relaxed mb-6">
                Restoranlar, kinoteatrlar və premium mağazalardan etdiyiniz alış-verişlərdən anında 10%-ə qədər cashback qazanın. Hər xərclədiyiniz pul sizə geri qayıtsın.
              </p>
            </div>
            <div className="w-full bg-background rounded-xl p-4 border border-border shadow-sm flex justify-between items-center">
              <span className="font-medium text-foreground">Aylıq qazanc:</span>
              <span className="text-emerald-500 font-bold text-xl">₼120.00</span>
            </div>
          </GlowCard>

          {/* Card 5 */}
          <GlowCard className="p-8 lg:p-10 flex flex-col justify-between h-full group hover:-translate-y-2 transition-transform duration-500">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/20 flex items-center justify-center mb-8 shadow-inner">
                <FileText className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Avtomatik Hesab Faktura</h3>
              <p className="text-foreground/60 text-base leading-relaxed mb-6">
                Kommunal ödənişlər, rəqəmsal abunəliklər və kredit taksitlərinizi avtomatlaşdırın. FinCore ödəniş günündə hər şeyi sizin əvəzinizə gecikmədən həll edir.
              </p>
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500" style={{ width: `${(3 - i) * 30}%` }} />
                </div>
              ))}
            </div>
          </GlowCard>

          {/* Card 6 */}
          <GlowCard className="p-8 lg:p-10 flex flex-col justify-between h-full group hover:-translate-y-2 transition-transform duration-500">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-rose-500/20 border border-red-500/20 flex items-center justify-center mb-8 shadow-inner">
                <ShieldCheck className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Premium Təhlükəsizlik</h3>
              <p className="text-foreground/60 text-base leading-relaxed mb-6">
                Bank səviyyəli AES-256 şifrələməsi, biometrik identifikasiya və real-time fraud aşkarlama sistemi ilə pulunuz və məlumatlarınız 100% zəmanət altındadır.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-red-500 bg-red-500/10 px-4 py-2 rounded-lg w-fit">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Qorunur
            </div>
          </GlowCard>

        </div>
      </section>
    </div>
  );
}
