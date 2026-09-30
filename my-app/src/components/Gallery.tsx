"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/28387038/pexels-photo-28387038.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
    alt: "Himalayan mountain landscape",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/30816307/pexels-photo-30816307.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    alt: "Luxury bedroom with mountain view",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.pexels.com/photos/28387045/pexels-photo-28387045.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    alt: "Evergreen trees in Nepal",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.pexels.com/photos/31970869/pexels-photo-31970869.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    alt: "Fireplace dining ambience",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.pexels.com/photos/32560943/pexels-photo-32560943.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    alt: "Lounge with mountain view",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-white section-pad">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <AnimateOnScroll direction="up">
              <p className="text-xs tracking-[0.3em] text-[#4a7c59] uppercase mb-3 font-light">
                ✦ Gallery
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={0.1}>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#1a2e1a]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Moments at The Cedar Vale
              </h2>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll direction="right">
            <button className="hidden sm:flex items-center gap-2 text-sm text-[#4a7c59] hover:text-[#1a2e1a] font-medium transition-colors group">
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimateOnScroll>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 h-[400px] lg:h-[560px]">
          {galleryImages.map((img, i) => (
            <AnimateOnScroll key={i} direction="none" delay={i * 0.1} className={img.span}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-xl w-full h-full cursor-pointer group"
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-400 flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-full">
                    View
                  </span>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-6 right-6 text-white bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors"
                onClick={() => setLightbox(null)}
              >
                <X className="w-6 h-6" />
              </motion.button>
              <motion.img
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3 }}
                src={lightbox}
                alt="Gallery full view"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
