"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Point {
  id: number;
  x: number;
  y: number;
}

export function MouseEffect() {
  const [trails, setTrails] = useState<Point[]>([]);
  const [clicks, setClicks] = useState<Point[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 30) return; // Performans üçün limit (throttle)
      lastTime = now;

      const newTrail = { id: now + Math.random(), x: e.clientX, y: e.clientY };
      setTrails((prev) => [...prev.slice(-20), newTrail]);
      
      // Təxminən 1 saniyə sonra izi silmək
      setTimeout(() => {
        setTrails((prev) => prev.filter(t => t.id !== newTrail.id));
      }, 1000); 
    };

    const handleMouseDown = (e: MouseEvent) => {
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks((prev) => [...prev, newClick]);
      
      // Klik animasiyası bitdikdən sonra silmək
      setTimeout(() => {
        setClicks((prev) => prev.filter(c => c.id !== newClick.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Sürüşmə İzi (Trail) */}
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-3 h-3 bg-white rounded-full blur-[1px] mix-blend-difference"
            style={{ left: trail.x - 6, top: trail.y - 6 }}
          />
        ))}
      </AnimatePresence>

      {/* Klik Effekti (Ripple) */}
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={`click-${click.id}`}
            initial={{ opacity: 1, scale: 0, borderWidth: "6px" }}
            animate={{ opacity: 0, scale: 4, borderWidth: "0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute w-12 h-12 border-white rounded-full mix-blend-difference"
            style={{ left: click.x - 24, top: click.y - 24 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
