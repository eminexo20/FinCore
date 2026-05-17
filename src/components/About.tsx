"use client";
import { Card, CardContent } from "./ui/card";
import { Target, Eye, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const values = [
    { id: 1, icon: <Target className="h-6 w-6 text-white" />, title: t.mission, desc: t.missionDesc, color: "from-blue-500 to-cyan-500", hover: "hover:border-blue-200" },
    { id: 2, icon: <Eye className="h-6 w-6 text-white" />, title: t.vision, desc: t.visionDesc, color: "from-purple-500 to-pink-500", hover: "hover:border-purple-200" },
    { id: 3, icon: <Users className="h-6 w-6 text-white" />, title: t.team, desc: t.teamDesc, color: "from-green-500 to-emerald-500", hover: "hover:border-green-200" },
  ];

  const stats = [
    { value: "5+", label: t.statExperience },
    { value: "500+", label: t.statClients },
    { value: "₼50M+", label: t.statAmount },
    { value: "150+", label: t.statCountries },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.aboutTitle}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{t.aboutSubtitle}</p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1080"
              alt="FinCore Team"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.ourMissionTitle}</h3>
              <p className="text-slate-600">{t.ourMissionText}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.ourVisionTitle}</h3>
              <p className="text-slate-600">{t.ourVisionText}</p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item) => (
            <Card key={item.id} className={`border-2 transition-colors ${item.hover}`}>
              <CardContent className="pt-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
