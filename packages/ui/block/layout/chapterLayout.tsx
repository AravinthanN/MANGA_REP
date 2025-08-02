'use client';

import React, { ReactNode } from 'react';
import PopUp from '@/app/PopOverComponent/PopOverComponent';

const ChapterLayout = ({texts,BorderFrame}:{texts:string[],BorderFrame?:ReactNode}) => {
  return (
    
        <div className="w-full md:w-[70%] px-6 py-8 border border-[#8f8a8a] rounded-xl prose prose-lg prose-slate dark:prose-invert font-serif bg-[#fffaf1] backdrop-blur-lg transition-all duration-500">
          <h1 className="text-4xl font-bold mb-6 text-center font-serif">Chapter 1</h1>
          {texts.map((text, index) => (
            <div
              key={index}
              className={`text-justify mb-4 text-lg leading-relaxed font-serif ${
                index === 0 ? 'first-paragraph' : 'indent-8'
              }`}
            >
              <PopUp content={text} />
            </div>
          ))}
           <style jsx>{`
        .first-paragraph::first-line {
          float: left;
          font-size: 3rem;
          line-height: 1;
          padding-right: 0.2em;
          font-weight: bold;
          font-family: Georgia, serif;
          color: #8b5e3c;
        }
      `}</style>
        </div>
     
  );
};

export default ChapterLayout;
