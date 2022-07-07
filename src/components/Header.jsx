import React, { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";
const Header = () => {
  const { darkMode, setDarkMode, theme, setTheme } = useStateContext();
  const toggleMode = () => {
    setDarkMode(!darkMode);
    setTheme(!theme);
    localStorage.setItem("mode", darkMode);
  };
  useEffect(() => {
    const currentMode = localStorage.getItem("mode");
    if (currentMode === "true") {
      setDarkMode(!darkMode);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white">
      <div className="flex container mx-auto">
        <Link to="/" reloadDocument>
          <h1 className="font-bold text-xl cursor-pointer">
            Where in the world?
          </h1>
        </Link>
        <div className="ml-auto font-medium ">
          <button className="flex items-center " onClick={() => toggleMode()}>
            {darkMode === false ? <FaSun /> : <FaMoon />}
            {theme === true ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
