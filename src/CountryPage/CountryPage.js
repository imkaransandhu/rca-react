import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./../App.scss";
import "./CountryPage.scss";
import BackBreadcrum from "./BackBreadcrum";
import axios from "axios";

import CountryDetails from "./CountryDetails";
import LoaderCountry from "./LoaderCountry/LoaderCountry";
import CountryNotFound from "./CountryNotFound/CountryNotFound";
const CountryPage = () => {
  const { key } = useParams();

  const [activeCountry, setActiveCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);
  const [countryFound, setCountryFound] = useState(true);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(false);
    setBorderCountries([]);
    axios
      .get(`https://restcountries.com/v3.1/name/${key}?fullText=true`)
      .then((allData) => {
        setActiveCountry(allData.data[0]);
        if (allData.data[0].borders) {
          setBorderCountries(allData.data[0].borders);
        }
        setLoad(true);
      })
      .catch((error) => {
        console.error(error.message);
        setCountryFound(false);
      });
  }, [key]);

  const countryDetailsPropsObject = { borderCountries, activeCountry };

  return (
    <div>
      <BackBreadcrum />
      {load && countryFound ? (
        <CountryDetails props={countryDetailsPropsObject} />
      ) : countryFound !== true ? (
        <CountryNotFound countryName={key} />
      ) : (
        <LoaderCountry />
      )}
    </div>
  );
};

export default CountryPage;
