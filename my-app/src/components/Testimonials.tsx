"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Quote } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    quote:
      "Absolutely magical! The views, the food, and the warmth of the staff made our stay unforgettable. The Cedar Vale truly captures the spirit of Shimla.",
    author: "Ananya R.",
    location: "New Delhi",
    avatar: "AR",
  },
  {
    quote:
      "The Pinnacle Suite was beyond our expectations. Waking up to Himalayan peaks through floor-to-ceiling glass was a surreal experience we'll cherish forever.",
    author: "Rohan & Priya M.",
    location: "Mumbai",
    avatar: "RM",
  },
  {
    quote:
      "From the cedar-scented air to the fireplace lounge evenings — The Cedar Vale is not just a hotel, it's a feeling you carry home with you.",
    author: "Kavya S.",
    location: "Bengaluru",
    avatar: "KS",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative overflow-hidden bg-[#0e1f0e] section-pad">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/12531025/pexels-photo-12531025.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400"
          alt="Cedar forest background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e1f0e] via-[#0e1f0e]/80 to-[#0e1f0e]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side image */}
          <AnimateOnScroll direction="left">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.pexels.com/photos/19567959/pexels-photo-19567959.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=550"
                alt="Cedar Vale retreat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1f0e]/60 to-transparent" />
              {/* Decorative quote mark */}
              <div className="absolute top-6 left-6 text-[#d4a853] opacity-30">
                <Quote className="w-16 h-16" />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right side testimonial */}
          <div>
            <AnimateOnScroll direction="right">
              <p className="text-xs tracking-[0.3em] text-[#d4a853] uppercase mb-4 font-light">
                ✦ Guest Stories
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-white mb-10"
                style={{ fontFamily: "Georgia, serif" }}
              >
                What Our Guests Say
              </h2>
            </AnimateOnScroll>

            {/* Testimonial carousel */}
            <div className="relative min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <Quote className="w-8 h-8 text-[#d4a853] mb-4 opacity-70" />
                  <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-light mb-8 italic">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#d4a853] flex items-center justify-center text-[#0e1f0e] font-bold text-sm">
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        — {testimonials[current].author}
                      </p>
                      <p className="text-white/50 text-sm">
                        {testimonials[current].location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2 ml-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === current
                        ? "bg-[#d4a853] w-6 h-2"
                        : "bg-white/30 w-2 h-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
