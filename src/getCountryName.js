import { useState, useEffect } from "react";
import axios from "axios";

const getCountryName = () => {
  const [countriesName, setCountriesName] = useState([]); // Variable to Store all Countries Name only

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((allCountries) => {
        allCountries.data.map((country) =>
          setCountriesName((oldArray) => [...oldArray, country.name.official])
        );
      })
      .catch((error) => console.error(error));
  }, []);

  return [countriesName];
};

export default getCountryName;
