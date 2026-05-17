"use client";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MessageCircle, X, Send, Sparkles, TrendingUp, Wallet, Shield } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface QuickAction {
  icon: typeof TrendingUp;
  labelKey: string;
  query: string;
}

const quickActions: QuickAction[] = [
  { icon: TrendingUp, labelKey: "expenseAnalysis", query: "Xərclərimi və qənaət yollarını analiz et" },
  { icon: Wallet, labelKey: "balanceCheck", query: "Hesabımın ümumi vəziyyəti necədir?" },
  { icon: Shield, labelKey: "securityCheck", query: "Hesabımda təhlükəsizlik problemi varmı?" },
];

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "Salam! Mən sizin şəxsi Maliyyə GPT köməkçinizəm. Sadə botlardan fərqli olaraq, sizin büdcənizi insan kimi düşünərək analiz edirəm. Təbii dildə sualınızı verin (Məsələn: 'Necə pul yığa bilərəm?' və ya 'Maaşımı necə idarə edim?'). 🚀",
      timestamp: new Date(),
      suggestions: ["Maaşımı necə idarə edim?", "Qənaət planı qur", "Büdcə analizi"],
    },
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const getAIResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes("salam") || msg.includes("hi") || msg.includes("merhaba")) {
      return "Salam! Mən FinCore-un təkmilləşdirilmiş Süni İntellektiyəm. Sizə maliyyə planlaşdırması, büdcə analizi və ya suallarınızla bağlı necə kömək edə bilərəm? Təbii dildə istədiyiniz sualı verə bilərsiniz. 🤖";
    }
    
    if (msg.includes("necə") && (msg.includes("qənaət") || msg.includes("yığım") || msg.includes("pul yığ"))) {
      return "Xərclərinizi detallı analiz etdim. Qənaət etmək üçün bu strateji addımları təklif edirəm:\n\n1. Kofeyə xərclər: Son 30 gündə kafelərdə ₼120 xərcləmisiniz. Bunu 50% azaltsanız, ayda ₼60 qənaət olar.\n2. Gərəksiz Abunəliklər: Hər ay istifadə etmədiyiniz 2 platformaya (Netflix, Spotify) ödəniş çıxılır. Onları dondursanız aylıq əlavə ₼25 qazana bilərsiniz.\n3. 'Sıfır İtki' Rejimi: Hər alış-verişinizdə qalıq qəpiklərin avtomatik yığım hesabınıza keçməsini aktivləşdirin.\n\nSizin üçün avtomatik qənaət planı qurummu? 📊";
    }
    
    if (msg.includes("xərc") || msg.includes("analiz") || msg.includes("hara")) {
      return "Sizin xərclərinizi tam analiz etdim. Son 30 günün xülasəsi belədir:\n\n- Yemək və Restoran: ₼420 (Ən böyük xərciniz)\n- Nəqliyyat: ₼145\n- Alış-veriş: ₼285\n\nNəticə: Yemək xərcləriniz təyin etdiyiniz limitdən 15% çoxdur. Keçən aya nisbətdə isə alış-verişiniz azalıb. Bu büdcəni yenidən nəzərdən keçirmək və restoranlara limit qoymaq istəyirsinizmi? 📉";
    }
    
    if (msg.includes("balans") || msg.includes("nə qədər pulum var") || msg.includes("hesab") || msg.includes("vəziyyəti")) {
      return "Hazırkı ümumi balansınız ₼45,250.50 təşkil edir.\n\nDetallı Bölünmə:\n- Premium Visa: ₼25,340.50\n- Business MasterCard: ₼19,910.00\n\nƏlavə olaraq, Kripto portfelinizdə son 24 saatda 2.4% artım var. Qlobal bazarlardakı vəziyyətlə əlaqədar sərbəst pulunuzu daha çox mənfəət gətirən aktivlərə yönləndirmək istəyirsiniz? 💼";
    }

    if (msg.includes("maaş") || msg.includes("büdcə") || msg.includes("idarə") || msg.includes("plan")) {
      return "Maaşınızı ən səmərəli şəkildə idarə etmək üçün beynəlxalq 50/30/20 qaydasını təklif edirəm:\n\n- 50% Zəruri ehtiyaclar: Ev, qida, kommunal ödənişlər.\n- 30% Şəxsi istəklər: Əyləncə, restoranlar, geyim.\n- 20% Yığım və İnvestisiya: Gələcək üçün passiv gəlir fondu.\n\nİstəsəniz, maaşınız hesaba oturan kimi FinCore AI bu faizlərə görə pulunuzu avtomatik hesablar arasında bölüşdürə bilər. Avtomatlaşdırmanı aktivləşdirim? 💡";
    }

    if (msg.includes("təhlükəsiz") || msg.includes("problem") || msg.includes("oğurluq")) {
      return "Narahat olmayın! Sistemlərimiz 7/24 süni intellekt və AES-256 şifrələməsi ilə qorunur. Bütün tranzaksiyalarınızı incələdim, hazırda hesabınızda heç bir şübhəli fəaliyyət yoxdur. Son giriş Bakı şəhərindən sizin cihazınızla edilib. Yenə də xüsusi bir əməliyyatdan şübhələnirsinizsə, dərhal kartınızı bloklaya bilərəm. 🛡️";
    }

    return "Sualınızı analiz etdim. Mən güclü bir Maliyyə Süni İntellektiyəm, sizin tələbiniz isə çox spesifik və ya maliyyədən kənar ola bilər. Lütfən mənə xərcləriniz, balansınız, investisiya yolları, qənaət strategiyaları və ya maliyyə təhlükəsizliyiniz ilə bağlı istənilən qəliz sualı verin. Sizin maliyyə azadlığınız üçün buradayam! 🤔";
  };

  const handleSend = (message: string = inputValue) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: getAIResponse(message),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/30 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle className="w-8 h-8" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center border-2 border-background">
          <span className="text-[9px] font-bold">1</span>
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 w-96 h-[600px] z-[100] flex flex-col bg-card border border-border rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-border bg-card/80 backdrop-blur-md flex items-center justify-between z-10 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">FinCore AI</h3>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl p-4 ${msg.type === "user" ? "bg-primary text-primary-foreground rounded-tr-sm" : "bg-muted text-foreground rounded-tl-sm shadow-sm"}`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    
                    {msg.suggestions && msg.type === "ai" && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {msg.suggestions.map((suggestion, idx) => (
                          <button 
                            key={idx} 
                            onClick={() => handleSend(suggestion)}
                            className="text-xs px-3 py-1.5 rounded-full bg-background border border-border text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                    <div className={`text-[10px] mt-2 opacity-50 text-right`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground rounded-2xl rounded-tl-sm p-4 w-20 shadow-sm">
                    <div className="flex space-x-1.5 justify-center">
                      <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-card">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2 relative"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="FinCore AI-yə yazın..."
                  className="flex-1 bg-background border border-border rounded-full px-5 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all pr-12"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
              
              {/* Quick Actions (Scrollable) */}
              <div className="mt-3 flex overflow-x-auto gap-2 hide-scrollbar pb-1">
                {quickActions.map((action, idx) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSend(action.query)}
                      className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs text-foreground/80 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-primary" />
                      <span>{t[action.labelKey] || action.labelKey}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
