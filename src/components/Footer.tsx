import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#020617] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-right" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 font-black text-2xl mb-6 justify-start">
              <Image
                src="/logo1.png"
                alt="Oxa code"
                width={50}
                height={50}
                priority
              />
              <span className="text-white">
                <span className="text-blue-500 text-glow">OXA</span> Code
              </span>
            </div>
            <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
              نحن نبني الحلول الرقمية التي تدفع عملك للأمام. من غزة إلى العالم،
              نصمم المستقبل بذكاء.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xl">الوكالة</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                <a href="#we">عن Oxa code</a>
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                <a href="#services">خدماتنا</a>
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                <a href="#portfolio">معرض الأعمال</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xl">تواصل معنا</h4>
            <div className="flex gap-3 justify-start">
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>

              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <p>
            جميع الحقوق محفوظة {new Date().getFullYear()}&copy;
            <br />
            تم تطويره بإستخدام Next.js{" "}
            <a
              href="https://my-portfolio-topaz-two-24.vercel.app/"
              className="text-blue-500"
              target="_blank"
            >
              المهندسة هلا حجازي
            </a>
          </p>

          <p className="font-medium tracking-wide">من غزة للعالم - 🇵🇸</p>
        </div>
      </div>
    </footer>
  );
}
