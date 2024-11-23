import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

const PopUp = ({ content }: { content: string | undefined }) => {
  if (!content) {
    return null; // Return null if content is undefined or null
  }

  const lines = content.split("\n");

  return (
    <Popover
      showArrow
      backdrop="opaque"
      placement="bottom-start"
      classNames={{
        base: ["before:bg-default-200"],
        content: [
          "py-3 px-4 border border-default-200",
          "bg-gradient-to-br from-white to-default-300",
          "dark:from-default-100 dark:to-default-50",
          "max-w-full w-auto", // Make sure the popover doesn't stretch too wide
        ],
      }}
    >
      <PopoverTrigger>
        <div className="w-full p-5 font-serif text-base leading-relaxed text-gray-700 rounded-lg bg-[#fffaf1]">
          {lines.map((line, index) => {
            const isHtml = /<\/?[a-z][\s\S]*>/i.test(line); // Check if the line is HTML
            const isContainImage = line.startsWith("#"); // Check if the line starts with "#"

            const removedHash = isContainImage ? line.slice(1) : null;

            return isHtml ? (
              <span key={index} dangerouslySetInnerHTML={{ __html: line }} />
            ) : isContainImage && removedHash ? (
              <span
                key={index}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "inline-block",
                  overflow: "hidden",
                }}
              >
                <img
                  src={removedHash} // Or "/images/choIntro.jpg"
                  alt="Dynamic Image"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    // transform: "rotate(90deg)",
                    transformOrigin: "center",
                  }}
                />
              </span>
            ) : (
              <p key={index}>{line}</p>
            );
          })}
        </div>
      </PopoverTrigger>

      <PopoverContent>
        {(titleProps) => (
          <div className="px-2 py-3 sm:px-4 sm:py-5">
            <h3
              className="sm:text-[15px] text-[12px] leading-relaxed font-bold max-w-screen-lg text-white rounded-lg bg-black"
              {...titleProps}
            >
              {lines.map((line, index) => {
                const isHtml = /<\/?[a-z][\s\S]*>/i.test(line); // Check if line is HTML
                return isHtml ? (
                  <span
                    key={index}
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                ) : (
                  <p key={index}>{line}</p>
                );
              })}
            </h3>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default PopUp;
