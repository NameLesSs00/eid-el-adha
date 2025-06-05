"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function MessagePage() {
  const [hovering, setHovering] = useState(false);

  return (
    <main
      className="min-h-screen bg-[#faf8f5] text-[#4d4d3a] flex flex-col items-center justify-center text-center space-y-10"
      dir="rtl"
    >
      <motion.div
        className="w-full bg-[#dfdacf] bg-opacity-80 py-10 px-4 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">رسالة خاصة بمناسبة العيد</h1>
          <p className="text-xl leading-loose">
            تقريبا ده الجزء الوحيد الي هيكون باللهجة المصرية بس ما علينا انبسط
            اوي و انا بعمل البروجيكت ده ايوه اخد مني وقت بس اتعلمت حاجات كتير ده
            غير برضو أنه وفر عليا وقت اعيد علي كل الناس دي 🙂 اتمني يكون عيد
            سعيد عليكم و بس كده سلاممممممم ايوه صح حاجه اخيره This website was
            made with love 💜💖
          </p>
        </div>
      </motion.div>

      <motion.div
        className="w-full bg-[#dfdacf] bg-opacity-80 py-10 px-4 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">حول هذا الموقع</h2>
          <p className="text-lg leading-loose">
            تم إنشاء هذا الموقع باستخدام Next.js، TypeScript، و Tailwind CSS.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="w-full bg-[#dfdacf] bg-opacity-80 py-6 px-4 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div
          className="mx-auto flex flex-col items-center gap-2"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <p className="text-lg leading-loose flex items-center gap-2 cursor-pointer">
            Created by Paul Sami 🌙
            <motion.span
              animate={{ rotate: hovering ? 360 : 0 }}
              transition={{ duration: 0.6 }}
            />
          </p>

          <div className="flex gap-2 mt-1">
            {[...Array(10)].map((_, idx) => (
              <motion.div
                key={idx}
                animate={{ rotate: hovering ? 360 : 0 }}
                transition={{ duration: 0.6 }}
              >
                <Star size={18} className="text-[#4d4d3a] cursor-pointer" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
