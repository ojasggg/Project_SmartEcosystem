import React from "react";

import { BsArrowRight } from "react-icons/bs";
import { gadgets } from "../constants/gadgets";
import { useTheme } from "./ThemeContext";

const Gadgets = () => {
  const darkMode = useTheme();
  return (
    <section className="flex flex-col gap-4 overflow-hidden">
      <h1
        className="text-center font-medium max-md:text-2xl xl:text-4xl 2xl:text-6xl leading-tight mb-20 max-md:mb-12  max-md:w-screen"
        data-aos="fade-up"
        data-offset="400"
      >
        Combine a perfect <br /> ecosystem for your home
      </h1>
      <div className="flex max-md:w-screen justify-end overflow-hidden">
        <button
          className={`${
            darkMode ? "bg-light text-dark" : "bg-dark text-light"
          } flex w-20 h-20 max-md:w-16 max-md:h-16 rounded-full items-center justify-center`}
          data-aos="fade-up"
          data-offset="400"
        >
          <BsArrowRight size={20} />
        </button>
      </div>
      <div className="flex gap-4 overflow-hidden max-md:w-screen">
        {gadgets.map(({ image, title, brand }, index) => (
          <div
            className="flex flex-col justify-between bg-white items-start gap-10 max-md:gap-8 text-black p-8 rounded-xl"
            key={index}
            data-aos="fade-up"
            data-offset="400"
            data-aos-duration={`${800 + index * 300}`}
          >
            <div className="flex items-center justify-center h-[240px] w-[240px] max-md:h-[120px] max-md:w-[160px] mt-2">
              <img
                src={image}
                alt="Speaker"
                className="w-full object-cover"
                data-aos="fade-up"
                data-offset="400"
                data-aos-duration={`${1200 + index * 300}`}
              />
            </div>
            <h4
              className="font-medium leading-tight text-xl
            2xl:text-2xl max-md:text-lg"
            >
              {title} <br /> {brand}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gadgets;
