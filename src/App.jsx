import React from "react";
import {
  Demonstration,
  DemoVideo,
  Discover,
  Download,
  Gadgets,
  Hero,
  Navbar,
} from "./components";
import pendantLight from "./assets/image/pendantLight2.png";

const App = () => {
  return (
    <>
      <div className="xl:max-w-[1200px] 2xl:max-w-[1400px]  m-auto">
        <div>
          <Navbar />
        </div>
        <img
          src={pendantLight}
          alt="bgLight"
          className="absolute 2xl:top-[-40px] 2xl:left-[360px] 2xl:w-[300px] xl:w-[200px] xl:top-[0] xl:left-[250px]"
        />
        <div className="absolute 2xl:w-10 2xl:h-12 xl:w-6 xl:h-8 xl:top-[210px] xl:left-[340px] bg-light blur-[1px] rounded-full 2xl:top-[264px] 2xl:left-[492px] z-[-1]"></div>
        <div className="absolute blur-xl 2xl:top-[270px] 2xl:left-[264px] xl:top-[190px] xl:left-[150px] z-[-1] ">
          <div className="pendant_light bg-white blur-2xl opacity-30 xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[600px] animate-flicker"></div>
        </div>
      </div>

      <div className="xl:max-w-[1200px] 2xl:max-w-[1400px]  m-auto">
        <Hero />
        <Discover />
        <DemoVideo />
      </div>
      <Demonstration />
      <div className="xl:max-w-[1200px] 2xl:max-w-[1400px] m-auto my-28 2xl:my-40">
        <Gadgets />
        <Download />
      </div>
    </>
  );
};

export default App;
