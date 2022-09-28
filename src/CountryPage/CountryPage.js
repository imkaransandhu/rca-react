import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./../App.css";
import "./CountryPage.css";

const CountryPage = () => {
  const { key } = useParams();
  let nativeNames, currencies, population, languages;

  const [activeCountry, setActiveCountry] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${activeCountry}?fullText=true`)
      .then((res) => res.json())
      .then((allData) => {
        setActiveCountry(allData[0]);
      })
      .catch((error) => console.error(error));
  }, [activeCountry]);

  nativeNames = Object.values(activeCountry.name.nativeName);
  nativeNames = nativeNames.map((name) => name.common);
  nativeNames = [...new Set(nativeNames)];
  nativeNames = nativeNames.map((name) => name);
  nativeNames = nativeNames.join(", ");

  currencies = Object.values(activeCountry.currencies);
  currencies = currencies.map((currency) => currency.name);
  currencies = [...new Set(currencies)];
  currencies = currencies.map((name) => name);
  currencies = currencies.join(", ");

  languages = Object.values(activeCountry.languages);
  languages = languages.map((language) => language);
  languages = [...new Set(languages)];
  languages = languages.map((name) => name);
  languages = languages.join(", ");

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
  };

  population = changePopToNumberSystem(activeCountry.population);

  return (
    <div name={key}>
      <div className="breadcrum">
        <button className="back-button">Back</button>
      </div>

      <div className="country-page">
        <div className="left">
          <img src={activeCountry.flags.png} alt="flag" />
        </div>
        <div className="right">
          <h3> {activeCountry.name.common} </h3>
          <div className="detail">
            <div className="detail-left">
              <p>
                Native Name:
                {` ${nativeNames}`}
              </p>
              <p>Population: {population}</p>
              <p>Region: {activeCountry.region}</p>
              <p>Sub Region: {activeCountry.subregion}</p>
              <p>Captital: {activeCountry.capital}</p>
            </div>
            <div className="detail-right">
              <p>Top Level Domain: {activeCountry.tld[0]} </p>
              <p>Currencies: {currencies}</p>
              <p>Languages: {languages}</p>
            </div>
          </div>
          <div className="border-countries">
            <div className="border-countries-title">
              <h5>Border Countries:</h5>
            </div>

            <div className="border-countries-names">
              <button>India</button>
              <button>Pakistan</button>
              <button>China</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
