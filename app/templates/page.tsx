// app/templates/page.tsx
'use client';

import { useState, MouseEvent } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { motion } from 'framer-motion';

import img1 from '@/public/img1.jpg';
import img3 from '@/public/img3.jpg';
import img4 from '@/public/img4.jpg';
import img5 from '@/public/img5.jpg';
import img6 from '@/public/img6.jpg';
import img7 from '@/public/img7.jpg';


type Template = {
  id: number;
  recipient: string;
  previewImage: StaticImageData;
  defaultText: string;
  defaultPosition: 'above' | 'center' | 'topRight' | 'topCenter';
};

const templates: Template[] = [
  {
    id: 1,
    recipient: 'للأم',
    previewImage: img1,
    defaultText: `أمي العزيزة،
بمناسبة عيد الأضحى المبارك، أسأل الله أن يملأ قلبك سعادةً وفرحًا كما ملأتِ قلبي حباً وحنانًا. أسأل الله أن يحقق لكِ أطيب الأمنيات وأن يمنّ عليكِ بفيض الصحة والبركة، وأن يرزقكِ السلام والرضا. عيدك مبارك وأنتِ تاج فوق رأسي.`,
    defaultPosition: 'center',
  },
  {
    id: 2,
    recipient: 'للأب',
    previewImage: img3,
    defaultText: `أبي الحبيب،
في عيد الأضحى المبارك، أدعو الله أن يحفظك ويرعاك ويقرّ عينك بأسرتك. أسأل الرحمن أن يمنحك القوة والرزق الواسع، وأن يأخذ بيدك إلى الخير دائمًا. كل عام وأنت بخير، وعطاؤك لنا غير محدود. عيد مبارك وعمر مديد بإذن الله.`,
    defaultPosition: 'center',
  },
  {
    id: 3,
    recipient: 'للأخ',
    previewImage: img5,
    defaultText: `أخي العزيز،
مع حلول عيد الأضحى المبارك، أتمنى لك دوام الصحة والبركة والتوفيق في كل خطوة تخطوها. أسأل الله أن يجعلك من المقبولين ويعيد عليك هذا العيد وأنت في أحسن حال، وأن يرزقك السعادة والنجاح أينما كنت. عيدك مبارك يا سندي ورفيق دربي.`,
    defaultPosition: 'center',
  },
  {
    id: 4,
    recipient: 'للأخت',
    previewImage: img5,
    defaultText: `أختي الغالية،
تهنئة قلبية بمناسبة عيد الأضحى المبارك، أسأل الله أن يجعلك من السعداء في الدارين، وأن يغمرك بعونه ورحمته. كل عام وأنتِ رمزٌ للتفاؤل والعطاء، وأنتِ من زين حياتي بوجودك. أتمنى لكِ عيدًا مليئًا بالأمل والسرور.`,
    defaultPosition: 'center',
  },
  {
    id: 5,
    recipient: 'للصديق',
    previewImage: img5,
    defaultText: `إلى صديقي الغالي،
عيدك مبارك وأنت بخير. في هذا اليوم الفضيل، أسأل الله أن يكتب لك أجر الأضحى وأن يعيد عليك الأيام بالسرور والأمل. شكرًا لصداقتك ووقوفك بجانبي دائمًا، دمتم أخًا وأخًا في الله. كل عام وأنت بخير.`,
    defaultPosition: 'center',
  },
  {
    id: 6,
    recipient: 'لزميل العمل',
    previewImage: img6,
    defaultText: `إلى زميلي العزيز في العمل،
عيد أضحى مبارك! بارك الله لنا ولك في أعمالنا ورزقنا النجاح والتوفيق معًا. أسأل الله أن يملأ أيامك سعادةً ورزقًا حلالًا مباركًا. شكرًا لتعاونك ودعمك المستمر طوال العام، وكل عام وأنت بألف خير.`,
    defaultPosition: 'center',
  },
  {
    id: 7,
    recipient: 'للزوجة',
    previewImage: img1,
    defaultText: `زوجتي الغالية،
في يوم عيد الأضحى المبارك، أسأل الله أن يديم عليكِ السعادة والرضا. لكِ حضورٌ يملأ حياتي دفئًا وفرحًا، وأسأل الله أن يبارك في أيامنا معًا ويجعل محبتنا أبدية. عيدك مبارك يا روح قلبي.`,
    defaultPosition: 'center',
  },
  {
    id: 8,
    recipient: 'للزوج',
    previewImage: img7,
    defaultText: `زوجي الحبيب،
عيد أضحى مبارك! في هذا اليوم الكريم، أسأل الله أن يحفظك ويبارك في صحتك وأعمالك. لكَ وجودٌ يضفي على حياتي أمانًا واستقرارًا، وأسأله أن يجمعنا دائمًا على طاعته. كل عام وأنت بخير وسعادة.`,
    defaultPosition: 'center',
  },
];

export default function TemplatesPage() {
  const [activeTemplate, setActiveTemplate] = useState<Template | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [parentRef] = useAutoAnimate<HTMLDivElement>();

  const getPositionClasses = (pos: Template['defaultPosition']) => {
    switch (pos) {
      case 'center':
        return 'absolute inset-0 flex items-center justify-center';
      case 'topRight':
        return 'absolute top-2 right-2';
      case 'topCenter':
        return 'absolute top-2 left-1/2 transform -translate-x-1/2';
      default:
        return 'absolute inset-0 flex items-center justify-center';
    }
  };

  const openModal = (tmpl: Template, e: MouseEvent) => {
    e.stopPropagation();
    setActiveTemplate(tmpl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveTemplate(null);
  };

  return (
    <motion.main
      className="min-h-screen bg-[#faf8f5] text-[#4d4d3a] p-6"
      dir="rtl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl font-bold mb-6 text-center text-[#4d4d3a]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        بطاقات عيد الأضحى
      </motion.h1>

      <div
        ref={parentRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {templates.map((tmpl) => (
          <motion.div
            key={tmpl.id}
            onClick={(e) => openModal(tmpl, e)}
            className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200 bg-[#dfdacf] bg-opacity-80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="w-full h-56 relative">
              <Image
                src={tmpl.previewImage}
                alt={`معاينة بطاقة ${tmpl.recipient}`}
                fill
                className="object-cover"
                draggable={false}
              />
            </div>

            <div className={`${getPositionClasses(tmpl.defaultPosition)} px-3 z-10`}>
              <p
                className="text-lg font-bold text-center leading-relaxed text-black "
                dir="auto"
              >
                {tmpl.defaultText}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {showModal && activeTemplate && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-30 p-6"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="relative w-[95%] max-w-2xl h-[800px] bg-[#dfdacf] bg-opacity-80 rounded-lg overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-center text-[#4d4d3a]">
                بطاقة عيد الأضحى {activeTemplate.recipient}
              </h2>
            </motion.div>

            <motion.div
              className="relative flex-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <div className="absolute inset-0" />

              <motion.div
                className="absolute inset-4 rounded-lg overflow-hidden"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Image
                  src={activeTemplate.previewImage}
                  alt={`معاينة بطاقة ${activeTemplate.recipient}`}
                  fill
                  className="object-contain"
                  draggable={false}
                />
              </motion.div>

              {activeTemplate.defaultPosition === 'above' && (
                <motion.div
                  className="absolute top-0 left-0 right-0 h-24 p-6 z-10"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <p
                    className="text-3xl font-bold text-right leading-snug text-black"
                    dir="auto"
                  >
                    {activeTemplate.defaultText}
                  </p>
                </motion.div>
              )}

              {activeTemplate.defaultPosition !== 'above' && (
                <motion.div
                  className={`${getPositionClasses(activeTemplate.defaultPosition)} px-4 z-10`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <p
                    className="text-3xl font-bold text-center leading-snug text-black"
                    dir="auto"
                  >
                    {activeTemplate.defaultText}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.main>
  );
}
