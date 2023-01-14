import React from "react";

const Hero = () => {
  return (
    <section className="w-full flex mb-10 2xl:mb-20">
      <div className="flex-1 max-w-[60%] xl:mt-[200px] 2xl:mt-[360px]">
        <h1 className="font-semibold leading-[58px] text-[44px] 2xl:text-[56px] 2xl:leading-[70px] mb-2">
          Enjoy the new <br /> smart Ecosystem
        </h1>
        <div className="flex items-center p-1 2xl:p-2 justify-end bg-gradient-to-r from-primary to-[#35B6F3] 2xl:h-10 2xl:w-20 w-16 h-8 rounded-full xl:my-4 2xl:my-6 2xl:mb-12">
          <div className="bg-white h-6 w-6 2xl:h-8 2xl:w-8 rounded-full"></div>
        </div>

        <div className="flex justify-between  leading-normal text-sm 2xl:text-[16px] text-white/40">
          <p>
            Control appliances, thermostats, lights <br /> and other devices
            remotely using a <br />
            smartphone or tablet through an internet <br /> connection
          </p>
          <p>
            Smart home technology provides <br /> homeowners with convenience
            and cost <br /> savings
          </p>
        </div>
      </div>
      <div className="max-w-[50%]">
        <img src="" alt="hero-image" />
      </div>
      <p className="absolute font-bold 2xl:text-[300px] xl:text-[200px] 2xl:opacity-10 xl:opacity-20 leading-none top-[25%] left-[-20px] tracking-normal z-[-1]">
        EASY
      </p>
      <p className="absolute font-bold 2xl:text-[300px] xl:text-[200px] 2xl:opacity-10 xl:opacity-20 leading-none top-[55%] right-[0] tracking-normal z-[-1]">
        SMART
      </p>
    </section>
  );
};

export default Hero;
