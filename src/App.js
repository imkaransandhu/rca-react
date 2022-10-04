import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCountries from "./Country/AllCountries";
import CountryPage from "./CountryPage/CountryPage";
import Filter from "./Filter/Filter";
import Header from "./Header/Header";

function App() {
  const [allRegions, setAllRegions] = useState([]); // Variable to Store all Regions
  const [allCountries, setAllCountries] = useState([]); // variable to Store ALl Countries Data
  const [allCountriesName, setAllCountriesName] = useState([]); // Variable to Store all Countries Name only
  const [activeRegion, setActiveRegion] = useState("Oceania"); // Variable to Store current/Active Region

  const withoutDupAllRegions = [...new Set(allRegions)]; // Removing the duplicates Regions from the array
  const withoutDupAllCountriesName = [...new Set(allCountriesName)]; // Removing the duplicates Regions from the array

  // Filter Region tO update the active region variable
  function updateRegion(event) {
    setActiveRegion(event.target.value);
    setAllCountries([]);
  }

  // One time useEffect to get all regions and countries name from the API
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

  // UseEffect to work on region change
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

  // Props for Filer Component
  const filterPropsObject = {
    withoutDupAllRegions,
    withoutDupAllCountriesName,
    activeRegion,
    updateRegion,
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Filter props={filterPropsObject} />
              <AllCountries allCountries={allCountries} />
            </div>
          }
        />

        <Route path="/countrydetails/:key" element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
