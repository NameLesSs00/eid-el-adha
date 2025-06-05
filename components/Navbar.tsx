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

// Variants for the navbar container: slide down + fade in
const navContainerVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.1 } },
};

// Variants for each link: fade/slide from above
const linkItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// Variant for the logo image: pop‐in
const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

export default function Navbar() {
  const pathname = usePathname();
  const activeClass = 'border-b-2 border-[#FFD700]';
  const baseClass = 'text-[#FFD700] hover:opacity-90 transition';

  const renderedLinks = useMemo(() => {
    return links.map((link) => {
      const isActive = pathname === link.href;
      return (
        <motion.div
          key={link.href}
          variants={linkItemVariants}
          custom={link.href} // not used in variant, but kept if you want custom delays
        >
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
      className="bg-[#1A237E] px-6 py-4 flex items-center justify-between"
      dir="rtl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px 0px' }}
      variants={navContainerVariants}
    >
      {/* Right: navigation links (animated individually) */}
      <div className="flex gap-6">{renderedLinks}</div>

      {/* Left: icon/image (pop‐in animation) */}
      <motion.div
        className="flex items-center"
        variants={logoVariants}
      >
        <Image
          src={eid}
          alt="عيد مبارك"
          width={80}
          height={80}
          className="rounded-full object-cover select-none pointer-events-none"
          draggable={false}
        />
      </motion.div>
    </motion.nav>
  );
}
