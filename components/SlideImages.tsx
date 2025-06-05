'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '@/public/img1.jpg';
import img2 from '@/public/img2.png';
import img3 from '@/public/img3.jpeg';

const images = [img1, img2, img3];

export default function SlideImages() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward (if needed)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          className="absolute inset-0"
          custom={direction}
          initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={images[current]}
            alt="أجواء العيد"
            fill
            className="object-cover"
            priority
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#FFD700] z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-2"
        >
          مرحباً!
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold"
        >
          عيد أضحى مبارك
        </motion.h2>
      </div>

      {/* Optional: gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30 z-0" />
    </div>
  );
}
