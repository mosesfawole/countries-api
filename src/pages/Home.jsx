import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Lists from "../components/Lists";
import { motion } from "framer-motion";

import { useStateContext } from "../contexts/ContextProvider";
import Spinner from "../components/Spinner";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const { darkMode, isLoading, setIsLoading } = useStateContext();

  useEffect(() => {
    getCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCountries = async () => {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?sort_by=dsc(name)"
    );
    const data = await res.json();
    setCountries(data);

    setIsLoading(false);
  };

  const searchCountry = async (term) => {
    if (term.length < 1) return;
    const res = await fetch(`https://restcountries.com/v3.1/name/${term}`);
    const data = await res.json();
    if (data.length > 0) {
      setIsLoading(true);
    } else {
      setCountries(data);
      setIsLoading(false);
    }
  };

  const filterByRegion = async (region) => {
    if (region.length === "") return;
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}
        `);
    const data = await res.json();

    setCountries(data);
    setIsLoading(false);
  };

  return (
    <div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-100 dark:bg-gray-800 dark:text-white
       ${darkMode && "dark"}`}
    >
      <Header />
      <div className="flex items-center flex-col dark:bg-gray-800 md:flex-row p-6 md:p-10">
        <div className="relative w-80">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            className=" border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search for country"
            onChange={(e) => searchCountry(e.target.value)}
          />
        </div>
        <select
          className=" mr-auto
         my-2
         md:mr-0
         p-4
 md:ml-auto
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
      {!isLoading && countries.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">
          <Spinner />
        </h1>
      )}

      {isLoading ? (
        <Spinner />
      ) : (
        <motion.div
          className="grid gap-16 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 md:grid md:gap-16 grid-rows-3 p-8 md:p-4 dark:text-white dark:bg-gray-800"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {countries.map((country, index) => (
            <Link to={`/details/${country.name.common}`} key={index}>
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
              />
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Home;
