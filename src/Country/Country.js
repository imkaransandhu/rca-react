import "./Country.css";
import "./../App.css";
import { Link } from "react-router-dom";

const Country = ({ country, getCountry }) => {
  let population;
  const changePopToNumberSystem = (population) => {
    let popInStart = population;
    population = population / 1000000;
    population = population.toFixed(2);
    if (population < 1) {
      population = population * 1000;
      if (population < 1) {
        population = popInStart.toFixed(2);
      }
      population = population + "K";
    } else if (population > 1000) {
      population = population / 1000;
      population = population.toFixed(2);
      population = population + "B";
    } else {
      population = population + "M";
    }
    return population;
    // console.log(popInStart , population);
  };

  population = changePopToNumberSystem(country.population);

  return (
    <div className="country">
      <Link
        onClick={getCountry}
        name={country.name.official}
        to={`/countrydetails/:${country.name.official}`}
      >
        <div className="country-header">
          <img
            className="country-image"
            src={country.flags.png}
            alt={country.name.official}
          />
        </div>
        <div className="country-section">
          <h3 className="country-name">{country.name.common}</h3>
          <div className="country-data">
            <p className="country-population">
              Population: <span>{population}</span>
            </p>
            <p className="country-region">
              Region: <span>{country.region}</span>
            </p>
            <p className="country-capital">
              Capital: <span>{country.capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Country;
