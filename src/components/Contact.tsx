"use client";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import React from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert("Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Mesaj göndərin</CardTitle>
              <CardDescription>
                Formu doldurun və biz 24 saat ərzində cavab verəcəyik
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ad və Soyad</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Adınız"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Mövzu</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Mesajın mövzusu"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mesaj</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Mesajınızı yazın..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Göndər
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1738081346394-a52154228e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBmaW5hbmNlfGVufDF8fHx8MTc2MzkxOTUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="FinCore Office"
                className="w-full h-64 object-cover"
              />
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-slate-900 mb-1">Email</div>
                      <p className="text-slate-600">info@fincore.az</p>
                      <p className="text-slate-600">support@fincore.az</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-slate-900 mb-1">Telefon</div>
                      <p className="text-slate-600">+994 12 123 45 67</p>
                      <p className="text-slate-600">+994 50 123 45 67</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-slate-900 mb-1">Ünvan</div>
                      <p className="text-slate-600">
                        Nizami küçəsi 203,<br />
                        Bakı, Azərbaycan AZ1000
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100">
              <CardContent className="pt-6">
                <h3 className="text-slate-900 mb-2">İş saatları</h3>
                <div className="space-y-2 text-slate-600">
                  <p>Bazar ertəsi - Cümə: 09:00 - 18:00</p>
                  <p>Şənbə: 10:00 - 14:00</p>
                  <p>Bazar: Qeyri-iş günü</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
