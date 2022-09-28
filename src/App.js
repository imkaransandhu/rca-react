import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Country from "./Country/Country";
import CountryPage from "./CountryPage/CountryPage";
import Filter from "./Filter/Filter";
import Header from "./Header/Header";

function App() {
  const [allRegions, setAllRegions] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [allCountriesName, setAllCountriesName] = useState([]);

  const [activeRegion, setActiveRegion] = useState("Oceania");
  const [activeCountry, setActiveCountry] = useState("New Zealand");
  // const [activeCountryData, setActiveCountryData] = useState({});

  const withoutDupAllRegions = [...new Set(allRegions)];
  const withoutDupAllCountriesName = [...new Set(allCountriesName)];

  function updateRegion(event) {
    setActiveRegion(event.target.value);
    setAllCountries([]);
  }

  function getCountry(e) {
    let x = e.currentTarget.name;
    console.log(x);
    setActiveCountry(x);
  }

  useEffect(() => {
    (async () => {
      const fetchALLCountries = await fetch(
        "https://restcountries.com/v3.1/all"
      );
      const resAllCountries = await fetchALLCountries.json();
      const AllCountriesData = await resAllCountries;
      AllCountriesData.map((data) => {
        return setAllRegions((oldArray) => [...oldArray, data.region]);
      });
      AllCountriesData.map((data) => {
        return setAllCountriesName((oldArray) => [
          ...oldArray,
          data.name.official,
        ]);
      });
    })();
  }, []);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${activeRegion}`)
      .then((res) => res.json())
      .then((allData) => {
        allData.map((data) =>
          setAllCountries((oldArray) => [...oldArray, data])
        );
      })
      .catch((error) => console.error(error));
  }, [activeRegion]);

  return (
    <BrowserRouter>
      <Link to="/">
        <Header />
      </Link>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Filter
                allRegions={withoutDupAllRegions}
                allCountriesName={withoutDupAllCountriesName}
                activeRegion={activeRegion}
                updateRegion={updateRegion}
                setActiveCountry={setActiveCountry}
                activeCountry={activeCountry}
              />
              <div className="all-countries">
                {allCountries.map((country, index) => (
                  <Country
                    getCountry={getCountry}
                    country={country}
                    key={index}
                  />
                ))}
              </div>
            </div>
          }
        />

        <Route path="/countrydetails/:key" element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
