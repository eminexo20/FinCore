"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { X, Sparkles } from "lucide-react";

export function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const { login } = useAuth();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-md" 
          onClick={onClose} 
        />
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }} 
          animate={{ scale: 1, opacity: 1, y: 0 }} 
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-[0_0_100px_rgba(59,130,246,0.15)] overflow-hidden"
        >
          {/* Decorative Background Blob */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 blur-[50px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />

          <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10">
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/5 rounded-2xl flex items-center justify-center mb-8 relative z-10">
            <Sparkles className="text-purple-400 w-7 h-7" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-2 relative z-10">{t.welcome}</h2>
          <p className="text-white/50 mb-8 relative z-10">{t.loginSubtitle}</p>

          <form onSubmit={(e) => { e.preventDefault(); login(form.name, form.email); onClose(); }} className="space-y-4 relative z-10">
            <div>
              <input 
                type="text" placeholder={t.fullName || "Ad Soyad"} required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                onChange={e => setForm({...form, name: e.target.value})}
              />
            </div>
            <div>
              <input 
                type="email" placeholder={t.email || "Email"} required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                onChange={e => setForm({...form, email: e.target.value})}
              />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all mt-4 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              {t.loginButton}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
