import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCountries from "./Country/AllCountries";
import CountryPage from "./CountryPage/CountryPage";
import Filter from "./Filter/Filter";
import Header from "./Header/Header";
import getCountryName from "./getCountryName";

function App() {
  const [countries, setCountries] = useState([]); // variable to Store ALl Countries Data
  const [activeRegion, setActiveRegion] = useState("Oceania"); // Variable to Store current/Active Region

  const [countriesName] = getCountryName(); // Getting all countries name

  // Filter Region tO update the active region variable
  function updateRegion(event) {
    setCountries([]);
    setActiveRegion(event.target.value);
  }

  // UseEffect to work on region change
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/region/${activeRegion}`)
      .then((allData) => {
        allData.data.map((data) =>
          setCountries((oldArray) => [...oldArray, data])
        );
      })
      .catch((error) => console.error(error));
  }, [activeRegion]);

  // Props for Filer Component
  const filterPropsObject = {
    countriesName,
    activeRegion,
    updateRegion,
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/rca-react"
          element={
            <div>
              <Filter props={filterPropsObject} />
              <AllCountries Countries={countries} />
            </div>
          }
        />

        <Route path="/rca-react/country/:key" element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
