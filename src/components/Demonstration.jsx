import React from "react";

const Demonstration = () => {
  return (
    <section
      className="relative my-28 2xl:my-40 p-0 bg-using_phone 2xl:min-h-[800px] xl:min-h-[600px] max-md:min-h-[500px] max-md:w-screen bg-no-repeat object-cover bg-cover overflow-hidden"
      data-aos="fade-up"
      data-offset="400"
    >
      <div className="absolute top-[25%] right-[10%] max-md:top-20 max-md:right-10 text-white overflow-hidden">
        <h1
          className="font-semibold 2xl:text-6xl xl:text-4xl max-md:text-4xl leading-tight overflow-hidden"
          data-aos="fade-right"
          data-offset="400"
          data-aos-duration="1200"
        >
          All controls, <br /> one app
        </h1>
        <p
          className="2xl:text-xl xl:text-lg mt-8 mb-6 max-md:mb-6 max-md:mt-4 leading-tight max-md:font-medium"
          data-aos="fade-left"
          data-offset="400"
          data-aos-duration="1400"
        >
          Just take your smartphone <br /> and control your home ecosystem
          <br />
          wherever you are
        </p>
        <button
          className="bg-light text-black py-4 xl:text-sm px-4 2xl:px-6 2xl:text-lg border-dark rounded-full hover:scale-110 transition max-md:py-3"
          data-aos="fade-left"
          data-offset="400"
          data-aos-duration="1600"
        >
          Learn how it works
        </button>
      </div>
    </section>
  );
};

export default Demonstration;
