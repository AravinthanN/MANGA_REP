'use client';

import React, {
  ReactNode,
  useRef,
  useState,
  useEffect,
  LegacyRef,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TextType } from '../../types/chaptertypes';
import PopUp from './PopOverComponent/PopOverComponent';

type ChapterLayoutProps = {
  texts: TextType[];
  ChapterNo?: number;
  NoFrameKeyword?: string;
};

const ChapterLayout: React.FC<ChapterLayoutProps> = ({
  texts,
  ChapterNo,
  NoFrameKeyword,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentBorder, setCurrentBorder] = useState<string>('');

  // 🔹 Track which text is in view and update border
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const index = Number(visibleEntry.target.getAttribute('data-index'));
          const textItem = texts[index];
          if (
            textItem?.border &&
            !textItem?.text?.includes(NoFrameKeyword || '')
          ) {
            setCurrentBorder(textItem.border);
          } else {
            setCurrentBorder('');
          }
        }
      },
      { threshold: 0.6 },
    );

    blockRefs.current.forEach((block) => {
      if (block) observer.observe(block);
    });

    return () => {
      observer.disconnect();
    };
  }, [texts, NoFrameKeyword]);

  return (
    <div className="relative py-10 px-10">
      {/* 🔹 Fixed animated border */}
      <AnimatePresence mode="wait">
        {currentBorder && (
          <motion.img
            key={currentBorder} // Ensures fade on change
            className="fixed inset-0 w-full h-full pointer-events-none select-none z-50 scale-y-[1.25] scale-x-[1.20]"
            src={`/images/${currentBorder}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        )}
      </AnimatePresence>

      {/* 🔹 Scrollable content */}
      <div
        ref={containerRef}
        className="relative z-10 w-full md:w-[70%] px-4 py-6 border border-[#8f8a8a] rounded-xl prose prose-lg prose-slate dark:prose-invert bg-[#f7edd2] font-serif text-[#a2680e] backdrop-blur-lg transition-all duration-500 h-screen overflow-y-auto "
      >
        {ChapterNo && (
          <h1 className="text-4xl font-bold mb-4 text-center font-serif text-[#9c597c]">
            Chapter {ChapterNo}
          </h1>
        )}

        {texts?.map((item, index) => (
          <React.Fragment key={index}>
            {item?.component ? (
              item.component
            ) : item?.type === 'img' ? (
              <div
                ref={(el) => {
                  blockRefs.current[index] = el;
                }}
                data-index={index}
                className="w-full flex justify-center my-4"
              >
                <img
                  src={`/images/${item.path}`}
                  alt={`img-${index}`}
                  className="max-w-full max-h-[400px] object-contain"
                />
              </div>
            ) : (
              <div
                // ref={(el) => (blockRefs.current[index] = el)}
                ref={(el) => {
                  blockRefs.current[index] = el;
                }}
                data-index={index}
                className={`text-justify mb-4 text-lg leading-relaxed font-serif ${
                  index === 0 ? 'first-paragraph' : 'indent-8'
                }`}
              >
                <PopUp content={item.text} />
              </div>
            )}
          </React.Fragment>
        ))}

        <style jsx>{`
          .first-paragraph::first-line {
            float: left;
            font-size: 2rem;
            line-height: 1;
            padding-right: 0.2em;
            font-weight: bold;
            font-family: Georgia, serif;
            color: #8b5e3c;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ChapterLayout;
