import React from "react";
import Header from "../components/Header";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";
const Details = () => {
  const { darkMode, isLoading, setIsLoading } = useStateContext();
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div
      className={`bg-gray-100 dark:bg-gray-800 dark:text-white
     ${darkMode && "dark"}`}
    >
      <Header />
      <div className="container mx-auto mb-16">
        <button
          className="px-8 py-2 bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white
      "
          onClick={() => goHome()}
        >
          <FaArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default Details;
