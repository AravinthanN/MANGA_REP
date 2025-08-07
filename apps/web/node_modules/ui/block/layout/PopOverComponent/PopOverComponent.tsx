'use client';

import React from 'react';
import parse from 'html-react-parser';

const PopUp = ({ content }: { content: string | undefined }) => {
  if (!content) return null;

  const lines = [content];
  return (
    <div className="w-full font-serif text-base leading-relaxed text-gray-800">
      {lines.map((line, index) => {
        const isHtml = /<\/?[a-z][\s\S]*>/i.test(line);
        const isImageLine = line.startsWith('#');
        const imagePath = isImageLine ? line.slice(1) : null;
        return isHtml ? (
          // <span key={index} dangerouslySetInnerHTML={{ __html: line }} />
          parse(line)
        ) : isImageLine && imagePath ? (
          <div key={index} className="w-full flex justify-center my-4">
            <img
              src={`/images/${imagePath}`}
              alt="Dynamic"
              className="max-w-full max-h-[400px] object-contain"
            />
          </div>
        ) : (
          <p key={index}>{line}</p>
        );
      })}
    </div>
  );
};

export default PopUp;
