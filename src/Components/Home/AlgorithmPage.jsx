import React from "react";

export default function AlgorithmPage() {
  return (
    <div className=" mb-5  md:pb-20 w-full  lg:px-32 px-5 ">
      <div className=" items-center w-full h-full flex flex-col-reverse gap-10  xl:gap-[120px] lg:flex-row  ">
        <div className=" flex w-full sm:w-fit items-center ">
          <div className=" w-full ">
            <div className=" w-full relative h-[320px] overflow-hidden sm:w-[500px] sm:h-[400px] md:w-[700px] md:h-[480px] lg:w-[400px] lg:h-[480px] xl:w-[480px] xl:h-[480px] bg-LightBlue rounded-2xl ">
              <div className=" flex justify-end items-center flex-col ">
                <div className=" absolute top-[30px] sm:top-[90px]  w-[250px] sm:w-[320px] mt-auto h-[73px] ">
                  <img
                    src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FroutineClass.2bf383a6.png&w=1080&q=75"
                    alt="class-8A"
                  />
                </div>

                <div className=" sm:h-[700px] h-[600px]  absolute overflow-hidden md:-bottom-[400px] -bottom-[390px]  sm:-bottom-[470px] w-[250px] sm:w-[310px] ">
                  <img
                    src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTeachers.a92239bd.png&w=1080&q=75"
                    alt="Available-person"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full flex flex-col ">
          <div className=" text-primaryColor font-semibold tracking-[0.02em] text-sm sm:text-sm md:text-base md:leading-[22.4px] mb-2 md:mb-4 ">
            Create Algorithm Assisted Routine
          </div>

          <div className=" text-2xl sm:text-3xl md:text-4xl md:leading-[43.2px] tracking-tight font-bold mb-4 md:mb-6 ">
            Experience the power of algorithm-assisted routine creation
          </div>

          <p className=" text-sm sm:text-sm md:text-base lg:text-sm xl-[text-base] leading-5 md:leading-[25.6px] tracking-wider text-SilverColor mb-5 md:mb-[44px] ">
            Our school management system introduces the innovative "Create
            Algorithm Assisted Routine" feature, designed to simplify and
            optimize the process of creating and managing school timetables. By
            leveraging advanced algorithms and intelligent scheduling
            techniques, this feature revolutionizes the way school
            administrators and staff handle routine creation.
          </p>
          <div className=" mb-3 md:mb-6 ">
            <button className="rounded-lg capitalize shadow-md font-medium text-sm sm:text-sm md:text-base md:leading-[22px] tracking-[0.06em] px-8 py-[13px] bg-primaryColor text-white ">
              Get Started
            </button>
          </div>

          <div className=" border-t-2 pt-3 md:pt-6 text-sm sm:text-sm md:text-base leading-5 md:leading-[26px] tracking-wide text-[#18181B] mb-2 md:mb-4 ">
            “Routine Management used to be the most tedious task before, but now
            with the Medhavhi Automated Routine Management System managing
            teachers has been so much easier. All thanks to Medhavhi.”
          </div>

          <h1 className=" md:mb-1 text-xs sm:text-sm md:text-base leading-[26px] tracking-wide font-bold text-[#090914] ">
            Sunita Nuepane Silwal
          </h1>

          <p className=" text-gray-500 font-medium text-[10px] sm:text-xs mdd:text-sm ">
            Padma Shree College
          </p>
        </div>
      </div>
    </div>
  );
}
