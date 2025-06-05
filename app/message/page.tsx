'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MessagePage() {
  const [hovering, setHovering] = useState(false);

  return (
    <main
      className="min-h-screen bg-[#1B1B1B] text-[#FFD700] flex flex-col items-center justify-center text-center space-y-10"
      dir="rtl"
    >
      {/* Main message section */}
      <motion.div
        className="w-full bg-[#1A237E] py-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">رسالة خاصة بمناسبة العيد</h1>
          <p className="text-xl leading-loose">
            هذا النص مجرد مثال مؤقت. سيتم تحديث هذه الرسالة لاحقًا لتحتوي على كلمات من القلب، تهنئة بعيد الأضحى المبارك، وتعبير عن فرحة العيد وأهمية مشاركة اللحظات الجميلة مع الأحبة.
          </p>
        </div>
      </motion.div>

      {/* About the site section */}
      <motion.div
        className="w-full bg-[#1A237E] py-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">حول هذا الموقع</h2>
          <p className="text-lg leading-loose">
            تم إنشاء هذا الموقع باستخدام Next.js، TypeScript، وTailwind CSS. المزيد من المعلومات والتفاصيل سيتم إضافتها قريبًا.
          </p>
        </div>
      </motion.div>

      {/* Creator section */}
      <motion.div
        className="w-full bg-[#1A237E] py-6 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div
          className="mx-auto flex flex-col items-center gap-2"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Name + Star */}
          <p className="text-lg leading-loose flex items-center gap-2 cursor-pointer">
            Created by Paul Sami 🌙
            <motion.span animate={{ rotate: hovering ? 360 : 0 }} transition={{ duration: 0.6 }}>
            </motion.span>
          </p>

          {/* Spinning Stars Row */}
          <div className="flex gap-2 mt-1">
            {[...Array(10)].map((_, idx) => (
              <motion.div
                key={idx}
                animate={{ rotate: hovering ? 360 : 0 }}
                transition={{ duration: 0.6 }}
              >
                <Star size={18} className="text-[#FFD700] cursor-pointer" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
