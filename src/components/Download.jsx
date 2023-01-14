import React from "react";
import NavButton from "./NavButton";

import { IoIosAppstore } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";

const Download = () => {
  return (
    <section className="flex my-28 2xl:my-60 justify-between mb-0 2xl:mb-0">
      <div className="flex flex-col gap-8 w-[50%]">
        <h1 className="font-medium text-6xl 2xl:text-6xl leading-tight 2xl:leading-tight">
          Make your <br /> living space <br /> better now
        </h1>
        <p className="text-lg 2xl:text-xl 2xl:leading-normal leading-tight text-white/40">
          download the application in the App <br /> store or Google store and
          create <br />
          comfort in your home with{" "}
          <span className="text-primary/80 font-medium">DOM.</span>
        </p>
        <p className="text-lg font-medium">Download app</p>
        <div className="flex gap-4">
          <NavButton
            title={"App store"}
            Icon={IoIosAppstore}
            addStyle={"bg-white/20 border-none py-3 px-7 text-lg"}
          />
          <NavButton
            title={"Google play"}
            Icon={FaGooglePlay}
            addStyle={"bg-white/20 border-none py-3 px-7 text-lg"}
            size={14}
          />
        </div>
      </div>
      <div className="bg-demo_img rounded-xl bg-cover h-[500px] w-[600px] 2xl:h-[600px] 2xl:w-[700px]"></div>
    </section>
  );
};

export default Download;
