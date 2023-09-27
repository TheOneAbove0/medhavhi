
import React, { useState } from "react";
import { LuMoveRight } from "react-icons/lu";

export default function Discover() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const content = [
    {
      imageSrc:
        "https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcomponent.5e2bccfa.png&w=640&q=75",
      title: "Why use Medhavhi?",
      date: "12th June 2023",
    },
    {
      imageSrc:
        "https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcomponent1.904569d3.png&w=640&q=75",
      title: "Discover something awesome",
      date: "12th June 2023",
    },
    {
      imageSrc:
        "https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcomponent.5e2bccfa.png&w=640&q=75",
      title: "Discover something awesome",
      date: "12th June 2023",
    },

    {
      imageSrc:
        "https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcomponent1.904569d3.png&w=640&q=75",
      title: "Discover something awesome",
      date: "12th June 2023",
    },
    {
      imageSrc:
        "https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcomponent.5e2bccfa.png&w=640&q=75",
      title: "Discover something awesome",
      date: "12th June 2023",
    },
    {
      imageSrc:
        "https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcomponent1.904569d3.png&w=640&q=75",
      title: "Discover something awesome",
      date: "12th June 2023",
    },
    // Add more content objects as needed
  ];

  return (
    <div className="py-5 md:py-8 xl:pt-0 xl:pb-20 flex items-center">
      <div className="w-full">
        <div className="lg:px-32 px-5">
          <div className="mb-2 md:mb-3 font-semibold text-primaryColor text-xs sm:text-sm lg:text-base leading-[22.4px] tracking-wide">
            Discover
          </div>
          <div className="mb-5 md:mb-12 text-bold tracking-wide text-2xl md:text-3xl lg:text-4xl lg:leading-[43.2px]">
            Discover something awesome
          </div>
        </div>

        <div className="h-full w-full lg:px-32 px-5 flex overflow-y-auto scrollbar-hidden gap-2 md:gap-4">
          {content.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="w-full h-fit relative"
            >
              <div className="w-[290px] h-[180px] sm:w-[400px] sm:h-[270px] xl:w-[560px] xl:h-full cursor-pointer relative">
                <img
                  className="h-full w-full object-cover"
                  src={item.imageSrc}
                  alt="Discover"
                />
              </div>

              <div
                className={
                  hoveredIndex === index
                    ? "flex flex-col px-6 absolute animate-downward-fast top-2 sm:top-4 mdd:top-5 xl:top-7 text-white gap-2"
                    : "flex flex-col px-6 opacity-0 h-0 absolute  -top-20 text-white gap-2"
                }
              >
                <p className="flex  text-xs sm:text-sm md:text-base xl:text-2xl  font-semibold md:leading-[22.4px] xl:leading-[28.8px] tracking-wide">
                  {item.title}
                </p>
                <p className="text-[8px] sm:text-[10px] mdd:text-xs  xl:text-sm md:leading-4">
                  {item.date}
                </p>
              </div>

              <div
                className={
                  hoveredIndex === index
                    ? "bottom-8 xs:bottom-12 animate-upward-fast xl:bottom-10 absolute px-6 pt-6"
                    : "bottom-0 opacity-0 absolute px-6 pt-6"
                }
              >
                <button className="bg-white/80 rounded-full shadow-md px-6 py-2 text-[10px] sm:text-xs mdd:text-sm xl:text-[18px] lg:leading-[25.2px] tracking-[0.03em] flex items-center gap-5">
                  <span> Learn more</span>
                  <LuMoveRight />
                </button>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}
