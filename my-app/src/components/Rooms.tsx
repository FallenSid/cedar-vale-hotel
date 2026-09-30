"use client";

import { motion } from "framer-motion";
import { Users, BedDouble, Mountain, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const rooms = [
  {
    name: "Deluxe Room",
    tagline: "Cozy elegance with stunning valley views.",
    price: "₹12,500",
    image:
      "https://images.pexels.com/photos/19332135/pexels-photo-19332135.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    guests: 2,
    bed: "King Bed",
    view: "Mountain View",
  },
  {
    name: "Cedar Suite",
    tagline: "Spacious, with a private balcony and fireplace.",
    price: "₹18,000",
    image:
      "https://images.pexels.com/photos/30816307/pexels-photo-30816307.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    guests: 3,
    bed: "King Bed",
    view: "Balcony",
  },
  {
    name: "The Pinnacle",
    tagline: "Our most luxurious suite with unmatched views.",
    price: "₹26,000",
    image:
      "https://images.pexels.com/photos/37910480/pexels-photo-37910480.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    guests: 4,
    bed: "King Bed",
    view: "Private Terrace",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="bg-white section-pad">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <AnimateOnScroll direction="up">
              <p className="text-xs tracking-[0.3em] text-[#4a7c59] uppercase mb-3 font-light">
                ✦ Stay in Comfort
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={0.1}>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#1a2e1a]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Rooms &amp; Suites
              </h2>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll direction="right">
            <button className="hidden sm:flex items-center gap-2 text-sm text-[#4a7c59] hover:text-[#1a2e1a] font-medium transition-colors duration-200 group">
              View All Rooms
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimateOnScroll>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <AnimateOnScroll key={room.name} direction="up" delay={i * 0.15}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 card-lift cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3
                        className="text-xl font-bold text-[#1a2e1a] mb-1"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {room.name}
                      </h3>
                      <p className="text-sm text-gray-500">{room.tagline}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1, backgroundColor: "#1a2e1a" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#1a2e1a] text-white w-9 h-9 rounded-full flex items-center justify-center shrink-0 ml-3 transition-colors duration-200"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-xl font-bold text-[#1a2e1a]">
                      {room.price}
                    </span>
                    <span className="text-sm text-gray-400 ml-1">/ night</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {room.guests} Guests
                    </span>
                    <span className="flex items-center gap-1">
                      <BedDouble className="w-3.5 h-3.5" />
                      {room.bed}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mountain className="w-3.5 h-3.5" />
                      {room.view}
                    </span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 sm:hidden text-center">
          <button className="flex items-center gap-2 text-sm text-[#4a7c59] font-medium mx-auto">
            View All Rooms
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
