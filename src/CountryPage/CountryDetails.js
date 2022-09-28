import BorderCountries from "./BorderCountries";

const CountryDetails = ({ props }) => {
  const { borderCountries, activeCountry } = props;

  let nativeNames, currencies, population, languages;

  const objectToString = (data, type) => {
    let givenObject = data;
    givenObject = Object.values(data);
    if (type === "native") {
      givenObject = givenObject.map((value) => value.common);
    } else if (type === "currency") {
      givenObject = givenObject.map((value) => value.name);
    } else {
      givenObject = givenObject.map((value) => value);
    }
    givenObject = [...new Set(givenObject)];
    givenObject = givenObject.map((value) => value);
    givenObject = givenObject.join(", ");
    return givenObject;
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

  nativeNames = objectToString(activeCountry.name.nativeName, "native");
  currencies = objectToString(activeCountry.currencies, "currency");
  languages = objectToString(activeCountry.languages, "language");
  population = changePopToNumberSystem(activeCountry.population);

  return (
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
              <span>{` ${nativeNames}`}</span>
            </p>
            <p>
              Population: <span>{population}</span>
            </p>
            <p>
              Region: <span>{activeCountry.region}</span>
            </p>
            <p>
              Sub Region: <span>{activeCountry.subregion}</span>
            </p>
            <p>
              Captital: <span>{activeCountry.capital}</span>
            </p>
          </div>
          <div className="detail-right">
            <p>
              Top Level Domain: <span>{activeCountry.tld[0]} </span>
            </p>
            <p>
              Currencies: <span>{currencies}</span>
            </p>
            <p>
              Languages: <span>{languages}</span>
            </p>
          </div>
        </div>

        {borderCountries.length != 0 && (
          <BorderCountries countries={borderCountries} />
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
