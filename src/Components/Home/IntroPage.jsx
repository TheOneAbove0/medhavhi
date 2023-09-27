import React from "react";

export default function IntroPage() {
  return (
    <div className="py-10 md:pt-[120px] md:pb-[170px] lg:px-32 px-5 ">
      <div className="grid w-padding gap-12 md:gap-5 lg:gap-10 xl:gap-[110px] lg:grid-cols-2 relative ">
        <div className="flex flex-col gap-4 ">
          <h1 className="tracking-tight text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] xl:leading-[48px] font-bold  ">
            Medhavhi: School & Learning Management System
          </h1>
          <p className=" text-[#545454] text-sm sm:text-[15px] md:text-base sm:leading-[22.4px] tracking-tight ">
            Medhavhi, the all-in-one platform connecting school, students,
            teachers, and parents, simplifying education, communication, and
            collaboration for a seamless learning experience.
          </p>

          <div className="flex gap-2 sm:gap-3 mt-4 md:mt-10">
            <button className="rounded-lg capitalize shadow-md font-medium text-sm sm:text-sm md:text-base md:leading-[22px] tracking-wider px-8 py-[13px] bg-primaryColor text-white ">
              Get Started
            </button>
            <button className=" rounded-lg capitalize shadow-sm font-medium text-sm sm:text-sm md:text-base md:leading-[22px] tracking-wider px-8 py-[13px] bg-white text-primaryColor   ">
              Create School
            </button>
          </div>
          <div className=" flex items-center mt-1 sm:mt-2 gap-2 md:gap-4 ">
            <span className="  text-SilverColor text-[14px] md:text-sm leading-[18px] tracking-wide ">
              Also Available on
            </span>
            <div className="flex  ">
              <img
                className=" h-[32px] w-[32px] object-cover "
                src="https://download.logo.wine/logo/App_Store_(iOS)/App_Store_(iOS)-Logo.wine.png"
                alt="appstore"
              />
              <img
                className=" h-[32px] w-[32px] object-cover "
                src="https://download.logo.wine/logo/Google_Play/Google_Play-Icon-Logo.wine.png"
                alt="playstore"
              />
            </div>
          </div>
        </div>

        <div className=" relative h-60 sm:h-72  md:h-fit items-center overflow-hidden md:overflow-visible ">
          <div className="absolute -top-5 flex gap-2 md:gap-4 lg:gap-6  ">
            <div className="relative rounded-xl shadow-sm overflow-hidden h-[230px] w-[90px]  sm:h-[400px] sm:w-[192.67px] md:h-[350px] md:w-[150px] xl:h-[400px] xl:w-[192.67px]">
              <img
                className="h-full w-full object-fill"
                src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmobilepic.4b731067.png&w=1920&q=75"
                alt="mobile-app"
              />
            </div>
            <div className="relative rounded-xl shadow-sm overflow-hidden h-[230px] w-[420px]  sm:h-[400px] sm:w-[640px] md:h-[350px] md:w-[410px] xl:h-[400px] xl:w-[640px]">
              <img
                className="h-full w-full object-fill "
                src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffontmedhvhi.f4f65264.png&w=3840&q=75"
                alt="web-app"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
