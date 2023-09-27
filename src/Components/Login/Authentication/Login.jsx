import React, { useEffect, useState } from "react";

export default function Login() {
  const [showFirstSection, setShowFirstSection] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFirstSection(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showFirstSection]);
  return (
    <div>
      <div class="w-full">
        {showFirstSection && (
          <div class="w-full relative h-[320px] overflow-hidden xs:w-[500px] xs:h-[400px] md:w-[700px] md:h-[480px] lg:w-[400px] lg:h-[480px] xl:w-[480px] xl:h-[480px] bg-[#E2E8F0] rounded-2xl">
          <div class="flex gap-1 xs:gap-2 md:gap-4 h-full justify-end items-center flex-col">
            <div class="w-[200px] xs:w-[250px] animate-left md:w-[290px] h-[190px] xs:h-[240px] md:h-[280px]">
              <img
                src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDoubt1.97336579.png&w=1920&q=75"
                alt="Phase supply"
              />
            </div>
            <div class="flex animate-upward flex-col gap-1">
              <div class="h-[55px] xs:h-[65px] md:h-[80px] w-[160px] xs:w-[20px] md:w-[240px] ">
                <img
                  src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FReply1.9c49b133.png&w=1920&q=75"
                  alt="lorem"
                />
              </div>
              <div class="h-[55px] xs:h-[65px] md:h-[80px] transform duration-1000 w-[160px] xs:w-[200px] md:w-[240px] ">
                <img
                  src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FReply2.7bd09fa7.png&w=1920&q=75"
                  alt="lorem2"
                />
              </div>
            </div>
          </div>
        </div>
        )}

        {!showFirstSection && (
          <div class="w-full relative h-[320px] overflow-hidden xs:w-[500px] xs:h-[400px] md:w-[700px] md:h-[480px] lg:w-[400px] lg:h-[480px] xl:w-[480px] xl:h-[480px] bg-[#E2E8F0] rounded-2xl">
          <div class="flex h-full gap-1 xs:gap-2 justify-center items-center flex-col">
            <div class="xs:w-[290px] w-[250px] animate-upward h-[65px] xs:h-[72px]">
              <img src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStudent1.61039123.png&w=2048&q=75" alt="physics" />
            </div>
            <div class="h-[65px] xs:h-[72px] animate-upward w-[250px] -bottom-[250px] xs:w-[290px] ">
              <img src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStudent2.7ed75b15.png&w=1920&q=75" alt="maths" />
            </div>
            <div class="h-[65px] xs:h-[72px] animate-upward w-[250px] -bottom-[250px] xs:w-[290px] ">
              <img src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStudent3.ac66687e.png&w=1920&q=75" alt="chemistry" />
            </div>
          </div>
        </div>
        )}
      </div>

    


    </div>
  );
}
