import React from "react";

const Lists = ({ title, image_url, population, region, capital, language }) => {
  return (
    <div className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
      <img
        src={image_url}
        alt={title}
        loading="lazy"
        className="h-1/2 w-full rounded-tl-lg rounded-tr-lg "
      />
      <div className="p-4 text-black">
        <h3 className="font-bold mb-4">{title}</h3>
        <p className="text-xs font-bold">
          Population :{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            {population}
          </span>
        </p>
        <p className="text-xs font-bold">
          Capital :{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            {capital}
          </span>
        </p>
        <p className="text-xs font-bold">
          Region :{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            {region}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Lists;
