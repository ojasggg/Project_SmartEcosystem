import React from "react";

import { BsArrowRight } from "react-icons/bs";
import { useTheme } from "./ThemeContext";

const Discover = () => {
  const darkMode = useTheme();
  return (
    <section className="my-28 2xl:my-40 h-fit overflow-hidden max-md:w-screen">
      <div className="flex justify-between max-md:w-screen max-md:flex-col overflow-hidden">
        <p
          className={`text-lg 2xl:text-2xl max-md:text-sm ${
            darkMode ? "text-light/60" : "text-dark/60"
          } max-md:text-center`}
          data-aos="fade-up"
          data-offset="400"
        >
          Discover new horizons <br /> of comfort
        </p>
        <div className="flex flex-col max-md:w-screen gap-4 2xl:gap-6 max-md:mt-4 overflow-hidden">
          <h2
            className="text-3xl leading-relaxed mt-0 max-md:text-center max-md:text-2xl max-md:leading-tight"
            data-aos="fade-right"
            data-offset="400"
          >
            A smart home app will monitor and control <br /> home attributes
            such as lighting, climate, <br /> entertainment systems, and
            appliances.
          </h2>

          <div
            className={` max-md:flex max-md:w-screen max-md:justify-center overflow-hidden`}
          >
            <a
              href="#"
              className={`${
                darkMode
                  ? "border-light/40 text-light/60"
                  : "border-dark/40 text-dark/60"
              } flex w-fit gap-8 items-center py-3 border-b`}
              data-offset="400"
            >
              <p>Get more information about app</p>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-offset="400"
              >
                <BsArrowRight size={20} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
