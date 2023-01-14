import React from "react";

const NavButton = ({ Icon, title, size, addStyle }) => {
  return (
    <button
      className={`rounded-full  px-4 ${
        addStyle ? addStyle : "border border-light/40 py-2"
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
