import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./../App.css";
import "./CountryPage.css";

const CountryPage = () => {
  const { key } = useParams();
  let nativeNames, currencies, population, languages;

  const [activeCountry, setActiveCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);
  const [borderCountriesName, setBorderCountriesName] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setBorderCountries([]);
    setBorderCountriesName([]);
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

  useEffect(() => {
    let givenCountriesCode = borderCountries;
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
  }, [borderCountries]);

  const getNativeNames = (names) => {
    nativeNames = Object.values(names);
    nativeNames = nativeNames.map((name) => name.common);
    nativeNames = [...new Set(nativeNames)];
    nativeNames = nativeNames.map((name) => name);
    nativeNames = nativeNames.join(", ");
    return nativeNames;
  };

  const getCurrencies = (currencies) => {
    currencies = Object.values(currencies);
    currencies = currencies.map((currency) => currency.name);
    currencies = [...new Set(currencies)];
    currencies = currencies.map((name) => name);
    currencies = currencies.join(", ");
    return currencies;
  };
  const getLanguages = (languages) => {
    languages = Object.values(languages);
    languages = languages.map((language) => language);
    languages = [...new Set(languages)];
    languages = languages.map((name) => name);
    languages = languages.join(", ");
    return languages;
  };

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

  if (load) {
    nativeNames = getNativeNames(activeCountry.name.nativeName);
    currencies = getCurrencies(activeCountry.currencies);
    languages = getLanguages(activeCountry.languages);
    population = changePopToNumberSystem(activeCountry.population);
  }

  return (
    <div>
      {load === false ? (
        "sdf"
      ) : (
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
                  {borderCountriesName.length === 0 ? (
                    <p> No Border Countries Found </p>
                  ) : (
                    borderCountriesName.map((country, index) => (
                      <button key={index}>
                        <Link to={`/countrydetails/${country}`}>{country}</Link>
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryPage;
