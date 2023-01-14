import React from "react";

import { BsArrowRight } from "react-icons/bs";

const Discover = () => {
  return (
    <section className="my-28 2xl:my-40 h-fit">
      <div className="flex justify-between">
        <p className="text-lg 2xl:text-2xl text-white/60">
          Discover new horizons <br /> of comfort
        </p>
        <div className="flex flex-col gap-4 2xl:gap-6">
          <h2 className="text-4xl leading-relaxed mt-0">
            A smart home app will monitor and control <br /> home attributes
            such as lighting, climate, <br /> entertainment systems, and
            appliances.
          </h2>

          <a
            href="#"
            class="flex w-fit gap-8 items-center py-3 border-b border-white/40 text-white/60"
          >
            <p>Get more information about app</p>
            <BsArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Discover;
