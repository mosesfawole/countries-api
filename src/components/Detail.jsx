import React from "react";
import { motion } from "framer-motion";
const Detail = ({
  nativeName,
  image_url,
  title,
  population,
  region,
  subregion,
  capital,
  currencies,
  domain,
  languages,
}) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container flex flex-col  md:flex-row mx-auto p-11 pl-0 pr-0 h-full  md:items-center "
    >
      <img
        src={image_url}
        loading="lazy"
        alt={title}
        className="w-full sm:w-1/2  md:w-1/2 md:pr-8"
      />
      <div className="p-8 pl-0 text-left">
        <h2 className="font-bold text-2xl mb-8 dark:text-gray-100">{title} </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-x-20 gap-y-4 dark:text-gray-100">
          <p className="font-semibold">
            Native Name:{" "}
            <span className="dark:text-gray-300 text-gray-700 text-sm">
              {nativeName}
            </span>
          </p>
          <p className="font-semibold">
            Population:{" "}
            <span className="dark:text-gray-300 text-gray-700 text-sm">
              {population.toLocaleString("en-US")}
            </span>
          </p>
          <p className="font-semibold">
            Region:{" "}
            <span className="dark:text-gray-300 text-gray-700 text-sm">
              {region}
            </span>
          </p>
          <p className="font-semibold">
            Sub Region:{" "}
            <span className="dark:text-gray-300 text-gray-700 text-sm">
              {subregion}
            </span>
          </p>
          <p className="font-semibold">
            Capital:{" "}
            <span className="dark:text-gray-300 text-gray-700 text-sm">
              {capital}
            </span>
          </p>
          <p className="font-semibold">
            Top Level Domain:{" "}
            <span className="dark:text-gray-300 text-gray-700 text-sm">
              {domain}
            </span>
          </p>
          <p className="font-semibold">
            Currencies:{" "}
            <span className="dark:text-gray-300 text-gray-700 text-sm">
              {currencies}
            </span>
          </p>
          <p className="font-semibold">
            Languages:{" "}
            <span className="dark:text-gray-300 text-gray-700 text-sm">
              {`${languages} `}
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Detail;
