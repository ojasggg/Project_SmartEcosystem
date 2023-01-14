import React from "react";

const Demonstration = () => {
  return (
    <section className="relative my-28 2xl:my-40 p-0 bg-using_phone 2xl:min-h-[800px] xl:min-h-[600px] max-w-full object-cover bg-no-repeat bg-cover">
      <div className="absolute top-[25%] right-[10%] text-dark">
        <h1 className="font-semibold 2xl:text-6xl xl:text-4xl leading-tight">
          All controls, <br /> one app
        </h1>
        <p className="2xl:text-xl xl:text-lg mt-8 mb-6 leading-tight">
          Just take your smartphone <br /> and control your home ecosystem
          <br />
          wherever you are
        </p>
        <button className="bg-transparent py-4 xl:text-sm  xl:px-4 2xl:px-6 2xl:text-lg border border-dark rounded-full hover:scale-105 transition hover:bg-dark hover:text-light hover:border-none">
          Learn how it works
        </button>
      </div>
    </section>
  );
};

export default Demonstration;
