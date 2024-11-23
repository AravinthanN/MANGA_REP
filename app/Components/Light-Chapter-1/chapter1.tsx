"use client";
import { useInView } from "react-intersection-observer";
import PopUp from "@/app/PopOverComponent/PopOverComponent";
import React from "react";
import texts from "./textFile";

const TextWithPopover = () => {
  return (
    <div className="max-w-[800px] min-h-screen mx-auto mb-10 mt-5 bg-[#fffaf1]">
      {texts.map((text, index) => {
        // Use the hook correctly in the component scope
        const [ref, inView] = useInView({
          threshold: 0.2, // Trigger animation when 20% of the component is in view
        });

        return (
          <div
            ref={ref} // Apply ref here
            key={index}
            className={`w-full h-auto mx-2 transition-transform duration-1000 ${
              inView
                ? index % 2 === 0
                  ? "translate-x-0 opacity-100"
                  : "translate-x-0 opacity-100"
                : index % 2 === 0
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
            }`}
          >
            <PopUp content={text} />
          </div>
        );
      })}
    </div>
  );
};

export default TextWithPopover;
