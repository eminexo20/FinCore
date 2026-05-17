"use client";
import { Wallet, Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import React from 'react'

export function Footer() {
  const { t } = useLanguage();
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Wallet className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl">FinCore</span>
            </div>
            <p className="text-slate-400">
              Maliyyə texnologiyalarının nüvəsi. Open Banking və ödəniş sistemləri bir platformada.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-4">Platform</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => scrollToSection("features")} className="hover:text-white transition-colors">
                  {t.features}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("dashboard")} className="hover:text-white transition-colors">
                  {t.dashboard}
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Qiymətlər
                </a>
              </li>
            </ul>
          </div>

          {/* Şirkət */}
          <div>
            <h3 className="mb-4">{t.company}</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                  {t.about}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">
                  {t.contact}
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Karyera
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Hüquqi */}
          <div>
            <h3 className="mb-4">{t.legal}</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Məxfilik Siyasəti
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  İstifadə Şərtləri
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Siyasəti
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400">
              © 2025 FinCore. {t.allRightsReserved}.
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@fincore.az" className="hover:text-white transition-colors">
                info@fincore.az
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
