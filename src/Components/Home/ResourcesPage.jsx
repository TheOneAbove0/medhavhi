import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ResourcesPage() {
  const [showFirstSection, setShowFirstSection] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFirstSection((prevShowFirst) => !prevShowFirst);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showFirstSection]);
  return (
    <div className=" py-5 md:py-20 w-full  lg:px-32 px-5 ">
      <div className=" items-center w-full h-full flex flex-col-reverse gap-10  xl:gap-[120px] lg:flex-row-reverse ">
        <div className=" flex w-full sm:w-fit items-center ">
          <div class="w-full">
          <div class="w-full">
        {showFirstSection && (
          <div class="w-full relative h-[320px] overflow-hidden xs:w-[500px] xs:h-[400px] md:w-[700px] md:h-[480px] lg:w-[400px] lg:h-[480px] xl:w-[480px] xl:h-[480px] bg-[#E2E8F0] rounded-2xl">
            <div class="flex justify-end items-center flex-col">
              <div class=" absolute md:top-[60px] top-[30px] w-[250px] xs:w-[290px] animate-left mt-auto h-[120px] md:h-[150px]">
                <img
                  src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FApplications.a6900936.png&w=1920&q=75"
                  alt="application"
                />
              </div>
              <div class="h-[500px] absolute overflow-hidden animate-upward -bottom-[360px] xs:-bottom-[300px] md:-bottom-[250px] w-[250px] xs:w-[290px] ">
                <img
                  src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAttendance.6b480ff1.png&w=1920&q=75"
                  alt="class"
                />
              </div>
            </div>
          </div>
        )}

        {!showFirstSection && (
          <div class="w-full relative h-[320px] overflow-hidden xs:w-[500px] xs:h-[400px] md:w-[700px] md:h-[480px] lg:w-[400px] lg:h-[480px] xl:w-[480px] xl:h-[480px] bg-[#E2E8F0] rounded-2xl">
            <div class="flex justify-end items-center flex-col">
              <div class=" absolute top-[20px] xs:top-[30px] md:top-[60px] animate-left w-[290px] mt-auto h-[120px] xs:h-[150px]">
                <img
                  src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfrogCard.a3fc8221.png&w=1080&q=75"
                  alt="aloksir"
                />
              </div>
              <div class="h-[500px] absolute overflow-hidden animate-upward -bottom-[350px] xs:-bottom-[290px] md:-bottom-[250px] w-[290px] ">
                <img
                  src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsavadhan.81302abf.png&w=1920&q=75"
                  alt="Suggestion"
                />
              </div>
            </div>
          </div>
        )}
      </div>
          </div>
        </div>

        <div className=" w-full flex flex-col ">
          <p className="text-primaryColor font-semibold tracking-wide text-xs sm:text-sm md:text-base md:leading-[22px] mb-2 md:mb-4">
            Class & resource management
          </p>
          <div className=" text-2xl sm:text-3xl md:text-4xl md:leading-[43.2px] tracking-wide font-bold mb-4 md:mb-6 ">
            {" "}
            Streamlining Operations with Efficient Class and Resource Management{" "}
          </div>
          <div className=" flex w-full flex-col gap-2 mt-6 ">
            <h1 className=" font-bold text-xs sm:text-sm md:text-base tracking-wide text-[#090914] leading-5 md:leading-[22px] ">
              Assignments
            </h1>
            <p className=" text-xs sm:text-sm md:text-base tracking-wide text-[#545454] leading-5 md:leading-[22px] ">
              Seemlessly create, distribute, and evaluate assignments, fostering
              a productive and engaging learning environment.
            </p>
            <div className=" w-1/2 bg-[#F2F6F6] rounded-full h-1 ">
              <div className=" w-full bg-primaryColor rounded-full h-1 "> </div>
            </div>
          </div>

          <div className=" flex w-full flex-col gap-2 mt-6 ">
            <h1 className=" font-bold text-xs sm:text-sm md:text-base tracking-wide text-[#090914] leading-5 md:leading-[22px] ">
              Videos & Resources
            </h1>
            <p className=" text-xs sm:text-sm md:text-base tracking-wide text-SilverColor leading-5 md:leading-[22px] ">
              Effortlessly organize, store, and distribute videos, documents,
              and other learning resources, creating a dynamic and engaging
              learning environment.
            </p>
            <div className=" w-1/2 bg-[#F2F6F6] rounded-full h-1 ">
              <div className=" w-full bg-primaryColor rounded-full h-1 "> </div>
            </div>
          </div>

          <div className=" flex w-full flex-col gap-2 mt-6 ">
            <h1 className=" font-bold text-xs sm:text-sm md:text-base tracking-wide text-[#090914] leading-5 md:leading-[22px] ">
              Doubts Clearance
            </h1>
            <p className=" text-xs sm:text-sm md:text-base tracking-wide text-SilverColor leading-5 md:leading-[22px] ">
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
            <Link to="/register">
            Start Using
            </Link>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
