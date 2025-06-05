'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import test8 from '@/public/test8.jpg';
import test9 from '@/public/test9.jpg';
import test10 from '@/public/test10.jpg';

const images = [test8, test9,test10];

export default function SlideImages() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); 

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          className="absolute inset-0 rounded-xl overflow-hidden"
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

    </div>
  );
}
