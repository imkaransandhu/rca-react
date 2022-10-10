import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const BorderCountries = ({ countries }) => {
  const [borderCountriesName, setBorderCountriesName] = useState([]);

  useEffect(() => {
    let givenCountriesCode = countries;
    givenCountriesCode.map((country) => {
      const fetchBorder = async () => {
        console.log(country);
        const prom = await fetch(
          `https://restcountries.com/v3.1/alpha/${country}`
        );
        const res = await prom.json();
        const data = await res;
        setBorderCountriesName((oldArray) => [
          ...oldArray,
          data[0].name.common,
        ]);
      };
      fetchBorder();
    });
  }, [countries]);

  return (
    <div className="border-countries">
      <div className="border-countries-title">
        <h5>Border Countries:</h5>
      </div>

      <div className="border-countries-names">
        {borderCountriesName.map((country, index) => (
          <button key={index}>
            <Link to={`/rca-react/countrydetails/${country}`}>{country}</Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BorderCountries;
