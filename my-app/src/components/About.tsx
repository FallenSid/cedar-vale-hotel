"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section className="bg-[#f5f0e8] text-[#1a2e1a] section-pad">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <AnimateOnScroll direction="left">
              <p className="text-xs tracking-[0.3em] text-[#4a7c59] uppercase mb-4 font-light">
                ✦ A Mountain Retreat
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.1}>
              <h2
                className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Your Escape
                <br />
                Above the Clouds.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.2}>
              <p className="text-[#1a2e1a]/70 text-lg leading-relaxed mb-6">
                The Cedar Vale is a quiet sanctuary in Shimla, where colonial
                charm meets modern comfort. Surrounded by majestic cedar forests
                and panoramic Himalayan views, it&apos;s a place to reconnect —
                with nature, with loved ones, and with yourself.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.3}>
              <button className="bg-[#1a2e1a] text-white px-8 py-4 rounded-lg text-sm font-semibold tracking-wide hover:bg-[#2a4e2a] transition-colors duration-300">
                Discover The Hotel →
              </button>
            </AnimateOnScroll>

            {/* Since badge */}
            <AnimateOnScroll direction="left" delay={0.4}>
              <div className="mt-12 flex items-start gap-4 border-t border-[#1a2e1a]/10 pt-8">
                <div className="text-5xl font-bold text-[#d4a853] leading-none">
                  '22
                </div>
                <p className="text-sm text-[#1a2e1a]/60 leading-relaxed max-w-[200px]">
                  Crafting memorable stays in the heart of the Himalayas.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Image side */}
          <div className="relative">
            <AnimateOnScroll direction="right" delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/10017730/pexels-photo-10017730.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=720"
                  alt="The Cedar Vale hotel in Shimla"
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1a]/40 to-transparent" />
              </div>
            </AnimateOnScroll>

            {/* Floating stat card */}
            <AnimateOnScroll direction="up" delay={0.4}>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl">
                <p className="text-3xl font-bold text-[#1a2e1a]">4.9★</p>
                <p className="text-xs text-gray-500 mt-1">Guest Rating</p>
                <p className="text-xs text-[#4a7c59] font-medium">
                  500+ Reviews
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
