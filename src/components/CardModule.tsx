"use client";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CreditCard, Eye, EyeOff, MoreVertical, Plus, X } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "motion/react";

const initialCards = [
  {
    id: "card-1",
    type: "visa",
    name: "Premium Visa",
    number: "4532 **** **** 8923",
    balance: 25340.50,
    currency: "₼",
    color: "from-blue-600 to-blue-800",
    lastTransactions: [
      { description: "Supermarket", amount: -125.50, date: "Dünən" },
      { description: "Yanacaq", amount: -80.00, date: "2 gün əvvəl" },
    ],
  },
  {
    id: "card-2",
    type: "mastercard",
    name: "Business MasterCard",
    number: "5425 **** **** 6712",
    balance: 19910.00,
    currency: "₼",
    color: "from-purple-600 to-pink-600",
    lastTransactions: [
      { description: "Online alış", amount: -250.00, date: "Dünən" },
      { description: "Maaş", amount: 4500.00, date: "3 gün əvvəl" },
    ],
  },
];

const gradients = [
  "from-green-600 to-emerald-700",
  "from-orange-500 to-red-600",
  "from-indigo-500 to-cyan-600",
  "from-pink-500 to-rose-600",
];

export function CardModule() {
  const [cards, setCards] = useState(initialCards);
  const [hiddenBalances, setHiddenBalances] = useState(new Set());
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { t } = useLanguage();
  
  // New Card Form State
  const [newCard, setNewCard] = useState({ name: "", type: "visa", balance: "" });

  const toggleBalance = (cardId: string) => {
    const newHidden = new Set(hiddenBalances);
    if (newHidden.has(cardId)) {
      newHidden.delete(cardId);
    } else {
      newHidden.add(cardId);
    }
    setHiddenBalances(newHidden);
  };

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    const balanceNum = parseFloat(newCard.balance);
    if (isNaN(balanceNum)) return;

    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    
    const createdCard = {
      id: `card-${Date.now()}`,
      type: newCard.type,
      name: newCard.name || "Yeni Kart",
      number: `${Math.floor(4000 + Math.random() * 1000)} **** **** ${randomNum}`,
      balance: balanceNum,
      currency: "₼",
      color: randomGradient,
      lastTransactions: [],
    };

    setCards([...cards, createdCard]);
    setIsAddModalOpen(false);
    setNewCard({ name: "", type: "visa", balance: "" });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-foreground text-xl font-bold">{t.myCards || "Mənim Kartlarım"}</h3>
          <p className="text-muted-foreground">{t.myCardsDesc || "Kartlarınızı idarə edin"}</p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shrink-0 shadow-md">
          <Plus className="mr-2 h-4 w-4" />
          {t.addNewCard || "Yeni kart əlavə et"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="group flex flex-col h-full">
            {/* Card Visual */}
            <Card className={`bg-gradient-to-br ${card.color} text-white border-0 overflow-hidden relative mb-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-2xl`}>
              <CardContent className="p-6">
                {/* Card Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-inner">
                      <CreditCard className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white/90">{card.name}</div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-0 mt-1 uppercase text-[10px] tracking-wider">
                        {card.type}
                      </Badge>
                    </div>
                  </div>
                  <button className="text-white/60 hover:text-white transition-colors">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>

                {/* Card Number */}
                <div className="mb-6 tracking-widest font-mono text-lg text-white/90">
                  {card.number}
                </div>

                {/* Balance */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white/60 text-sm mb-1">{t.balance || "Balans"}</div>
                    <div className="text-2xl font-bold text-white">
                      {hiddenBalances.has(card.id) ? (
                        "••••••"
                      ) : (
                        `${card.currency}${card.balance.toLocaleString()}`
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleBalance(card.id)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    {hiddenBalances.has(card.id) ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-white/10 blur-3xl pointer-events-none" />
                <div className="absolute -left-12 -top-12 w-48 h-48 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              </CardContent>
            </Card>

            {/* Last Transactions */}
            <Card className="flex-1 bg-card/50 backdrop-blur-sm border border-border rounded-2xl shadow-sm">
              <CardContent className="p-5">
                <div className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">{t.lastTransactions || "Son Əməliyyatlar"}</div>
                {card.lastTransactions.length > 0 ? (
                  <div className="space-y-3">
                    {card.lastTransactions.map((transaction, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0 last:pb-0">
                        <div>
                          <div className="text-foreground font-medium text-sm">{transaction.description}</div>
                          <div className="text-muted-foreground text-xs">{transaction.date}</div>
                        </div>
                        <div className={`font-semibold text-sm ${transaction.amount > 0 ? "text-green-500" : "text-foreground"}`}>
                          {transaction.amount > 0 ? "+" : ""}{card.currency}{Math.abs(transaction.amount).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-muted-foreground text-sm text-center py-4">Əməliyyat yoxdur</div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Add Card Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
              onClick={() => setIsAddModalOpen(false)} 
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-card border border-border rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden"
            >
              <button onClick={() => setIsAddModalOpen(false)} className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors z-10">
                <X className="w-5 h-5" />
              </button>
              
              <h2 className="text-2xl font-bold text-foreground mb-6">{t.addNewCard || "Yeni Kart Əlavə Et"}</h2>

              <form onSubmit={handleAddCard} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Kartın Adı</label>
                  <input 
                    type="text" required placeholder="Məs: Şəxsi Kartım"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    value={newCard.name} onChange={e => setNewCard({...newCard, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Kart Tipi</label>
                  <select 
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                    value={newCard.type} onChange={e => setNewCard({...newCard, type: e.target.value})}
                  >
                    <option value="visa">Visa</option>
                    <option value="mastercard">MasterCard</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Başlanğıc Balans (₼)</label>
                  <input 
                    type="number" required placeholder="0.00" min="0" step="0.01"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    value={newCard.balance} onChange={e => setNewCard({...newCard, balance: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full py-6 mt-4 rounded-xl text-md font-bold bg-primary text-primary-foreground hover:opacity-90 shadow-lg">
                  Əlavə Et
                </Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
