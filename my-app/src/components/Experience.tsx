"use client";

import { motion } from "framer-motion";
import { Utensils, Leaf, Flame, Compass, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const experiences = [
  {
    icon: Utensils,
    title: "Fine Dining",
    desc: "Himalayan flavours, curated menus.",
    image:
      "https://images.pexels.com/photos/29649754/pexels-photo-29649754.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  },
  {
    icon: Leaf,
    title: "Wellness & Spa",
    desc: "Rejuvenate in nature's embrace.",
    image:
      "https://images.pexels.com/photos/32560943/pexels-photo-32560943.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  },
  {
    icon: Flame,
    title: "Fireplace Lounge",
    desc: "Warm evenings, deeper conversations.",
    image:
      "https://images.pexels.com/photos/31970869/pexels-photo-31970869.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  },
  {
    icon: Compass,
    title: "Outdoor Activities",
    desc: "Trekking, nature walks and more.",
    image:
      "https://images.pexels.com/photos/35014163/pexels-photo-35014163.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#f5f0e8] section-pad">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <AnimateOnScroll direction="up">
              <p className="text-xs tracking-[0.3em] text-[#4a7c59] uppercase mb-3 font-light">
                ✦ More Than a Stay
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={0.1}>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#1a2e1a]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                The Cedar Experience
              </h2>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll direction="right">
            <button className="hidden sm:flex items-center gap-2 text-sm text-[#4a7c59] hover:text-[#1a2e1a] font-medium transition-colors group">
              Explore All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimateOnScroll>
        </div>

        {/* Grid of experience cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {experiences.map((exp, i) => (
            <AnimateOnScroll key={exp.title} direction="up" delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
              >
                {/* Background image */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 w-full h-full object-cover img-zoom"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0a]/85 via-[#0a1a0a]/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-[#d4a853]/80 transition-colors duration-300">
                    <exp.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
