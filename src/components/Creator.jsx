import React from "react";
import { useTheme } from "./ThemeContext";

const Creator = () => {
  const darkMode = useTheme();
  return (
    <section className="mt-10 2xl:mt-20 overflow-hidden ">
      <h1
        className={`${
          darkMode ? "text-light/60" : "text-dark/60"
        } text-right max-md:text-center text-sm font-medium`}
      >
        Created by - Ojash Gurung
      </h1>
    </section>
  );
};

export default Creator;
