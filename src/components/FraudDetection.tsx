"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AlertTriangle, Shield, CheckCircle2, XCircle, MapPin, Clock, CreditCard } from "lucide-react";
import React from 'react'

const activities = [
  {
    id: "fraud-1",
    type: "location",
    severity: "high",
    description: "Qeyri-adi lokasiyadan böyük məbləğli əməliyyat",
    transaction: {
      amount: 2500,
      merchant: "Electronics Store",
      location: "İstanbul, Türkiyə",
      time: "23:45, 22 Noyabr 2025",
    },
    status: "pending",
    aiConfidence: 92,
  },
  {
    id: "fraud-2",
    type: "frequency",
    severity: "medium",
    description: "Qısa müddətdə çoxsaylı əməliyyat",
    transaction: {
      amount: 450,
      merchant: "Online Shopping",
      location: "Bakı, Azərbaycan",
      time: "14:20, 22 Noyabr 2025",
    },
    status: "approved",
    aiConfidence: 78,
  },
  {
    id: "fraud-3",
    type: "amount",
    severity: "medium",
    description: "Orta xərcdən 5 dəfə çox məbləğ",
    transaction: {
      amount: 1200,
      merchant: "Luxury Restaurant",
      location: "Bakı, Azərbaycan",
      time: "20:15, 21 Noyabr 2025",
    },
    status: "approved",
    aiConfidence: 65,
  },
  {
    id: "fraud-4",
    type: "merchant",
    severity: "low",
    description: "Yeni və naməlum satıcı",
    transaction: {
      amount: 85,
      merchant: "Unknown Online Store",
      location: "Online",
      time: "11:30, 20 Noyabr 2025",
    },
    status: "blocked",
    aiConfidence: 58,
  },
];

const securityStats = [
  { label: "Bloklanmış hücumlar", value: 127, color: "text-red-600" },
  { label: "Təhlükəsizlik balı", value: "98/100", color: "text-green-600" },
  { label: "Aktiv monitorinq", value: "24/7", color: "text-blue-600" },
];

export function FraudDetection() {
  const getSeverityBadge = (severity) => {
    switch (severity) {
      case "high":
        return <Badge variant="secondary" className="bg-red-100 text-red-700">Yüksək risk</Badge>;
      case "medium":
        return <Badge variant="secondary" className="bg-orange-100 text-orange-700">Orta risk</Badge>;
      case "low":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">Aşağı risk</Badge>;
      default:
        return null;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="h-5 w-5 text-orange-600" />;
      case "approved":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case "blocked":
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "location":
        return <MapPin className="h-5 w-5" />;
      case "amount":
        return <CreditCard className="h-5 w-5" />;
      case "frequency":
        return <Clock className="h-5 w-5" />;
      case "merchant":
        return <AlertTriangle className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-slate-900">Təhlükəsizlik və Fraud Monitorinq</h3>
          <p className="text-slate-600">AI-powered real-vaxt təhlükəsizlik sistemi</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-lg">
          <Shield className="h-5 w-5 text-green-600" />
          <span className="text-green-700">Aktiv Qorunma</span>
        </div>
      </div>

      {/* Security Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        {securityStats.map((stat, index) => (
          <Card key={index} className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 mb-1">{stat.label}</p>
                  <div className={stat.color}>{stat.value}</div>
                </div>
                <Shield className="h-8 w-8 text-slate-300" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Protection Info */}
      <Card className="border-2 bg-gradient-to-br from-blue-50 to-purple-50">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-slate-900 mb-2">AI Təhlükəsizlik Sistemi Aktiv</div>
              <p className="text-slate-600 mb-4">
                Süni intellekt texnologiyası ilə bütün əməliyyatlarınız real-vaxt olaraq monitorinq edilir. 
                Şübhəli fəaliyyət aşkar edildikdə dərhal xəbərdar olunursunuz.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-slate-600">256-bit şifrələmə</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-slate-600">2FA qorunma</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-slate-600">Biometrik giriş</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-slate-600">Real-vaxt analiz</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Suspicious Activities */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Şübhəli Fəaliyyətlər</CardTitle>
          <CardDescription>AI tərəfindən aşkar edilmiş qeyri-adi əməliyyatlar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="p-4 rounded-lg border-2 hover:border-slate-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    activity.severity === "high" ? "bg-red-100 text-red-600" :
                    activity.severity === "medium" ? "bg-orange-100 text-orange-600" :
                    "bg-yellow-100 text-yellow-600"
                  }`}>
                    {getTypeIcon(activity.type)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-slate-900">{activity.description}</span>
                          {getSeverityBadge(activity.severity)}
                        </div>
                        <p className="text-slate-600">{activity.transaction.merchant}</p>
                      </div>
                      {getStatusIcon(activity.status)}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3 text-slate-600">
                      <div>
                        <span className="text-slate-400">Məbləğ:</span> ₼{activity.transaction.amount}
                      </div>
                      <div>
                        <span className="text-slate-400">Lokasiya:</span> {activity.transaction.location}
                      </div>
                      <div>
                        <span className="text-slate-400">Vaxt:</span> {activity.transaction.time}
                      </div>
                      <div>
                        <span className="text-slate-400">AI Əminlik:</span> {activity.aiConfidence}%
                      </div>
                    </div>

                    {/* AI Analysis */}
                    <div className="p-3 bg-slate-50 rounded-lg mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-orange-600" />
                        <span className="text-slate-900">AI Analizi</span>
                      </div>
                      <p className="text-slate-600">
                        {activity.type === "location" && "Bu əməliyyat sizin normal davranış patternlərinizə uyğun deyil. Lokasiya və məbləğ qeyri-adidir."}
                        {activity.type === "frequency" && "Son 2 saat ərzində 7 əməliyyat həyata keçirmişsiniz. Bu sizin orta fəaliyyət səviyyənizdən 4 dəfə çoxdur."}
                        {activity.type === "amount" && "Bu məbləğ sizin orta əməliyyat dəyərindən əhəmiyyətli dərəcədə yüksəkdir."}
                        {activity.type === "merchant" && "Bu satıcı ilə ilk dəfə əməliyyat həyata keçirirsiniz və onlayn reputasiyası aşağıdır."}
                      </p>
                    </div>

                    {/* Actions */}
                    {activity.status === "pending" && (
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Təsdiq et
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                          <XCircle className="mr-2 h-4 w-4" />
                          Blokla
                        </Button>
                      </div>
                    )}
                    
                    {activity.status === "approved" && (
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        ✓ Təsdiqlənib
                      </Badge>
                    )}
                    
                    {activity.status === "blocked" && (
                      <Badge variant="secondary" className="bg-red-100 text-red-700">
                        ✗ Bloklanıb
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Prevention Tips */}
      <Card className="border-2 bg-gradient-to-br from-green-50 to-emerald-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-600" />
            Təhlükəsizlik Tövsiyələri
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
              <p className="text-slate-600">
                Heç vaxt PIN kodunuzu və ya şifrənizi başqaları ilə paylaşmayın
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
              <p className="text-slate-600">
                Naməlum linklərdən kart məlumatlarınızı daxil etməyin
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
              <p className="text-slate-600">
                Düzenli olaraq əməliyyat tarixçənizi yoxlayın
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
              <p className="text-slate-600">
                2FA (iki faktorlu autentifikasiya) aktivləşdirin
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
