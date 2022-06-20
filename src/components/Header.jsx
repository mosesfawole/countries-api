import React, { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import { useStateContext } from "../contexts/ContextProvider";
const Header = () => {
  useEffect(() => {
    const currentMode = localStorage.getItem("mode");
    if (currentMode === "true") {
      setDarkMode(!darkMode);
    } else {
      setDarkMode(darkMode);
    }
  }, []);
  const { darkMode, setDarkMode, theme, setTheme } = useStateContext();
  const toggleMode = () => {
    setDarkMode(!darkMode);
    setTheme(!theme);
    localStorage.setItem("mode", !darkMode);
  };
  return (
    <div className="shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white">
      <div className="flex container mx-auto">
        <h1 className="font-bold text-xl">Where in the world?</h1>
        <div className="ml-auto font-medium ">
          <button className="flex items-center " onClick={() => toggleMode()}>
            {darkMode === false ? <FaSun /> : <FaMoon />}
            {theme === true ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
