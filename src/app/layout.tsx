import { AuthProvider } from "../contexts/AuthContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MouseEffect } from "@/components/ui/mouse-effect";
import { BackgroundEffects } from "@/components/ui/background-effects";
import "./globals.css";

export const metadata = {
  title: "FinCore - AI Unified Finance 2026",
  description: "Müasir və estetik FinCore platforması",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/20">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="aurora-bg" />
          <BackgroundEffects />
          <MouseEffect />
          <AuthProvider>
            <LanguageProvider>
              <main className="relative z-10 min-h-screen">
                {children}
              </main>
            </LanguageProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
