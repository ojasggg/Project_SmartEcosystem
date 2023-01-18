import React from "react";

import { useTheme, useThemeUpdate } from "./ThemeContext";

import heroPic1 from "../assets/image/hero_photo1.png";
import heroPic2 from "../assets/image/hero_photo2.png";

const Hero = () => {
  const darkMode = useTheme();
  const toggleDarkMode = useThemeUpdate();
  return (
    <section className="max-md:w-screen flex max-md:flex-col-reverse max-md:justify-center mb-10 2xl:mb-20 overflow-hidden">
      <div className="flex-1 max-md:w-full max-md:flex max-md:flex-col gap-4 max-md:justify-center max-md:items-center xl:max-w-[50%] 2xl:max-w-[50%] xl:mt-[160px] 2xl:mt-[360px] overflow-hidden z-10">
        <h1
          className="font-semibold leading-[58px] text-[44px] 2xl:text-[56px] 2xl:leading-[70px] max-md:text-center max-md:leading-tight max-md:text-[40px]"
          data-aos="fade-up"
          data-aos-mirror="true"
        >
          Enjoy the new <br /> smart Ecosystem
        </h1>
        <div
          className={`flex items-center p-1 2xl:p-2  ${
            darkMode
              ? "bg-gradient-to-r from-primary to-[#35B6F3]"
              : "bg-black/40"
          }  2xl:h-10 2xl:w-20 w-16 h-8 rounded-full xl:my-4 2xl:my-6 2xl:mb-12 overflow-hidden cursor-pointer `}
          data-aos="fade-left"
          onClick={toggleDarkMode}
        >
          <div
            className={`${
              darkMode
                ? "translate-x-8 transition-all delay-200 ease-linear"
                : "translate-x-[-8] transition-all delay-200 ease-linear"
            } bg-white h-6 w-6 2xl:h-8 2xl:w-8 rounded-full`}
          ></div>
        </div>

        <div
          className={`flex justify-between gap-4 leading-normal text-sm 2xl:text-[16px] ${
            darkMode ? "text-white/40" : "text-dark"
          } max-md:text-[12px] max-md:w-screen max-md:ml-4 max-md:mt-6 overflow-hidden`}
        >
          <p data-aos="fade-left">
            Control appliances, thermostats, lights <br /> and other devices
            remotely using a <br />
            smartphone or tablet through an internet <br /> connection
          </p>
          <p data-aos="fade-left" data-aos-duration="1200">
            Smart home technology provides <br /> homeowners with convenience
            and cost <br /> savings
          </p>
        </div>
      </div>
      <div className="relative m-4 mt-24 xl:max-w-[50%] 2xl:max-w-[50%] max-md:w-full z-10">
        <img
          src={heroPic1}
          alt="hero-image"
          className="xl:mt-[-60px] w-[90%] max-md:w-[500px] imgAnimation"
          data-aos="fade-up"
          data-aos-duration="1200"
        />
        <img
          src={heroPic2}
          alt="hero-image"
          className="absolute top-0 left-[-20px] xl:mt-[-60px] w-full max-md:w-screen  imgAnimation2"
          data-aos="fade-up"
          data-aos-duration="1700"
        />
      </div>
    </section>
  );
};

export default Hero;
