'use client';

import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import img1 from '@/public/img1.jpg';
import img3 from '@/public/img3.jpg';
import img4 from '@/public/img4.jpg';
import img5 from '@/public/img5.jpg';
import img6 from '@/public/img6.jpg';
import img7 from '@/public/img7.jpg';
type BgColorKey =
  | 'white'
  | 'black'
  | 'gold'
  | 'darkBlue'
  | 'gray'
  | 'emerald'
  | 'teal'
  | 'purple'
  | 'red'
  | 'blue'
  | 'yellow'
  | 'pink'
  | 'lime'
  | 'indigo'
  | 'cyan'
  | 'orange';
type TextColorKey =
  | 'black'
  | 'white'
  | 'gold'
  | 'darkBlue'
  | 'gray'
  | 'emerald'
  | 'teal'
  | 'purple'
  | 'red'
  | 'blue'
  | 'yellow'
  | 'pink'
  | 'lime'
  | 'indigo'
  | 'cyan'
  | 'orange';
type OverlayChoice = 'above' | 'onImage';
type TextPosition = 'center' | 'topRight' | 'topCenter';

export default function CreateCardPage() {
  const [text, setText] = useState('');
  const [overlayChoice, setOverlayChoice] = useState<OverlayChoice>('onImage');
  const [bgColor, setBgColor] = useState<BgColorKey>('gray');
  const [textColor, setTextColor] = useState<TextColorKey>('white');
  const [selectedImage, setSelectedImage] = useState<typeof img1 | typeof img3 | typeof img4 | typeof img5 | typeof img6 | typeof img7 | null>(null);
  const [customImageUrl, setCustomImageUrl] = useState<string | null>(null);
  const [textPosition, setTextPosition] = useState<TextPosition>('center');
  const [showModal, setShowModal] = useState(false);

  const bgColorMap: Record<BgColorKey, string> = {
    white: '#FFFFFF',
    black: '#000000',
    gold: '#FFD700',
    darkBlue: '#1A237E',
    gray: '#808080',
    emerald: '#009688',
    teal: '#008080',
    purple: '#9C27B0',
    red: '#F44336',
    blue: '#2196F3',
    yellow: '#FFEB3B',
    pink: '#E91E63',
    lime: '#CDDC39',
    indigo: '#3F51B5',
    cyan: '#00BCD4',
    orange: '#FF9800',
  };

  const textColorMap: Record<TextColorKey, string> = {
    black: '#000000',
    white: '#FFFFFF',
    gold: '#FFD700',
    darkBlue: '#1A237E',
    gray: '#808080',
    emerald: '#009688',
    teal: '#008080',
    purple: '#9C27B0',
    red: '#F44336',
    blue: '#2196F3',
    yellow: '#FFEB3B',
    pink: '#E91E63',
    lime: '#CDDC39',
    indigo: '#3F51B5',
    cyan: '#00BCD4',
    orange: '#FF9800',
  };

  const handleCustomImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImageUrl(url);
      setSelectedImage(null);
    }
  };

  const getPositionClasses = () => {
    switch (textPosition) {
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

  const bgOptions: BgColorKey[] = [
    'white',
    'black',
    'gold',
    'darkBlue',
    'gray',
    'emerald',
    'teal',
    'purple',
    'red',
    'blue',
    'yellow',
    'pink',
    'lime',
    'indigo',
    'cyan',
    'orange',
  ];
  const textOptions: TextColorKey[] = [
    'black',
    'white',
    'gold',
    'darkBlue',
    'gray',
    'emerald',
    'teal',
    'purple',
    'red',
    'blue',
    'yellow',
    'pink',
    'lime',
    'indigo',
    'cyan',
    'orange',
  ];

  const charLimit = 300;

  return (
    <motion.main
      className="min-h-screen bg-[#faf8f5] text-[#4d4d3a] p-6"
      dir="rtl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <motion.div
          className="md:w-1/3 bg-[#dfdacf] bg-opacity-80 p-6 rounded-lg space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h2
            className="text-2xl font-semibold mb-4 text-[#4d4d3a]"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            خيارات البطاقة
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <label className="block mb-2 text-[#4d4d3a]">
              أدخل النص (حتى {charLimit} حرفًا)
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={charLimit}
              className="w-full p-2 rounded bg-gray-200 text-[#4d4d3a] placeholder:text-gray-500"
              placeholder="اكتب هنا..."
              dir="auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <p className="mb-2 text-[#4d4d3a]">أين تريد أن يظهر النص؟</p>
            <label className="inline-flex items-center mr-4 text-[#4d4d3a]">
              <input
                type="radio"
                name="overlay"
                value="above"
                checked={overlayChoice === 'above'}
                onChange={() => setOverlayChoice('above')}
                className="accent-[#4d4d3a]"
              />
              <span className="mr-2">نص فوق الصورة</span>
            </label>
            <label className="inline-flex items-center text-[#4d4d3a]">
              <input
                type="radio"
                name="overlay"
                value="onImage"
                checked={overlayChoice === 'onImage'}
                onChange={() => setOverlayChoice('onImage')}
                className="accent-[#4d4d3a]"
              />
              <span className="mr-2">نص على الصورة</span>
            </label>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <p className="mb-2 text-[#4d4d3a]">لون الخلفية</p>
            <div className="flex flex-wrap gap-3">
              {bgOptions.map((c) => (
                <motion.div
                  key={c}
                  onClick={() => setBgColor(c)}
                  style={{ backgroundColor: bgColorMap[c] }}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 ${bgColor === c ? 'border-[#4d4d3a]' : 'border-transparent'
                    }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <p className="mb-2 text-[#4d4d3a]">لون النص</p>
            <div className="flex flex-wrap gap-3">
              {textOptions.map((c) => (
                <motion.div
                  key={c}
                  onClick={() => setTextColor(c)}
                  style={{ backgroundColor: textColorMap[c] }}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 ${textColor === c ? 'border-[#4d4d3a]' : 'border-transparent'
                    }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <p className="mb-2 text-[#4d4d3a]">اختر صورة من الخيارات</p>
            <div className="flex gap-2">
              {[img1, img3, img4, img5, img6, img7].map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setSelectedImage(img);
                    setCustomImageUrl(null);
                  }}
                  className={`border-2 ${selectedImage === img ? 'border-[#4d4d3a]' : 'border-transparent'
                    } rounded overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={img}
                    alt={`اختيار ${idx + 1}`}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <label className="block mb-2 text-[#4d4d3a]">أضف صورة من جهازك</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleCustomImage}
              className="text-sm text-[#4d4d3a]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.4 }}
          >
            <p className="mb-2 text-[#4d4d3a]">موضع النص عند العرض على الصورة</p>
            <select
              value={textPosition}
              onChange={(e) => setTextPosition(e.target.value as TextPosition)}
              className={`w-full p-2 rounded text-[#4d4d3a] bg-gray-200 ${overlayChoice === 'above' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              disabled={overlayChoice === 'above'}
            >
              <option value="center" className="text-[#4d4d3a]">
                في المنتصف
              </option>
              <option value="topRight" className="text-[#4d4d3a]">
                في أعلى اليمين
              </option>
              <option value="topCenter" className="text-[#4d4d3a]">
                في أعلى المنتصف
              </option>
            </select>
            {overlayChoice === 'above' && (
              <p className="text-sm text-gray-400 mt-1">
                اختر &apos;نص على الصورة&apos; لتمكين هذا الخيار
              </p>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-2/3 space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            className="relative w-full h-[550px] rounded-lg overflow-hidden"
            style={{ backgroundColor: bgColorMap[bgColor] }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {overlayChoice === 'above' && text && (
              <motion.div
                className="absolute top-0 left-0 right-0 h-20 p-4 z-10"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <p
                  className="text-2xl font-bold text-right"
                  style={{ color: textColorMap[textColor] }}
                  dir="auto"
                >
                  {text}
                </p>
              </motion.div>
            )}

            <motion.div
              className={`absolute left-0 right-0 rounded-lg overflow-hidden ${overlayChoice === 'above' ? 'top-20 bottom-0 m-0' : 'inset-0 m-4'
                }`}
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {(selectedImage || customImageUrl) && (
                <motion.div
                  className="w-full h-full flex items-center justify-center bg-black/5"
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <Image
                    src={selectedImage || customImageUrl!}
                    alt="معاينة البطاقة"
                    fill
                    className="object-cover"
                    draggable={false}
                  />
                </motion.div>
              )}

              {overlayChoice === 'onImage' && text && (
                <motion.div
                  className={`${getPositionClasses()} px-2 z-10`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <p
                    className="text-2xl font-bold text-center"
                    style={{ color: textColorMap[textColor] }}
                    dir="auto"
                  >
                    {text}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* “Done” button */}
          <motion.button
            onClick={() => setShowModal(true)}
            className="bg-[#483C32] hover:bg-[#3b322a] text-[#fdf6e3] font-semibold px-6 py-2 rounded transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            تم
          </motion.button>
        </motion.div>
      </div>

      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-20 p-6"
          onClick={() => setShowModal(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="relative w-[90%] max-w-xl h-[800px] bg-[#dfdacf] bg-opacity-80 rounded-lg overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <h1 className="text-3xl font-bold text-center text-[#4d4d3a]">
                خذ لقطة شاشة
              </h1>
            </motion.div>

            <motion.div
              className="relative flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              {/* Image centered */}
              {(selectedImage || customImageUrl) && (
                <motion.div
                  className="absolute inset-x-0 top-4 bottom-0 flex items-center justify-center"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Image
                    src={selectedImage || customImageUrl!}
                    alt="معاينة البطاقة"
                    fill
                    className="object-contain"
                    draggable={false}
                  />
                </motion.div>
              )}

              {overlayChoice === 'above' && text && (
                <motion.div
                  className="absolute top-0 left-0 right-0 h-24 p-6 z-10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <p
                    className="text-3xl font-bold text-right"
                    style={{ color: textColorMap[textColor] }}
                    dir="auto"
                  >
                    {text}
                  </p>
                </motion.div>
              )}

              {overlayChoice === 'onImage' && text && (
                <motion.div
                  className={`${getPositionClasses()} px-4 z-10`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <p
                    className="text-3xl font-bold text-center"
                    style={{ color: textColorMap[textColor] }}
                    dir="auto"
                  >
                    {text}
                  </p>
                </motion.div>
              )}

              {overlayChoice === 'above' && !selectedImage && !customImageUrl && text && (
                <motion.div
                  className="absolute top-0 left-0 right-0 h-24 p-6 z-10"
                  style={{ backgroundColor: bgColorMap[bgColor] }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <p
                    className="text-3xl font-bold text-right"
                    style={{ color: textColorMap[textColor] }}
                    dir="auto"
                  >
                    {text}
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
