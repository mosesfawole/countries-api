import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";
import Spinner from "../components/Spinner";
import Detail from "../components/Detail";
import Footer from "../components/Footer";
const Details = ({ title, image_url }) => {
  const { darkMode, isLoading, setIsLoading } = useStateContext();

  let navigate = useNavigate();
  let params = useParams();
  const goHome = () => {
    navigate("/");
  };

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchDetails = async () => {
    const res = await fetch(`https://restcountries.com/v2/name/${params.name}`);
    const data = await res.json();
    setDetails(data);
    setIsLoading(false);
  };

  return (
    <div
      className={`bg-gray-100 dark:bg-gray-800 dark:text-white
     ${darkMode && "dark"}`}
    >
      <Header />
      <div className="dark:bg-gray-800">
        <div className="container mx-auto p-4 ">
          <button
            className=" flex px-8 py-2 font-semibold bg-white items-center justify-center text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white
      "
            onClick={() => goHome()}
          >
            <FaArrowLeft /> <span>Back</span>
          </button>
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="p-10 dark:bg-gray-800">
          {details.map((detail, index) => (
            <Detail
              key={index}
              title={detail.name}
              image_url={detail.flag}
              nativeName={detail.nativeName}
              population={detail.population}
              region={detail.region}
              subregion={detail.subregion}
              capital={detail.capital}
              currencies={detail.currencies.map((cur) => cur.name)}
              domain={detail.topLevelDomain[0]}
              languages={detail.languages.map((lang) => lang.name)}
            />
          ))}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Details;
