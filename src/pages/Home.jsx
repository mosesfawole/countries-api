import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import Lists from "../components/Lists";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?sort_by=asc(name)"
    );
    const data = await res.json();
    setCountries(data);
  };

  const searchCountry = async (term) => {
    if (term.length < 1) return;
    const res = await fetch(`https://restcountries.com/v3.1/name/${term}`);
    const data = await res.json();
    setCountries(data);
  };

  const filterByRegion = async (region) => {
    if (region.length === "") return;
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}
        `);
    const data = await res.json();
    setCountries(data);
  };
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`bg-gray-100 dark:bg-gray-800 dark:text-white
       ${darkMode && "dark"}`}
    >
      <div className="shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
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
      <div className="flex container mx-auto mb-16">
        <FaSearch className="my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400" />
        <input
          type="text"
          placeholder="Search for a country"
          onChange={(term) => searchCountry(term.target.value)}
          className="pl-10 p-2 shadow-md rounded-md w-1/3 dark:bg-gray-200"
        />
        <select
          className=" ml-auto
         my-2
         p-2
         shadow-md
         rounded-md
         font-medium
         dark:bg-gray-200"
          onChange={(term) => filterByRegion(term.target.value)}
        >
          <option>Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="grid gap-16 md:grid-cols-4 grid-rows-3 pl-10 p-2 dark:text-white">
        {countries.map((country, index) => (
          <Link to="/details" key={index}>
            <Lists
              title={country.name.common}
              image_url={country.flags.png}
              population={country.population}
              region={country.region}
              capital={country.capital}
              language={country.languages}
              coatOfArms={country.coatOfArms}
              //   currency={country.currencies[0].name}}}
              //   currencySymbol={country.currencies.symbol}
            ></Lists>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
