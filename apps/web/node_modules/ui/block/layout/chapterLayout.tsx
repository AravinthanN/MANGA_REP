'use client';

import React, { ReactNode, useEffect, useRef } from 'react';
import { useFrameVisibility } from '../../context/frameVisbilityContext';
import PopUp from './PopOverComponent/PopOverComponent';

type ChapterLayoutProps = {
  texts: string[];
  ChapterNo?: number;
  BorderFrame?: ReactNode;
  NoFrameKeyword?: string;
};

const ChapterLayout: React.FC<ChapterLayoutProps> = ({
  texts,
  ChapterNo,
  BorderFrame,
  NoFrameKeyword,
}) => {
  const { setVisible } = useFrameVisibility();
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null); // scroll container

  useEffect(() => {
    const checkVisibleBlocks = () => {
      let anyVisible = false;

      blockRefs.current.forEach((block, index) => {
        if (!block || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const blockRect = block.getBoundingClientRect();

        const isVisible =
          blockRect.top < containerRect.bottom &&
          blockRect.bottom > containerRect.top;

        if (!isVisible) return;

        const text = texts[index]?.toLowerCase() || '';
        const hasKeyword =
          NoFrameKeyword && text.includes(NoFrameKeyword.toLowerCase());

        if (!hasKeyword) anyVisible = true;
      });

      setVisible(anyVisible);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkVisibleBlocks);
      container.addEventListener('resize', checkVisibleBlocks);
      checkVisibleBlocks();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkVisibleBlocks);
        container.removeEventListener('resize', checkVisibleBlocks);
      }
    };
  }, [texts, NoFrameKeyword, setVisible]);

  return (
    <div className="relative">
      {BorderFrame}

      <div
        ref={containerRef}
        className="w-full md:w-[70%] px-6 py-8 border border-[#8f8a8a] rounded-xl prose prose-lg prose-slate dark:prose-invert font-serif bg-[#fffaf1] backdrop-blur-lg transition-all duration-500 h-screen overflow-y-auto"
      >
        {
          <h1 className="text-4xl font-bold mb-4 text-center font-serif text-[#9c597c]">
            Chapter <span>{ChapterNo}</span>
          </h1>
        }
        {texts.map((text, index) => {
          const cleanText = NoFrameKeyword
            ? text.replace(new RegExp(NoFrameKeyword, 'gi'), '').trim()
            : text;

          return (
            <div
              key={index}
              ref={(el) => {
                blockRefs.current[index] = el;
              }}
              className={`text-justify mb-4 text-lg leading-relaxed font-serif ${
                index === 0 ? 'first-paragraph' : 'indent-8'
              }`}
            >
              <PopUp content={cleanText} />
            </div>
          );
        })}

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
