import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

const PopUp = ({ content }: { content: string }) => {
  // Split content into lines based on newline characters
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
        ],
      }}
    >
      <PopoverTrigger>
        <div className="w-full p-5 font-serif text-base leading-relaxed text-gray-700 rounded-lg bg-[#fffaf1]">
          {/* Map through each line */}
          {lines.map((line, index) => {
            const isHtml = /<\/?[a-z][\s\S]*>/i.test(line); // Check if the line is HTML
            const isContainImage = line.startsWith("#"); // Check if the line starts with "#"

            // Extract the content after "#" if it's an image reference
            const removedHash = isContainImage ? line.slice(1) : null;
            console.log(removedHash);
            return isHtml ? (
              // Render as HTML if the line is HTML
              <span key={index} dangerouslySetInnerHTML={{ __html: line }} />
            ) : isContainImage && removedHash ? (
              // Render as an image if the line starts with "#" and contains a valid image path
              <span
                key={index}
                style={{
                  textAlign: "start",
                  width: "500px",
                  height: "500px",
                  display: "inline-block",
                  overflow: "hidden",
                }}
              >
                <img
                  src={removedHash} // Or "/images/choIntro.jpg"
                  alt="Dynamic Image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    transform: "rotate(90deg)",
                    transformOrigin: "center", // Rotate from the center
                  }}
                />
              </span>
            ) : (
              // Render as plain text if it's not HTML or an image
              <p key={index}>{line}</p>
            );
          })}
        </div>
      </PopoverTrigger>
      <PopoverContent>
        {(titleProps) => (
          <div className="px-1 py-2">
            <h3
              className="sm:text-[15px] leading-relaxed font-bold max-w-screen-lg text-white rounded-lg bg-black"
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
