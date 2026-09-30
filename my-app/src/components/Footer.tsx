"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TreePine, ArrowRight, Share2 } from "lucide-react";

const quickLinks = ["Home", "Gallery", "Rooms", "Dining", "Location", "Experiences"];
const exploreLinks = ["Gallery", "Shimla", "Location", "Dining", "Contact"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleNavClick = (href: string) => {
    const id = href.toLowerCase().replace(/\s+/g, "");
    const el = document.querySelector(`#${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a150a] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-full border border-[#d4a853]/50 flex items-center justify-center">
                <TreePine className="w-4 h-4 text-[#d4a853]" />
              </div>
              <div>
                <p className="text-[9px] tracking-[0.2em] text-[#d4a853] uppercase">The</p>
                <p className="text-sm font-semibold tracking-wider uppercase">Cedar Vale</p>
                <p className="text-[8px] tracking-[0.2em] text-white/40 uppercase">Shimla</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              A quiet sanctuary where colonial charm meets Himalayan serenity.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {["Instagram", "Facebook", "YouTube"].map((label) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-[#d4a853] hover:border-[#d4a853]/40 transition-all duration-200 text-xs font-semibold"
                >
                  {label[0]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-5 text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNavClick(link)}
                    className="text-white/50 hover:text-[#d4a853] text-sm transition-colors duration-200 underline-anim"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-5 text-white/80">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNavClick(link)}
                    className="text-white/50 hover:text-[#d4a853] text-sm transition-colors duration-200 underline-anim"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-2 text-white/80">
              Join Our Newsletter
            </h4>
            <p className="text-white/40 text-xs mb-5">
              Get exclusive offers and travel inspiration.
            </p>
            {subscribed ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#d4a853] text-sm font-medium"
              >
                ✓ Thanks for subscribing!
              </motion.p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#d4a853]/50 transition-colors duration-200"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#c4983e" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-[#d4a853] text-[#0e1f0e] w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 The Cedar Vale. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200">
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
