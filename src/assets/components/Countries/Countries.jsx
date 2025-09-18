import React, { use, useState } from "react";
import Bountry from "./Bountry";

const Country = ({ countriesData }) => {
  const countriesDatas = use(countriesData);
  const countries = countriesDatas.countries;
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (bountry) => {
    console.log("visited Button Click", bountry);
  };
  return (
    <div className="bg-gray-100">
      <h1 className="text-center p-4 mt-8 text-4xl font-bold text-purple-800 italic  ">
        <span className="border-b-4">World All Countries Info</span>
      </h1>
      <div className="p-6 gap-2 grid grid-cols-4  ">
        {countries.map((bountry) => (
          <Bountry
            key={bountry.cca3.cca3}
            bountry={bountry}
            handleVisitedCountries={handleVisitedCountries}
          ></Bountry>
        ))}
      </div>
    </div>
  );
};

export default Country;
