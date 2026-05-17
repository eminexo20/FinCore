"use client";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import React from 'react'

export function HeroSection() {
  const { t } = useLanguage();
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
                🚀 {t.heroTitle.split('–')[0]}
              </div>
              <h1 className="text-slate-900">
                {t.heroTitle}
              </h1>
              <p className="text-slate-600">
                {t.heroSubtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("dashboard")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {t.heroButton1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                <Play className="mr-2 h-5 w-5" />
                {t.heroButton2}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div>
                <div className="text-slate-900">500+</div>
                <div className="text-slate-600">{t.customers}</div>
              </div>
              <div>
                <div className="text-slate-900">99.9%</div>
                <div className="text-slate-600">{t.uptime}</div>
              </div>
              <div>
                <div className="text-slate-900">24/7</div>
                <div className="text-slate-600">{t.support}</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzgzNzUzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="FinCore Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-slate-600">{t.liveTransactions}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
