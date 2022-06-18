import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(<FaSun />);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`bg-gray-100 dark:bg-gray-800 dark:text-white ${
        darkMode && "dark"
      }`}
    >
      <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
        <div className="flex container mx-auto">
          <h1 className="font-bold text-xl">Where in the world?</h1>
          <div className="ml-auto font-medium ">
            <button className="flex items-center " onClick={() => toggleMode()}>
              DarkMode{" "}
              {darkMode === false ? <FaSun className="" /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
