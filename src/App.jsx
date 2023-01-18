import React, { useEffect } from "react";

// Import aos
import Aos from "aos";
import "aos/dist/aos.css";

import {
  Creator,
  Demonstration,
  DemoVideo,
  Discover,
  Download,
  Gadgets,
  Hero,
  Navbar,
} from "./components";
import pendantLight from "./assets/image/pendantLight2.png";

import { useTheme } from "./components/ThemeContext";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
    });
  });
  const darkMode = useTheme();
  return (
    <div
      className={`${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      } transition-all duration-300 ease-in`}
    >
      <div className="relative xl:max-w-[1200px] 2xl:max-w-[1400px] md:w-screen m-auto overflow-hidden">
        <Navbar />
        <Hero />
        <Discover />
        <DemoVideo />
        <img
          src={pendantLight}
          alt="bgLight"
          className="absolute max-md:top-[-10px] max-md:w-[140px] max-md:left-[30%] 2xl:top-[-40px] 2xl:left-[360px] 2xl:w-[300px] xl:w-[200px] xl:top-[0] xl:left-[250px] overflow-hidden z-10"
        />
        <div
          className={`${
            darkMode ? "bg-light" : "bg-orange-400"
          } absolute max-md:w-4 max-md:h-6 max-md:top-[134px] max-md:left-[47%] 2xl:w-10 2xl:h-12 xl:w-6 xl:h-8 xl:top-[210px] xl:left-[340px]  blur-[1px] rounded-full 2xl:top-[264px] 2xl:left-[492px] z-1 overflow-hidden`}
        ></div>

        <div className="absolute blur-xl max-md:top-[110px] max-md:left-[21%] 2xl:top-[270px] 2xl:left-[264px] xl:top-[190px] xl:left-[150px] z-1 overflow-hidden">
          <div
            className={`${
              darkMode ? "bg-white" : "bg-orange-400"
            } pendant_light bg-white blur-2xl opacity-30 max-md:w-[200px] max-md:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[600px] animate-flicker`}
          ></div>
        </div>
      </div>
      {/* Background Easy Smart */}
      <div className="absolute max-md:top-[22%] top-[25%] max-md:left-0 left-[-20px] z-1 overflow-hidden">
        <p
          className={`${
            darkMode ? "text-light" : "text-dark"
          } font-bold max-md:text-[90px] max-md:left-2
       max-md:tracking-tighter 2xl:text-[300px] xl:text-[260px] 2xl:opacity-10 opacity-20 leading-none  tracking-normal overflow-hidden `}
        >
          EASY
        </p>

        <p
          className={`${
            darkMode ? "text-light" : "text-dark"
          } font-bold text-right max-md:text-[90px]
      max-md:tracking-tighter 2xl:text-[300px] xl:text-[260px] 2xl:opacity-10 opacity-20 leading-none tracking-normal overflow-hidden w-screen`}
        >
          SMART
        </p>
      </div>
      <div className="lg:w-full xl:w-full 2xl:w-full md:w-full max-sm:w-full">
        <Demonstration />
      </div>
      <div className="xl:max-w-[1200px] 2xl:max-w-[1400px] sm:max-w-[380px] m-auto pb-10">
        <Gadgets />
        <Download />
        <Creator />
      </div>
    </div>
  );
};

export default App;
