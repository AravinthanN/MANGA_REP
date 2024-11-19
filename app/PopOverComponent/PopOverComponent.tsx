import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

const PopUp = ({ content }) => {
  // Split content into lines based on newline characters
  const lines = content.split("\n");

  return (
    <Popover
      showArrow
      backdrop="opaque"
      placement="Bottom Start"
      classNames={{
        base: ["before:bg-default-200"],
        content: [
          "py-3 px-4 border border-default-200",
          "bg-gradient-to-br from-white to-default-300",
          "dark:from-default-100 dark:to-default-50",
        ],
      }}
    >
      <PopoverTrigger>
        <div className="w-full p-5 font-serif text-base leading-relaxed text-gray-700 rounded-lg bg-[#fffaf1]">
          {/* Map through each line */}
          {lines.map((line, index) => {
            const isHtml = /<\/?[a-z][\s\S]*>/i.test(line); // Check if line is HTML

            return isHtml ? (
              // Render as HTML if line is HTML
              <span key={index} dangerouslySetInnerHTML={{ __html: line }} />
            ) : (
              // Render as plain text if line is not HTML
              <p key={index}>{line}</p>
            );
          })}
        </div>
      </PopoverTrigger>
      <PopoverContent>
        {(titleProps) => (
          <div className="px-1 py-2">
            <h3
              className="sm:text-[15px] leading-relaxed font-bold max-w-screen-lg text-gray-700 rounded-lg bg-[#fffaf1]"
              {...titleProps}
            >
              {/* Map through each line again for the content inside the Popover */}
              {lines.map((line, index) => {
                const isHtml = /<\/?[a-z][\s\S]*>/i.test(line); // Check if line is HTML

                return isHtml ? (
                  // Render as HTML if line is HTML
                  <span
                    key={index}
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                ) : (
                  // Render as plain text if line is not HTML
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
