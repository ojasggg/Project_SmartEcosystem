import React, { createContext, useState, useContext } from "react";

const DarkModeContext = createContext();
const DarkModeUpdateContext = createContext();

export const useTheme = () => {
  return useContext(DarkModeContext);
};

export const useThemeUpdate = () => {
  return useContext(DarkModeUpdateContext);
};

export const ThemeContext = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toogleDarkMode = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };
  return (
    <DarkModeContext.Provider value={darkTheme}>
      <DarkModeUpdateContext.Provider value={toogleDarkMode}>
        {children}
      </DarkModeUpdateContext.Provider>
    </DarkModeContext.Provider>
  );
};
