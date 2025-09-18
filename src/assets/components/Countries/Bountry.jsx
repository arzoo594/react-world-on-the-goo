import React, { useState } from "react";

const Bountry = ({ bountry, handleVisitedCountries }) => {
  // console.log(handleVisitedCountries);
  const [visited, setVisited] = useState(false);
  const handlerVisited = () => {
    // setVisited(visited ? false : true);
    setVisited(!visited);
    handleVisitedCountries(bountry);
  };
  return (
    <div
      className={`border-2 border-purple-300 m-2 rounded-2xl p-4 justify-center items-center my-4 shadow-2xl ${
        visited ? "bg-purple-100" : ""
      }`}
    >
      <img src={bountry.flags.flags.png} alt={bountry.flags.flags.alt} />
      <div className=" justify-center my-6">
        <h2>Country Name : {bountry.name.common}</h2>
        <h3>Population : {bountry.population.population}</h3>
        <h4>Region : {bountry.region.region}</h4>
        <h5>Area : {bountry.area.area}</h5>
        <h6>
          Country Area :{" "}
          {bountry.area.area > 300000 ? "Big Country" : "Small Country"}
          <br />
          <button
            onClick={handlerVisited}
            className="border-2 rounded-2xl p-2 border-gren-300 mt-2 shadow-2xl font-semibold text-green-700 cursor-pointer hover:bg-black hover:text-white "
          >
            {visited ? "Visited" : "Not Visited"}
          </button>
        </h6>
      </div>
    </div>
  );
};

export default Bountry;
