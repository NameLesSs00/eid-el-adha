"use client";

import Link from "next/link";
import SlideImages from "@/components/SlideImages";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.main
      className="bg-[#faf8f5] min-h-screen p-6 text-[#4d4d3a]"
      dir="rtl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.section
        className="text-center mb-10 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <SlideImages />
      </motion.section>

      <div className="grid gap-8">
        <motion.section
          className="bg-[#dfdacf] bg-opacity-80 p-4 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h3
            className="text-2xl font-semibold mb-2"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            بطاقات جاهزة
          </motion.h3>
          <motion.p
            className="mb-4 text-xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            يمكنك اختيار بطاقة معايدة جاهزة لتشاركها مباشرة مع أحبائك.
          </motion.p>
          <Link href="/templates">
            <motion.button
              className="bg-[#483C32] hover:bg-[#3b322a] text-[#fdf6e3] font-semibold px-4 py-2 rounded transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              استعرض البطاقات
            </motion.button>
          </Link>
        </motion.section>

        <motion.section
          className="bg-[#dfdacf] bg-opacity-80 p-4 rounded-lg"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.h3
            className="text-2xl font-semibold mb-2"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            إنشاء بطاقة
          </motion.h3>
          <motion.p
            className="mb-4 text-xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            أنشئ بطاقة مخصصة، اختر صورة، أضف رسالة وشاركها مع من تحب.
          </motion.p>
          <Link href="/create">
            <motion.button
              className="bg-[#483C32] hover:bg-[#3b322a] text-[#fdf6e3] font-semibold px-4 py-2 rounded transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              أنشئ بطاقتك
            </motion.button>
          </Link>
        </motion.section>

        <motion.section
          className="bg-[#dfdacf] bg-opacity-80 p-4 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.h3
            className="text-2xl font-semibold mb-2"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            رسالة من المطور
          </motion.h3>
          <motion.p
            className="mb-4 text-xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            هذه رسالة من الشخص الذي قام بإنشاء هذه الصفحة، وأود أن أشارككم بعض
            النقاط الهامة التي ينبغي أخذها في الاعتبار أو التعرف عليها.{" "}
          </motion.p>
          <Link href="/message">
            <motion.button
              className="bg-[#483C32] hover:bg-[#3b322a] text-[#fdf6e3] font-semibold px-4 py-2 rounded transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.3 }}
            >
              اقرأ الرسالة
            </motion.button>
          </Link>
        </motion.section>
      </div>
    </motion.main>
  );
}
