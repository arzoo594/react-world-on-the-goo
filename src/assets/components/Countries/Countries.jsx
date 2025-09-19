import React, { use, useState } from "react";
import Bountry from "./Bountry";

const Country = ({ countriesData }) => {
  const countriesDatas = use(countriesData);
  const countries = countriesDatas.countries;
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedCountryImg, setvisitedCountryImg] = useState([]);

  const handleVisitedCountries = (bountry) => {
    const newVisitedCountries = [...visitedCountries, bountry];
    setVisitedCountries(newVisitedCountries);
  };
  const handleVisitedCountriesImg = (bountry) => {
    const newVisitedCountriesImg = [...visitedCountryImg, bountry];
    setvisitedCountryImg(newVisitedCountriesImg);
  };

  return (
    <div className="bg-gray-100 p-8 ">
      <h1 className="text-center p-4 mt-8 text-4xl font-bold text-purple-800 italic  ">
        <span className="border-b-4">World All Countries Info</span>
      </h1>
      <h1 className="mb-4 text-2xl font-semibold text-purple-500 border-2 border-sky-800 p-2 rounded-2xl">
        Visited <span className="italic text-purple-900">Countries</span> :{" "}
        {visitedCountries.length}
      </h1>
      <ol>
        {/* {visitedCountries.map((bountry) => (
          <li>Visited countries name : {bountry.name.common} .</li>
        ))} */}
      </ol>
      <div className="grid lg:grid-cols-12 grid-cols-3 gap-2 border-2 p-4 border-amber-200 rounded-2xl">
        {visitedCountryImg.map((bountry) => (
          <img className=" w-[100px]" src={bountry.flags.flags.png} alt="" />
        ))}
      </div>
      <div className="p-6 gap-4 grid lg:grid-cols-4 grid-cols-1  ">
        {countries.map((bountry) => (
          <Bountry
            key={bountry.cca3.cca3}
            bountry={bountry}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedCountriesImg={handleVisitedCountriesImg}
          ></Bountry>
        ))}
      </div>
    </div>
  );
};

export default Country;
