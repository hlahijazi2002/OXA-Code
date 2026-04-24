"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden px-6">
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-blue-600/20 blur-[150px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-100 h-100 bg-purple-600/10 blur-[130px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative order-first lg:order-last flex justify-center hidden md:block"
        >
          <div className="relative w-full max-w-125 aspect-square group">
            <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 to-purple-500/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all" />
            <Image
              src="/hero2.png"
              alt="Oxa code"
              width={400}
              height={300}
              priority
              className="relative  z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(37,99,235,0.2)] animate-float "
            />
          </div>
        </motion.div>

        <div className="text-right flex flex-col items-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
              نصمم <span className="text-blue-500">المستقبل</span> <br />
              <span className="text-transparent bg-clip-text bg-linear-to-l from-blue-400 via-blue-500 to-purple-500">
                الرقمي بذكاء
              </span>
            </h1>

            <p className="mt-8 text-gray-400 max-w-xl text-md md:text-xl leading-relaxed font-medium">
              تطوير برمجيات متقدمة، حلول الذكاء الاصطناعي، وتصميم تجربة مستخدم
              استثنائية للشركات الناشئة والمؤسسات.
            </p>

            <div className="mt-12 ">
              <motion.a
                href="https://wa.me/972595042384"
                target="_blank"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg transition-all"
              >
                احصل على استشارة مجانية
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
