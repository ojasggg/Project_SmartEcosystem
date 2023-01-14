import React from "react";

import { BsArrowRight } from "react-icons/bs";
import { gadgets } from "../constants/gadgets";

const Gadgets = () => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-center font-medium text-4xl 2xl:text-6xl leading-tight mb-20">
        Combine a perfect <br /> ecosystem for your home
      </h1>
      <div className="flex justify-end">
        <button className="flex bg-light w-20 h-20 rounded-full items-center justify-center text-black">
          <BsArrowRight size={20} />
        </button>
      </div>
      <div className="flex gap-4 overflow-hidden">
        {gadgets.map(({ image, title, brand }, index) => (
          <div
            className="flex flex-col bg-white items-start gap-6 text-black min-w-fit p-8 rounded-xl "
            key={index}
          >
            <img
              src={image}
              alt="Speaker"
              className="xl:w-[200px] 2xl:w-[300px]"
            />
            <h4
              className="font-medium leading-tight text-xl
            2xl:text-2xl "
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
