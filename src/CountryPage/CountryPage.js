import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./../App.scss";
import "./CountryPage.scss";
import BackBreadcrum from "./BackBreadcrum";

import CountryDetails from "./CountryDetails";
import LoaderCountry from "./LoaderCountry/LoaderCountry";
const CountryPage = () => {
  const { key } = useParams();

  const [activeCountry, setActiveCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(false);
    setBorderCountries([]);
    const fetchCounty = async () => {
      const prom = await fetch(
        `https://restcountries.com/v3.1/name/${key}?fullText=true`
      );
      const res = await prom.json();
      const data = await res;
      setActiveCountry(data[0]);
      if (data[0].borders) {
        setBorderCountries(data[0].borders);
      }
      setLoad(true);
    };

    fetchCounty();
  }, [key]);

  const countryDetailsPropsObject = { borderCountries, activeCountry };

  return (
    <div>
      <BackBreadcrum />
      {load ? (
        <CountryDetails props={countryDetailsPropsObject} />
      ) : (
        <LoaderCountry />
      )}
    </div>
  );
};

export default CountryPage;
