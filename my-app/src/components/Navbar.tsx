"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TreePine } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#experience" },
  { label: "Experiences", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Explore", href: "#explore" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-dark shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full border border-[#d4a853]/60 flex items-center justify-center group-hover:border-[#d4a853] transition-colors duration-300">
              <TreePine className="w-5 h-5 text-[#d4a853]" />
            </div>
            <div className="leading-tight">
              <p className="text-[10px] tracking-[0.2em] text-[#d4a853] uppercase font-light">
                The
              </p>
              <p className="text-base font-semibold tracking-wider text-white uppercase">
                Cedar Vale
              </p>
              <p className="text-[9px] tracking-[0.2em] text-white/60 uppercase font-light">
                Shimla
              </p>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-white/80 hover:text-white underline-anim tracking-wide transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Book button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavClick("#booking")}
              className="bg-[#d4a853] hover:bg-[#c4983e] text-[#0e1f0e] px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors duration-300"
            >
              Book a Stay
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2 hover:text-[#d4a853] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0e1f0e]/98 backdrop-blur-xl flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-light text-white/80 hover:text-[#d4a853] text-left border-b border-white/10 pb-4 transition-colors duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                onClick={() => handleNavClick("#booking")}
                className="mt-4 bg-[#d4a853] text-[#0e1f0e] px-8 py-4 rounded-full text-lg font-semibold tracking-wide text-center"
              >
                Book a Stay
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
