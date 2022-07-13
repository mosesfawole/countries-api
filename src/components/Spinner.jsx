import React from "react";
import Loading from "../gif/new.gif";
const Spinner = () => {
  return (
    <div className="mx-auto text-4xl flex loader justify-center  items-center dark:bg-gray-800">
      <img src={Loading} className="h-full w-1/2" alt="Loading..." />
    </div>
  );
};

export default Spinner;
