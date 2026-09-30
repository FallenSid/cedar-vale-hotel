"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, BedDouble, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("2025-12-12");
  const [checkOut, setCheckOut] = useState("2025-12-14");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState("2 Adults");

  return (
    <section id="booking" className="relative z-20 bg-[#0e1f0e] pb-0">
      <AnimateOnScroll>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 my-2">
          <div className="bg-white text-[#1a1a1a] rounded-2xl shadow-2xl p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-0">
              {/* Title */}
              <div className="lg:mr-8">
                <h2 className="text-xl font-bold text-[#1a2e1a]">
                  Plan Your Stay
                </h2>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-px h-12 bg-gray-200 mx-4" />

              {/* Fields */}
              <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
                {/* Check-in */}
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#4a7c59] shrink-0" />
                  <div className="flex flex-col">
                    <label className="text-xs text-gray-400 mb-1">
                      Check-in
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="text-sm font-semibold text-[#1a2e1a] border-none outline-none bg-transparent cursor-pointer"
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#4a7c59] shrink-0" />
                  <div className="flex flex-col">
                    <label className="text-xs text-gray-400 mb-1">
                      Check-out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="text-sm font-semibold text-[#1a2e1a] border-none outline-none bg-transparent cursor-pointer"
                    />
                  </div>
                </div>

                {/* Rooms */}
                <div className="flex items-center gap-3">
                  <BedDouble className="w-5 h-5 text-[#4a7c59] shrink-0" />
                  <div className="flex flex-col">
                    <label className="text-xs text-gray-400 mb-1">Rooms</label>
                    <select
                      value={rooms}
                      onChange={(e) => setRooms(Number(e.target.value))}
                      className="text-sm font-semibold text-[#1a2e1a] border-none outline-none bg-transparent cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Room" : "Rooms"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Guests */}
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#4a7c59] shrink-0" />
                  <div className="flex flex-col">
                    <label className="text-xs text-gray-400 mb-1">Guests</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="text-sm font-semibold text-[#1a2e1a] border-none outline-none bg-transparent cursor-pointer"
                    >
                      {[
                        "1 Adult",
                        "2 Adults",
                        "3 Adults",
                        "2 Adults, 1 Child",
                        "2 Adults, 2 Children",
                      ].map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "#1a3d1a" }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 lg:mt-0 lg:ml-6 bg-[#1a2e1a] text-white px-6 py-4 rounded-xl flex items-center gap-2 text-sm font-semibold tracking-wide whitespace-nowrap transition-colors duration-300 w-full lg:w-auto justify-center"
              >
                Check Availability
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
