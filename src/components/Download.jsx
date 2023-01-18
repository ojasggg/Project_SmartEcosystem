import React from "react";
import NavButton from "./NavButton";

import { IoIosAppstore } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";

import demoImg1 from "../assets/image/demo_image.png";
import demoImg2 from "../assets/image/demo_image2.png";
import { useTheme } from "./ThemeContext";

const Download = () => {
  const darkMode = useTheme();
  return (
    <section className="flex max-md:flex-col max-md:w-screen max-md:items-center mt-28 2xl:mt-60  justify-between overflow-hidden">
      <div className="flex flex-col gap-8 w-[50%] max-md:w-screen overflow-hidden">
        <h1
          className="font-medium text-6xl 2xl:text-6xl leading-tight 2xl:leading-tight max-md:text-3xl max-md:text-center overflow-hidden"
          data-aos="fade-right"
          data-offset="400"
        >
          Make your <br /> living space <br /> better now
        </h1>
        <p
          className={`${
            darkMode ? "text-light/60" : "text-dark/60"
          } max-md:text-sm xl:text-lg 2xl:text-xl 2xl:leading-normal leading-tight  max-md:text-center`}
          data-aos="fade-left"
          data-offset="400"
        >
          download the application in the App <br /> store or Google store and
          create <br />
          comfort in your home with{" "}
          <span className="text-primary/80 font-medium">DOM.</span>
        </p>
        <p
          className="text-lg font-medium max-md:text-center max-md:text-sm"
          data-aos="fade-left"
          data-offset="400"
        >
          Download app
        </p>
        <div className="flex max-md:w-screen max-md:justify-center gap-4 max-md:gap-2 max-md:pb-10 overflow-hidden">
          <div data-aos="fade-left" data-offset="400">
            <NavButton
              title={"App store"}
              Icon={IoIosAppstore}
              addStyle={`${
                darkMode ? "bg-light/20" : "bg-dark/20"
              }  border-none py-3 px-7 text-lg max-md:py-2`}
            />
          </div>
          <div data-aos="fade-left" data-offset="400" data-aos-duration="1200">
            <NavButton
              title={"Google play"}
              Icon={FaGooglePlay}
              addStyle={`${
                darkMode ? "bg-light/20" : "bg-dark/20"
              } border-none py-3 px-7 text-lg max-md:py-2`}
              size={14}
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-offset="400"
        data-aos-duration="1200"
        className="relative bg-[#C5C9CE] rounded-xl bg-cover h-[500px] w-[600px] 2xl:h-[600px] 2xl:w-[700px] overflow-hidden max-md:hidden"
      >
        <img
          src={demoImg1}
          alt="App demo1"
          className="w-[25%] rotate-[30deg]"
        />

        <img
          src={demoImg2}
          alt="App demo1"
          className="absolute bottom-[-30px] left-4 w-[25%] rotate-[30deg]"
        />

        <img
          src={demoImg1}
          alt="App demo1"
          className="absolute top-10 xl:left-36 2xl:left-44 w-[25%] rotate-[30deg]"
        />
        <img
          src={demoImg2}
          alt="App demo1"
          className="absolute 2xl:top-[-240px] xl:top-[-190px] xl:left-[47%] 2xl:left-[49%]  w-[25%] rotate-[30deg]"
        />
        <img
          src={demoImg1}
          alt="App demo1"
          className="absolute top-0 left-[57%] w-[25%] rotate-[30deg]"
        />
        <img
          src={demoImg2}
          alt="App demo1"
          className="absolute bottom-0 left-[34%] w-[25%] rotate-[30deg]"
        />
        <img
          src={demoImg2}
          alt="App demo1"
          className="absolute top-10 2xl:right-[-50px] xl:right-[-40px] w-[25%] rotate-[30deg]"
        />
        <img
          src={demoImg1}
          alt="App demo1"
          className="absolute bottom-[-40px] xl:right-24 2xl:right-28 w-[25%] rotate-[30deg]"
        />
      </div>
    </section>
  );
};

export default Download;
