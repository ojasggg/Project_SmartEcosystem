import React from "react";
import { useTheme } from "./ThemeContext";

const NavButton = ({ Icon, title, size, addStyle }) => {
  const darkMode = useTheme();
  return (
    <button
      className={`flex justify-center rounded-full px-4 border ${
        addStyle
          ? addStyle
          : darkMode
          ? "border border-light/40 py-2"
          : "border border-dark/40 py-2"
      }`}
    >
      <a href="#" className="flex items-center gap-2">
        {Icon && <Icon size={size ? size : 18} />}
        <p className={`text-[14px] font-medium`}>{title}</p>
      </a>
    </button>
  );
};

export default NavButton;
