import React from "react";
import { IoIosAppstore } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";

import { navlinks } from "../constants/navitems";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <navbar className="flex justify-between items-start xl:mt-6 2xl:mt-10">
      <ul className="flex flex-col gap-2 items-start font-medium text-sm">
        {navlinks.map(({ title, active }, index) => (
          <li
            key={index}
            className={`${active ? "text-white" : "text-white/40"}`}
          >
            <a href="#">{title}</a>
          </li>
        ))}
      </ul>
      <h1 className="font-bold text-[24px] ml-20">DOM.</h1>
      <div className="flex gap-2">
        <NavButton Icon={IoIosAppstore} title={"App store"} />
        <NavButton Icon={FaGooglePlay} size={14} title={"Play store"} />
      </div>
    </navbar>
  );
};

export default Navbar;
