"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

export default function CTA() {
  return (
    <section className="relative overflow-hidden min-h-[500px] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/28387044/pexels-photo-28387044.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400"
          alt="Himalayan mountain range"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1a0a]/75" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl mx-auto text-center">
          <AnimateOnScroll direction="up">
            <p className="text-xs tracking-[0.3em] text-[#d4a853] uppercase mb-6 font-light">
              ✦ Your Story Belongs Here
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.1}>
            <h2
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: "Georgia, serif" }}
            >
              A Stay Worth
              <br />
              Remembering.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.2}>
            <motion.button
              whileHover={{ scale: 1.06, backgroundColor: "#fff" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const el = document.querySelector("#booking");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white/90 text-[#1a2e1a] px-10 py-4 rounded-lg text-sm font-semibold tracking-wider hover:shadow-2xl transition-all duration-300"
            >
              Book Your Stay →
            </motion.button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
