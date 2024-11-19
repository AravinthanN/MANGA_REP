"use client";

import PopUp from "@/app/PopOverComponent/PopOverComponent";
import React from "react";
import texts from "./textFile";

const TextWithPopover = () => {
  return (
    <div className="max-w-[800px] min-h-screen mx-auto mb-10 mt-5">
      {texts.map((text, index) => (
        <div key={index} className="w-[100%] h-auto mx-2">
          {/* Render content depending on whether it has HTML */}
          <PopUp content={text} />
        </div>
      ))}
    </div>
  );
};

export default TextWithPopover;
