import React, { useContext, useState } from "react";
import { IoIosAppstore } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

import { navlinks } from "../constants/navitems";
import { useTheme } from "./ThemeContext";

import NavButton from "./NavButton";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const darkMode = useTheme();
  const handleChange = () => {
    setOpenNav((prevState) => !prevState);
  };
  return (
    <>
      <nav className="flex relative justify-between items-start max-sm:items-center max-md:w-screen xl:pt-6 2xl:pt-10 max-sm:m-0 max-sm:p-4">
        <ul className="flex flex-col gap-2 items-start font-medium text-sm max-sm:hidden ">
          {navlinks.map(({ title, active }, index) => (
            <li
              key={index}
              className={`${
                darkMode
                  ? active
                    ? "text-light"
                    : "text-light/60"
                  : active
                  ? "text-dark"
                  : "text-dark/60"
              }`}
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-duration={`${800 + index * 100}`}
            >
              <a href="#">{title}</a>
            </li>
          ))}
        </ul>

        <h1
          className="font-bold text-[24px] ml-20 max-sm:ml-0"
          data-aos="fade-down"
          data-aos-offset="400"
        >
          DOM.
        </h1>
        <div
          className={`${!openNav ? "" : "hidden"} sm:hidden`}
          onClick={handleChange}
        >
          <HiOutlineMenuAlt1 size={30} />
        </div>
        <div className="flex gap-2 max-sm:hidden">
          <div data-aos="fade-left" data-aos-offset="400">
            <NavButton Icon={IoIosAppstore} title={"App store"} />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-offset="400"
          >
            <NavButton Icon={FaGooglePlay} size={14} title={"Play store"} />
          </div>
        </div>
        <div
          className={`absolute top-0 ${
            openNav ? "right-0" : "-right-full"
          } h-screen bg-gradient-to-b from-primary to-[#35B6F3] w-8/12 z-40 transition-all duration-300 ease-in md:hidden`}
        >
          <div className="flex justify-end p-5 text-2xl" onClick={handleChange}>
            <IoCloseSharp size={30} color="white" />
          </div>
          <ul className="flex flex-col gap-2 items-center font-medium text-lg mt-6">
            {navlinks.map(({ title, active }, index) => (
              <li
                key={index}
                className={`${
                  active ? "text-white bg-white/20 p-2" : "text-white/40"
                } w-full text-center`}
              >
                <a href="#">{title}</a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 sm:hidden p-10">
            <NavButton Icon={IoIosAppstore} title={"App store"} />

            <NavButton Icon={FaGooglePlay} size={14} title={"Play store"} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
