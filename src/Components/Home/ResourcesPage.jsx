import React from "react";

export default function ResourcesPage() {
  return (
    <div className=" py-5 md:py-20 w-full  lg:px-32 px-5 ">
      <div className=" items-center w-full h-full flex flex-col-reverse gap-10  xl:gap-[120px] lg:flex-row-reverse ">
        <div className=" flex w-full sm:w-fit items-center ">
          <div className=" w-full relative h-[320px] overflow-hidden xs:w-[500px] xs:h-[400px] md:w-[700px] md:h-[480px] lg:w=[400px] lg:h-[400px] xl:w-[480px] xl:h-[480px] bg-LightBlue rounded-2xl "></div>
        </div>

        <div className=" w-full flex flex-col ">
          <p className="text-primaryColor font-semibold tracking-wide text-xs sm:text-sm md:text-base md:leading-[22.4px] mb-2 md:mb-4">
            Class & resource management
          </p>
          <div className=" text-2xl sm:text-3xl md:text-4xl md:leading-[43.2px] tracking-wide font-bold mb-4 md:mb-6 ">
            {" "}
            Streamlining Operations with Efficient Class and Resource Management{" "}
          </div>
          <div className=" flex w-full flex-col gap-2 mt-6 ">
            <h1 className=" font-bold text-xs sm:text-sm md:text-base tracking-wide text-[#090914] leading-5 md:leading-[22.4px] ">
              Assignments
            </h1>
            <p className=" text-xs sm:text-sm md:text-base tracking-wide text-[#545454] leading-5 md:leading-[22.4px] ">
              Seemlessly create, distribute, and evaluate assignments, fostering
              a productive and engaging learning environment.
            </p>
            <div className=" w-1/2 bg-[#F2F6F6] rounded-full h-1 ">
              <div className=" w-full bg-primaryColor rounded-full h-1 "> </div>
            </div>
          </div>

          <div className=" flex w-full flex-col gap-2 mt-6 ">
            <h1 className=" font-bold text-xs sm:text-sm md:text-base tracking-wide text-[#090914] leading-5 md:leading-[22.4px] ">
              Videos & Resources
            </h1>
            <p className=" text-xs sm:text-sm md:text-base tracking-wide text-SilverColor leading-5 md:leading-[22.4px] ">
              Effortlessly organize, store, and distribute videos, documents,
              and other learning resources, creating a dynamic and engaging
              learning environment.
            </p>
            <div className=" w-1/2 bg-[#F2F6F6] rounded-full h-1 ">
              <div className=" w-full bg-primaryColor rounded-full h-1 "> </div>
            </div>
          </div>

          <div className=" flex w-full flex-col gap-2 mt-6 ">
            <h1 className=" font-bold text-xs sm:text-sm md:text-base tracking-[0.02em] text-[#090914] leading-5 md:leading-[22.4px] ">
              Doubts Clearance
            </h1>
            <p className=" text-xs sm:text-sm md:text-base tracking-wide text-SilverColor leading-5 md:leading-[22.4px] ">
              Robust doubt clearance spaces and sessions, providing students
              with collaborative platforms to seek clarification and enhance
              their understanding.
            </p>
            <div className=" w-1/2 bg-[#F2F6F6] rounded-full h-1 ">
              <div className=" w-full bg-primaryColor rounded-full h-1 "> </div>
            </div>
          </div>

          <div className=" mt-5 md:mt-12 ">
            <button className=" rounded-lg capitalize font-medium text-xs sm:text-sm md:text-base md:leading-[22px] tracking-wider px-8 py-[13px] bg-primaryColor text-white  ">
              Start Using
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
