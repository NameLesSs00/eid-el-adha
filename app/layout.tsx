import "./globals.css";
import { Cairo } from "next/font/google";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "عيد مبارك",
  description: "تم إنشاء هذا الموقع للاحتفال بعيد الأضحى، حيث يمكنك تصميم بطاقات تهنئة مخصصة لمشاركتها مع أحبائك. اختر صورة من جهازك أو من المعرض، أضف كلماتك الخاصة، ثم التقط لقطة شاشة وشاركها مع من تحب.",
};


const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cairo.className}>
      <body className=" bg-[#faf8f5]">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
