"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { reviews } from "@/data";

export default function Testimonials() {
  const allReviews = [...reviews, ...reviews, ...reviews];
  return (
    <section id="testimonials" className="py-16 bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black">
          ماذا يقول <span className="text-blue-500 text-glow">عملاؤنا</span>؟
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full opacity-60" />
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 pb-6 scrollbar-hide snap-x select-none">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{
            x: [0, "33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {allReviews.map((rev, i) => (
            <motion.div
              key={i}
              className="min-w-37.5 md:min-w-50 h-50 snap-center bg-white/5 border border-white/10 p-6 rounded-4xl flex flex-col relative group hover:border-blue-500/40 transition-all"
            >
              <Quote className="text-blue-500/20 mb-3 shrink-0" size={28} />
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed text-right grow overflow-hidden">
                {rev.text}
              </p>

              <div className="flex items-center gap-3 flex-row-reverse mt-auto pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 shrink-0 shadow-lg shadow-blue-500/20" />
                <div className="text-right overflow-hidden">
                  <h4 className="font-bold text-white text-sm truncate">
                    {rev.name}
                  </h4>
                  <p className="text-blue-400 text-[10px] truncate">
                    {rev.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
