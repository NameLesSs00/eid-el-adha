'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import eid from '@/public/img2.png';
import Image from 'next/image';

const links = [
  { href: '/', label: 'الصفحة الرئيسية' },
  { href: '/templates', label: 'بطاقات جاهزة' },
  { href: '/create', label: 'إنشاء بطاقة' },
  { href: '/message', label: 'رسالة من المطور' },
];

const navContainerVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.1 } },
};

const linkItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

export default function Navbar() {
  const pathname = usePathname();
  const activeClass = 'border-b-2 border-[#4d4d3a]';
  const baseClass = 'text-[#4d4d3a] hover:opacity-90 transition text-xl font-semibold';

  const renderedLinks = useMemo(() => {
    return links.map((link) => {
      const isActive = pathname === link.href;
      return (
        <motion.div key={link.href} variants={linkItemVariants}>
          <Link
            href={link.href}
            className={`${baseClass} ${isActive ? activeClass : ''}`}
          >
            {link.label}
          </Link>
        </motion.div>
      );
    });
  }, [pathname]);

  return (
    <motion.nav
      className="bg-[#dfdacf] px-6 py-4 flex flex-col items-center gap-3"
      dir="rtl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px 0px' }}
      variants={navContainerVariants}
    >
      <motion.div className="flex items-center mb-2" variants={logoVariants}>
        <Image
          src={eid}
          alt="عيد مبارك"
          width={50}
          height={50}
          className="rounded-full object-cover select-none pointer-events-none"
          draggable={false}
        />
      </motion.div>

      <div className="flex gap-8 flex-wrap justify-center">{renderedLinks}</div>
    </motion.nav>
  );
}
