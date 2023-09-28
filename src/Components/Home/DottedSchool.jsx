import React from "react";

export default function DottedSchool() {
  //  array of objects with data for each item
  const steps = [
    {
      id: 1,
      title: "Submit a <br/> form",
    },
    {
      id: 2,
      title: "Get connected <br> with us",
    },
    {
      id: 3,
      title: "Get your school <br> approved",
    },
    {
      id: 6,
      title: "Now,Teach, Learn &amp; Connect <br> Effortlessly.",
    },
    {
      id: 5,
      title: "Enroll students, teachers,<br> and parents.",
    },
    {
      id: 4,
      title: "Setup your <br> School &amp; Board",
    },
  ];

  return (
    <div>
      <div className="w-full lg:px-32 px-5">
        <p className="mb-2 md:mb-3 font-semibold text-primaryColor text-xs sm:text-sm lg:text-base leading-[22px] tracking-wide">
          Create School
        </p>
        <h1 className="mb-5 md:mb-8 font-bold tracking-wide text-2xl md:text-3xl lg:text-4xl lg:leading-[43px]">
          How it works
        </h1>
        <div className="mb-8 sm:mb-10 md:mb-[70px]">
          <button
            type="button"
            className="rounded-lg capitalize font-medium text-xs sm:text-sm md:text-base md:leading-[22px] tracking-wider px-8 py-[13px] bg-primaryColor text-white "
          >
            Create School
          </button>
        </div>
        <div className="w-full ml-10 sm:ml-0 border-l-2 sm:border-l-0 border-gray-700 border-dashed relative sm:grid grid-cols-3">
          <div className="lg:pr-6 sm:absolute w-full">
            <div className=" w-full h-full sm:h-[123px] hidden sm:flex md:h-[203px] rounded-r-full sm:border-l-0 sm:border-y-2 sm:border-r-2 border-gray-700 border-dashed mr-40"></div>
          </div>
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative h-10 sm:h-0 w-full mb-8 sm:mb-[120px] md:mb-[200px]"
            >
              <div>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-0 sm:h-3 absolute -left-[7px]  sm:left-20 lg:left-[130px] xl:left-[165px] text-gray-300  sm:!rotate-270 top-10 sm:-top-[4.5px]   "
                >
                  <path
                    d="m1 9 4-4-4-4"
                    stroke="#30323D"
                    strokeWidth="1.333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="-left-[19px] sm:-left-2 absolute flex sm:flex-col items-center sm:items-start gap-5 sm:gap-0 -top-2 md:-top-4 lg:-top-5">
                <div className="w-fit ml-2 lg:ml-0 h-fit lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center">
                  <div className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-black flex items-center justify-center text-white text-xs md:text-base lg:text-xl leading-[24px] mb-1 md:mb-3">
                    {step.id}
                  </div>
                </div>
                <div
                  className="text-xs md:text-[15px] lg:text-[18px] pl-2 sm:leading-5 md:leading-[25.2px] font-thin text-[#545454] tracking-wide"
                  dangerouslySetInnerHTML={{ __html: step.title }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
