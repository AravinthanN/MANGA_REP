"use client";

import React, { useState } from "react";
import PopUp from "@/app/PopOverComponent/PopOverComponent";
import texts from "./textFile";

const PARAGRAPHS_PER_PAGE = 5;

const Chapter_1 = () => {
  const [page, setPage] = useState(0);
  const [flipDirection, setFlipDirection] = useState("right"); // default direction

  const totalPages = Math.ceil(texts.length / PARAGRAPHS_PER_PAGE);

  const currentTexts = texts.slice(
    page * PARAGRAPHS_PER_PAGE,
    (page + 1) * PARAGRAPHS_PER_PAGE
  );

  const handleNext = () => {
  if (page < totalPages - 1) {
    setFlipDirection("right");
    setPage((p) => p + 1);
  }
};

const handlePrev = () => {
  if (page > 0) {
    setFlipDirection("left");
    setPage((p) => p - 1);
  }
};


  return (
    <div className="h-[900px] w-full bg-[#f8f5f0] overflow-hidden flex flex-col">
      <div className="w-full flex-1 relative flex justify-center items-center px-4">
        {/* Navigation Buttons OUTSIDE content width */}
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-4xl px-4 py-2 rounded-full glass-button backdrop-blur-md text-[#8b5e3c] disabled:opacity-40 z-10"
        >
          &lt;
        </button>

     <div
  key={page}
  className={`w-full max-w-[900px] h-[90%] p-8 rounded-xl prose prose-lg prose-slate dark:prose-invert font-serif overflow-y-auto ${
    flipDirection === "right" ? "book-flip-right" : "book-flip-left"
  }`}
>


          <h1 className="text-4xl font-bold mb-8 text-center tracking-wide font-serif">
            Chapter 1
          </h1>

          {currentTexts.map((text, index) => (
            <div
              key={index}
              className={`w-full text-center mb-3 ${
                page === 0 && index === 0 ? "first-paragraph" : "indent-8"
              } text-justify text-lg leading-relaxed font-serif`}
            >
              <PopUp content={text} />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={page === totalPages - 1}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-4xl px-4 py-2 rounded-full glass-button backdrop-blur-md text-[#8b5e3c] disabled:opacity-40 z-10"
        >
          &gt;
        </button>
      </div>

      {/* Styles */}
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

        .glass-button {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }

        .glass-button:hover {
          background: rgba(255, 255, 255, 0.4);
        }

       .book-flip-right {
  animation: pageTurnRight 0.8s ease-in-out;
  transform-origin: left center;
  perspective: 2000px;
}

.book-flip-left {
  animation: pageTurnLeft 0.8s ease-in-out;
  transform-origin: right center;
  perspective: 2000px;
}

@keyframes pageTurnRight {
  0% {
    transform: rotateY(-90deg) scale(0.95);
    opacity: 0.2;
  }
  50% {
    transform: rotateY(10deg) scale(1.02);
    opacity: 0.8;
  }
  100% {
    transform: rotateY(0deg) scale(1);
    opacity: 1;
  }
}

@keyframes pageTurnLeft {
  0% {
    transform: rotateY(90deg) scale(0.95);
    opacity: 0.2;
  }
  50% {
    transform: rotateY(-10deg) scale(1.02);
    opacity: 0.8;
  }
  100% {
    transform: rotateY(0deg) scale(1);
    opacity: 1;
  }
}

}

      `}</style>
    </div>
  );
};

export default Chapter_1;
