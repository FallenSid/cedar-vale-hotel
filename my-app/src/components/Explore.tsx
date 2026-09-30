"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const destinations = [
  {
    name: "Mall Road",
    distance: "2 km",
    image:
      "https://images.pexels.com/photos/5238339/pexels-photo-5238339.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    desc: "Historic promenade lined with shops & cafes",
  },
  {
    name: "Jakhoo Temple",
    distance: "4 km",
    image:
      "https://images.pexels.com/photos/38703962/pexels-photo-38703962.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    desc: "Ancient hilltop temple with panoramic views",
  },
  {
    name: "Kufri",
    distance: "16 km",
    image:
      "https://images.pexels.com/photos/25225802/pexels-photo-25225802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    desc: "Snow-covered slopes and adventure trails",
  },
  {
    name: "Chail",
    distance: "45 km",
    image:
      "https://images.pexels.com/photos/5414576/pexels-photo-5414576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    desc: "Serene royal retreat in the Shivalik hills",
  },
];

export default function Explore() {
  return (
    <section id="explore" className="bg-white section-pad">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <AnimateOnScroll direction="up">
            <p className="text-xs tracking-[0.3em] text-[#4a7c59] uppercase mb-3 font-light">
              ✦ Explore
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={0.1}>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1a2e1a] mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Discover Shimla
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={0.2}>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              From colonial heritage to serene mountain trails, Shimla offers
              experiences for every kind of traveller.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Destination cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((dest, i) => (
            <AnimateOnScroll key={dest.name} direction="up" delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0a]/90 via-[#0a1a0a]/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">
                        {dest.name}
                      </h3>
                      <p className="text-white/60 text-xs mb-2">{dest.desc}</p>
                      <span className="text-[#d4a853] text-xs font-medium">
                        {dest.distance}
                      </span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ml-2 group-hover:bg-[#d4a853] transition-colors duration-300"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll direction="up" delay={0.3}>
          <div className="text-center mt-12">
            <button className="bg-[#1a2e1a] text-white px-8 py-4 rounded-lg text-sm font-semibold tracking-wide hover:bg-[#2a4e2a] transition-colors duration-300">
              Plan Your Experience →
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
