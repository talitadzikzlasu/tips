import { NextPage } from "next";
import { getAllCountries } from "../../data";
import { useEffect, useState } from "react";

const CountriesPage: NextPage = () => {
  const countries = getAllCountries();

  return (
    <div>
      <h1>List of Countries</h1>
      <ul>
        {countries.map((country) => {
          return (
            <li key={country.name}>
              <div>{country.name}</div>
              <div>{country.tips}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountriesPage;
