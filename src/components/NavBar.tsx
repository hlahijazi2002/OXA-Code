"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "خدماتنا", href: "#services" },
    { name: "أعمالنا", href: "#portfolio" },
    { name: "شركاء النجاح", href: "#testimonials" },
  ];

  return (
    <nav 
      className={`fixed top-0 inset-x-0 z-[9999] transition-all duration-500 
      ${scrolled ? "py-2" : "py-4"} px-4 md:px-8`} 
      dir="rtl"
    >
      <div 
        className={`max-w-7xl mx-auto transition-all duration-500 flex items-center justify-between px-4 md:px-6 shadow-2xl
        ${scrolled 
          ? "bg-black/90 backdrop-blur-xl border-white/20 h-12 md:h-14 rounded-xl md:rounded-2xl" 
          : "bg-black/60 backdrop-blur-md border-white/10 h-14 md:h-16 rounded-2xl md:rounded-3xl"} 
        border`}
      >
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo1.png"
            alt="Oxa code"
            width={32}
            height={32}
            style={{ width: '32px', height: '32px', objectFit: 'contain' }}
            priority
            unoptimized
          />
          <span className="text-white font-bold text-base md:text-xl tracking-tight">
            <span className="text-blue-500">OXA</span> Code
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-2xl border border-white/5">
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

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="https://wa.me/972595042384" 
            target="_blank" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20"
          >
            اتصل بنا
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            className="absolute top-full left-4 right-4 mt-3 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 lg:hidden shadow-3xl text-right"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-lg font-medium text-gray-300 hover:text-blue-500 py-3 border-b border-white/5 block transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/972595042384" 
                className="bg-blue-600 text-white w-full py-4 rounded-xl font-bold mt-4 text-center block shadow-lg"
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