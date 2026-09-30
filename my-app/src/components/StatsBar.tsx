"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 32, suffix: "+", label: "Luxury Suites" },
  { value: 4.9, suffix: "★", label: "Average Rating" },
  { value: 500, suffix: "+", label: "Happy Guests" },
  { value: 3, suffix: " Years", label: "Of Excellence" },
];

function CountUp({
  target,
  suffix,
  isFloat,
}: {
  target: number;
  suffix: string;
  isFloat: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quart
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(isFloat ? parseFloat((eased * target).toFixed(1)) : Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(target);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, isFloat]);

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-[#1a2e1a] py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl lg:text-4xl font-bold text-[#d4a853] mb-1">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  isFloat={!Number.isInteger(stat.value)}
                />
              </p>
              <p className="text-white/50 text-sm tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
