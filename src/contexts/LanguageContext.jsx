"use client";
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  az: {
    // Header
    features: "Xüsusiyyətlər",
    dashboard: "Dashboard",
    about: "Haqqında",
    contact: "Əlaqə",
    login: "Giriş",
    
    // Hero Section
    heroTitle: "FinCore – Maliyyə texnologiyalarının nüvəsi",
    heroSubtitle: "Open Banking API-ləri və ödəniş sistemləri bir platformada. Maliyyə əməliyyatlarınızı sadələşdirin və biznesinizi böyüdün.",
    heroButton1: "Demo sınayın",
    heroButton2: "İndi qoşulun",
    customers: "Müştərilər",
    uptime: "Uptime",
    support: "Dəstək",
    liveTransactions: "Live Transactions",
    
    // Features
    featuresTitle: "Güçlü xüsusiyyətlər",
    featuresSubtitle: "FinCore platforması sizə tam maliyyə ekosistemi təqdim edir",
    paymentTitle: "Ödəniş əməliyyatları",
    paymentDesc: "Sürətli və təhlükəsiz ödəniş prosesləri. Lokal və beynəlxalq kartlarla işləyin, bir kliklə pul köçürmələri həyata keçirin.",
    analyticsTitle: "Maliyyə analitikası",
    analyticsDesc: "Real-vaxt analitika və hesabatlar. Gəlir-xərc analizi, cash flow izləmə və gələcək proqnozları.",
    apiTitle: "Open Banking API",
    apiDesc: "Bankların və maliyyə institutlarının API-lərinə birbaşa inteqrasiya. Məlumat mübadiləniz təhlükəsiz və sürətli.",
    securityTitle: "Təhlükəsizlik",
    securityDesc: "Bank səviyyəli şifrələmə, 2FA autentifikasiya və real-vaxt fırıldaqçılıq monitorinqi.",
    lightningFast: "Lightning Fast",
    lightningDesc: "Millisaniyələrdə cavab müddəti",
    globalCoverage: "Global Coverage",
    globalDesc: "150+ ölkədə xidmət",
    autoUpdates: "Auto Updates",
    autoDesc: "Avtomatik sistem yeniləmələri",
    
    // Dashboard
    dashboardTitle: "Dashboard Preview",
    dashboardSubtitle: "Platformanın güclü idarəetmə panelini kəşf edin",
    
    // Login Form
    welcome: "Xoş gəlmisiniz",
    loginSubtitle: "Davam etmək üçün giriş edin və ya qeydiyyatdan keçin",
    loginTab: "Giriş",
    registerTab: "Qeydiyyat",
    email: "Email",
    password: "Şifrə",
    fullName: "Ad və Soyad",
    loginButton: "Daxil ol",
    registerButton: "Qeydiyyatdan keç",
    
    // Profile Panel
    profile: "Profil",
    premiumUser: "Premium İstifadəçi",
    balance: "Balans",
    totalBalance: "Ümumi balans",
    income: "Gəlir",
    expenses: "Xərclər",
    thisMonth: "bu ay",
    
    // Tabs
    cards: "Kartlar",
    categorization: "Kateqoriyalar",
    budget: "Büdcə",
    analytics: "Analitika",
    transactions: "Əməliyyatlar",
    security: "Təhlükəsizlik",
    aiInsights: "AI İnsights",
    
    // Card Module
    myCards: "Kartlarım",
    myCardsDesc: "Bütün bank kartlarınızı bir yerdə idarə edin",
    addNewCard: "Yeni kart əlavə et",
    lastTransactions: "Son əməliyyatlar",
    yesterday: "Dünən",
    daysAgo: "gün əvvəl",
    weekAgo: "həftə əvvəl",
    
    // Transactions
    transactionsTitle: "Son Əməliyyatlar",
    transactionsDesc: "Hesabınızın son əməliyyat tarixçəsi",
    completed: "Tamamlandı",
    pending: "Gözləyir",
    failed: "Uğursuz",
    
    // Budget Management
    budgetManagement: "Büdcə İdarəsi",
    budgetDesc: "Aylıq xərcləriniizi izləyin və idarə edin",
    totalBudget: "Ümumi Büdcə",
    used: "istifadə edilib",
    aiWarning: "AI Xəbərdarlığı",
    limitExceeded: "Limit aşıldı",
    attention: "Diqqət",
    normal: "Normal",
    newLimit: "Yeni limit",
    aiSavings: "AI Qənaət Tövsiyələri",
    aiSavingsDesc: "Süni intellekt analizinə əsasən tövsiyələr",
    
    // AI Chat
    aiAssistant: "AI Köməkçi",
    online: "Onlayn",
    quickLinks: "Tez keçidlər",
    typeMessage: "Mesaj yazın...",
    expenseAnalysis: "Xərc analizi",
    balanceCheck: "Balans",
    securityCheck: "Təhlükəsizlik",
    
    // Analytics
    incomeDynamics: "Gəlir və Xərclər Dinamikası",
    lastMonths: "Son 6 ayın məlumatları",
    incomeSources: "Gəlir Mənbələri",
    categoryBreakdown: "Kateqoriyalar üzrə bölgü",
    expenseAnalysisTitle: "Xərc Təhlili",
    expenseCategories: "Xərc kateqoriyaları",
    
    // About
    aboutTitle: "FinCore haqqında",
    aboutSubtitle: "Maliyyə texnologiyalarında liderlik",
    
    // Contact
    contactTitle: "Bizimlə əlaqə",
    contactSubtitle: "Suallarınız var? Biz sizə kömək etməyə hazırıq",
    
    // Footer
    allRightsReserved: "Bütün hüquqlar qorunur",
    company: "Şirkət",
    resources: "Resurslar",
    legal: "Hüquqi",
  },
  
  en: {
    // Header
    features: "Features",
    dashboard: "Dashboard",
    about: "About",
    contact: "Contact",
    login: "Login",
    
    // Hero Section
    heroTitle: "FinCore – The Core of Financial Technology",
    heroSubtitle: "Open Banking APIs and payment systems in one platform. Simplify your financial operations and grow your business.",
    heroButton1: "Try Demo",
    heroButton2: "Join Now",
    customers: "Customers",
    uptime: "Uptime",
    support: "Support",
    liveTransactions: "Live Transactions",
    
    // Features
    featuresTitle: "Powerful Features",
    featuresSubtitle: "FinCore platform provides you with a complete financial ecosystem",
    paymentTitle: "Payment Operations",
    paymentDesc: "Fast and secure payment processes. Work with local and international cards, make money transfers with one click.",
    analyticsTitle: "Financial Analytics",
    analyticsDesc: "Real-time analytics and reports. Income-expense analysis, cash flow tracking and future forecasts.",
    apiTitle: "Open Banking API",
    apiDesc: "Direct integration with banks and financial institutions APIs. Your data exchange is secure and fast.",
    securityTitle: "Security",
    securityDesc: "Bank-level encryption, 2FA authentication and real-time fraud monitoring.",
    lightningFast: "Lightning Fast",
    lightningDesc: "Response time in milliseconds",
    globalCoverage: "Global Coverage",
    globalDesc: "Service in 150+ countries",
    autoUpdates: "Auto Updates",
    autoDesc: "Automatic system updates",
    
    // Dashboard
    dashboardTitle: "Dashboard Preview",
    dashboardSubtitle: "Explore the platform's powerful management panel",
    
    // Login Form
    welcome: "Welcome",
    loginSubtitle: "Login or register to continue",
    loginTab: "Login",
    registerTab: "Register",
    email: "Email",
    password: "Password",
    fullName: "Full Name",
    loginButton: "Sign In",
    registerButton: "Sign Up",
    
    // Profile Panel
    profile: "Profile",
    premiumUser: "Premium User",
    balance: "Balance",
    totalBalance: "Total Balance",
    income: "Income",
    expenses: "Expenses",
    thisMonth: "this month",
    
    // Tabs
    cards: "Cards",
    categorization: "Categories",
    budget: "Budget",
    analytics: "Analytics",
    transactions: "Transactions",
    security: "Security",
    aiInsights: "AI Insights",
    
    // Card Module
    myCards: "My Cards",
    myCardsDesc: "Manage all your bank cards in one place",
    addNewCard: "Add New Card",
    lastTransactions: "Recent Transactions",
    yesterday: "Yesterday",
    daysAgo: "days ago",
    weekAgo: "week ago",
    
    // Transactions
    transactionsTitle: "Recent Transactions",
    transactionsDesc: "Your account's recent transaction history",
    completed: "Completed",
    pending: "Pending",
    failed: "Failed",
    
    // Budget Management
    budgetManagement: "Budget Management",
    budgetDesc: "Track and manage your monthly expenses",
    totalBudget: "Total Budget",
    used: "used",
    aiWarning: "AI Warning",
    limitExceeded: "Limit Exceeded",
    attention: "Attention",
    normal: "Normal",
    newLimit: "New Limit",
    aiSavings: "AI Savings Recommendations",
    aiSavingsDesc: "Recommendations based on AI analysis",
    
    // AI Chat
    aiAssistant: "AI Assistant",
    online: "Online",
    quickLinks: "Quick Links",
    typeMessage: "Type a message...",
    expenseAnalysis: "Expense Analysis",
    balanceCheck: "Balance",
    securityCheck: "Security",
    
    // Analytics
    incomeDynamics: "Income and Expense Dynamics",
    lastMonths: "Last 6 months data",
    incomeSources: "Income Sources",
    categoryBreakdown: "Breakdown by Categories",
    expenseAnalysisTitle: "Expense Analysis",
    expenseCategories: "Expense Categories",
    
    // About
    aboutTitle: "About FinCore",
    aboutSubtitle: "Leadership in financial technology",
    
    // Contact
    contactTitle: "Contact Us",
    contactSubtitle: "Have questions? We're here to help",
    
    // Footer
    allRightsReserved: "All rights reserved",
    company: "Company",
    resources: "Resources",
    legal: "Legal",
  },
  
  ru: {
    // Header
    features: "Функции",
    dashboard: "Панель",
    about: "О нас",
    contact: "Контакты",
    login: "Вход",
    
    // Hero Section
    heroTitle: "FinCore – Ядро финансовых технологий",
    heroSubtitle: "Open Banking API и платежные системы на одной платформе. Упростите свои финансовые операции и развивайте бизнес.",
    heroButton1: "Попробовать демо",
    heroButton2: "Присоединиться",
    customers: "Клиенты",
    uptime: "Uptime",
    support: "Поддержка",
    liveTransactions: "Живые транзакции",
    
    // Features
    featuresTitle: "Мощные функции",
    featuresSubtitle: "Платформа FinCore предоставляет вам полную финансовую экосистему",
    paymentTitle: "Платежные операции",
    paymentDesc: "Быстрые и безопасные платежные процессы. Работайте с местными и международными картами, совершайте денежные переводы одним кликом.",
    analyticsTitle: "Финансовая аналитика",
    analyticsDesc: "Аналитика и отчеты в реальном времени. Анализ доходов и расходов, отслеживание денежных потоков и будущие прогнозы.",
    apiTitle: "Open Banking API",
    apiDesc: "Прямая интеграция с API банков и финансовых учреждений. Обмен данными безопасен и быстр.",
    securityTitle: "Безопасность",
    securityDesc: "Шифрование банковского уровня, 2FA аутентификация и мониторинг мошенничества в реальном времени.",
    lightningFast: "Молниеносно",
    lightningDesc: "Время отклика в миллисекундах",
    globalCoverage: "Глобальное покрытие",
    globalDesc: "Обслуживание в 150+ странах",
    autoUpdates: "Авто обновления",
    autoDesc: "Автоматические обновления системы",
    
    // Dashboard
    dashboardTitle: "Предварительный просмотр панели",
    dashboardSubtitle: "Изучите мощную панель управления платформы",
    
    // Login Form
    welcome: "Добро пожаловать",
    loginSubtitle: "Войдите или зарегистрируйтесь, чтобы продолжить",
    loginTab: "Вход",
    registerTab: "Регистрация",
    email: "Email",
    password: "Пароль",
    fullName: "Полное имя",
    loginButton: "Войти",
    registerButton: "Зарегистрироваться",
    
    // Profile Panel
    profile: "Профиль",
    premiumUser: "Премиум пользователь",
    balance: "Баланс",
    totalBalance: "Общий баланс",
    income: "Доход",
    expenses: "Расходы",
    thisMonth: "в этом месяце",
    
    // Tabs
    cards: "Карты",
    categorization: "Категории",
    budget: "Бюджет",
    analytics: "Аналитика",
    transactions: "Транзакции",
    security: "Безопасность",
    aiInsights: "AI Инсайты",
    
    // Card Module
    myCards: "Мои карты",
    myCardsDesc: "Управляйте всеми своими банковскими картами в одном месте",
    addNewCard: "Добавить новую карту",
    lastTransactions: "Последние транзакции",
    yesterday: "Вчера",
    daysAgo: "дней назад",
    weekAgo: "неделю назад",
    
    // Transactions
    transactionsTitle: "Последние транзакции",
    transactionsDesc: "История последних транзакций вашего счета",
    completed: "Завершено",
    pending: "В ожидании",
    failed: "Не удалось",
    
    // Budget Management
    budgetManagement: "Управление бюджетом",
    budgetDesc: "Отслеживайте и управляйте своими ежемесячными расходами",
    totalBudget: "Общий бюджет",
    used: "использовано",
    aiWarning: "AI предупреждение",
    limitExceeded: "Лимит превышен",
    attention: "Внимание",
    normal: "Нормально",
    newLimit: "Новый лимит",
    aiSavings: "AI рекомендации по экономии",
    aiSavingsDesc: "Рекомендации на основе AI анализа",
    
    // AI Chat
    aiAssistant: "AI Ассистент",
    online: "Онлайн",
    quickLinks: "Быстрые ссылки",
    typeMessage: "Напишите сообщение...",
    expenseAnalysis: "Анализ расходов",
    balanceCheck: "Баланс",
    securityCheck: "Безопасность",
    
    // Analytics
    incomeDynamics: "Динамика доходов и расходов",
    lastMonths: "Данные за последние 6 месяцев",
    incomeSources: "Источники дохода",
    categoryBreakdown: "Разбивка по категориям",
    expenseAnalysisTitle: "Анализ расходов",
    expenseCategories: "Категории расходов",
    
    // About
    aboutTitle: "О FinCore",
    aboutSubtitle: "Лидерство в финансовых технологиях",
    
    // Contact
    contactTitle: "Свяжитесь с нами",
    contactSubtitle: "Есть вопросы? Мы здесь, чтобы помочь",
    
    // Footer
    allRightsReserved: "Все права защищены",
    company: "Компания",
    resources: "Ресурсы",
    legal: "Правовая информация",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("az");
  
  const t = translations[language];
  
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
