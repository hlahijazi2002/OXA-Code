"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "خدماتنا", href: "#services" },
    { name: "أعمالنا", href: "#portfolio" },
    { name: "شركاء النجاح", href: "#testimonials" },
  ];

  return (
    <nav className="fixed top-0 w-full z-100 px-6 py-4" dir="rtl">
      <div className="max-w-7xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter">
          <Image
            src="/logo1.png"
            alt="Oxa code"
            width={40}
            height={40}
            priority
          />
          <span className="text-white">
            <span className="text-blue-500">OXA</span> Code
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 bg-white/5 px-8 py-2 rounded-2xl border border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="https://wa.me/972595042384"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-2xl text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20"
          >
            اتصل بنا
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 bg-[#020617]/95 backdrop-blur-2xl border border-white/10 rounded-4xl p-8 md:hidden shadow-3xl text-right"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-gray-300 hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/972595042384"
                target="_blank"
                className="bg-blue-600 text-white w-full py-4 rounded-2xl font-bold mt-4"
              >
                اتصل بنا
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
