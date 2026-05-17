"use client";
import { useState } from "react";
import { Menu, X, Wallet, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "../contexts/AuthContext";
import React from 'react';
import logo from '../assets/logo.jpeg';
import Image from 'next/image';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const { language, changeLanguage, t } = useLanguage();
  const { user, login, logout } = useAuth();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) {
      login(form.name, form.email);
      setIsLoginOpen(false);
      setForm({ name: "", email: "" });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Image src={logo} alt="FinCore Logo" />
              </div>
              <span className="text-xl text-slate-900">FinCore</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("features")} className="text-slate-600 hover:text-slate-900 transition-colors">
                {t.features}
              </button>
              <button onClick={() => scrollToSection("dashboard")} className="text-slate-600 hover:text-slate-900 transition-colors">
                {t.dashboard}
              </button>
              <button onClick={() => scrollToSection("about")} className="text-slate-600 hover:text-slate-900 transition-colors">
                {t.about}
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-slate-600 hover:text-slate-900 transition-colors">
                {t.contact}
              </button>

              {/* Language Switcher */}
              <div className="flex items-center gap-2 border-l pl-4">
                <Globe className="h-4 w-4 text-slate-600" />
                {["az", "en", "ru"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang as "az" | "en" | "ru")}
                    className={`px-2 py-1 rounded transition-colors ${
                      language === lang
                        ? "bg-blue-100 text-blue-700"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Login / User */}
              {user ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-700 font-medium">
                    {user.name}
                  </span>
                  <Button
                    onClick={logout}
                    variant="outline"
                    className="text-red-500 border-red-200 hover:bg-red-50"
                  >
                    Çıxış
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => setIsLoginOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {t.login}
                </Button>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection("features")} className="text-left text-slate-600 hover:text-slate-900 transition-colors">{t.features}</button>
              <button onClick={() => scrollToSection("dashboard")} className="text-left text-slate-600 hover:text-slate-900 transition-colors">{t.dashboard}</button>
              <button onClick={() => scrollToSection("about")} className="text-left text-slate-600 hover:text-slate-900 transition-colors">{t.about}</button>
              <button onClick={() => scrollToSection("contact")} className="text-left text-slate-600 hover:text-slate-900 transition-colors">{t.contact}</button>

              <div className="flex items-center gap-2 pt-2 border-t">
                <Globe className="h-4 w-4 text-slate-600" />
                {["az", "en", "ru"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang as "az" | "en" | "ru")}
                    className={`px-3 py-1 rounded transition-colors ${
                      language === lang
                        ? "bg-blue-100 text-blue-700"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              {user ? (
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-slate-700">{user.name}</span>
                  <Button onClick={logout} variant="outline" className="text-red-500 border-red-200">
                    Çıxış
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => { setIsLoginOpen(true); setIsMenuOpen(false); }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  {t.login}
                </Button>
              )}
            </nav>
          )}
        </div>
      </header>

      {/* Login Modal */}
      {isLoginOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setIsLoginOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                  <Wallet className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-semibold text-slate-900">FinCore</span>
              </div>
              <button
                onClick={() => setIsLoginOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-1">Xoş gəldiniz</h2>
            <p className="text-slate-500 text-sm mb-6">Hesabınıza daxil olun</p>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  placeholder="Anar Bayramov"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="anar@fincore.az"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-2.5"
              >
                Daxil ol
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
