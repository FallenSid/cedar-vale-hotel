"use client";

import { motion } from "framer-motion";
import { ChevronDown, Cloud } from "lucide-react";

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: "easeOut" as const },
  },
});

export default function Hero() {
  const scrollDown = () => {
    const el = document.querySelector("#booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5205555/pexels-photo-5205555.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
          alt="Cedar forest mountain backdrop"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a0a]/90 via-[#0a1a0a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1f0e]/80 via-transparent to-[#0a1a0a]/30" />
      </div>

      {/* Weather badge */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="absolute top-24 right-6 lg:right-12 z-10 glass rounded-2xl px-4 py-3 flex items-center gap-2"
      >
        <Cloud className="w-4 h-4 text-white/70" />
        <span className="text-white text-sm font-light">14°C</span>
        <span className="text-white/50 text-xs ml-1">Shimla</span>
      </motion.div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center max-w-[1400px] mx-auto w-full px-6 lg:px-12 pt-20">
        <div className="max-w-2xl">
          {/* Tag */}
          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-6 font-light"
          >
            ✦ A Luxury Mountain Retreat
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp(0.5)}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] text-white mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Where the{" "}
            <span className="gradient-text">Mountains</span>
            <br />
            Slow Time.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp(0.7)}
            initial="hidden"
            animate="visible"
            className="text-white/70 text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-lg"
          >
            A luxury retreat nestled in cedar forests, overlooking the timeless
            charm of Shimla.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(0.9)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const el = document.querySelector("#booking");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#1f3b1f] border border-[#4a7c59] text-white px-8 py-4 rounded-lg text-sm font-semibold tracking-wide hover:border-[#d4a853]/60 transition-all duration-300"
            >
              Book Your Stay →
            </motion.button>
          </motion.div>

          {/* Scroll cue */}
          <motion.button
            variants={fadeUp(1.1)}
            initial="hidden"
            animate="visible"
            onClick={scrollDown}
            className="mt-16 flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
          >
            <ChevronDown className="w-4 h-4 animate-scroll-bounce" />
            <span className="text-xs tracking-[0.2em] uppercase font-light">
              Scroll to explore
            </span>
          </motion.button>
        </div>
      </div>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0e1f0e] to-transparent z-10" />
    </section>
  );
}
