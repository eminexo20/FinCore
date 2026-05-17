"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "next-themes";
import { User, Sun, Moon } from "lucide-react";

export function AnimatedNav({ onLoginClick }: { onLoginClick: () => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { language, changeLanguage, t } = useLanguage();
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navItems = [
    { id: "dashboard", label: t.dashboard },
    { id: "features", label: t.features },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-2">
      <div className="flex items-center gap-2 md:gap-6 p-2 rounded-full glass-panel border border-black/5 dark:border-white/10 w-full max-w-fit shadow-lg overflow-x-auto hide-scrollbar">
        {/* Links */}
        <nav className="flex space-x-1 shrink-0">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-3 py-2 text-xs md:text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{ willChange: "transform" }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="w-px h-6 bg-black/10 dark:bg-white/20 shrink-0" />

        {/* Theme Switcher */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 text-foreground/70 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors shrink-0"
          aria-label="Toggle theme"
        >
          {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Language Switcher */}
        <div className="flex items-center gap-1 shrink-0">
          {["az", "en", "ru"].map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={cn(
                "px-2 py-1 text-[10px] md:text-xs font-bold rounded-full uppercase transition-colors",
                language === lang ? "bg-foreground text-background" : "text-foreground/50 hover:text-foreground"
              )}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Auth Button */}
        <div className="shrink-0 pl-1 md:pl-2">
          {user ? (
            <button onClick={logout} className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-red-500/10 text-red-500 dark:text-red-400 hover:bg-red-500/20 rounded-full text-xs md:text-sm font-medium transition">
              <User className="w-3.5 h-3.5 md:w-4 md:h-4" /> <span className="hidden sm:inline">Çıxış</span>
            </button>
          ) : (
            <button onClick={onLoginClick} className="px-4 md:px-5 py-1.5 md:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs md:text-sm font-medium hover:scale-105 transition-transform shadow-md">
              {t.login}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
