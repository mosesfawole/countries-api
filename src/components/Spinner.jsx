import React from "react";
import Loading from "../gif/new.gif";
const Spinner = () => {
  return (
    <div className="mx-auto flex  justify-center  items-center">
      <img src={Loading} className="h-full w-1/4" alt="Loading..." />
    </div>
  );
};

export default Spinner;
