import "./Filter.css";
import "./../App.css";
import { useNavigate } from "react-router-dom";

const Filter = ({
  allRegions,
  activeRegion,
  updateRegion,
  allCountriesName,
  setActiveCountry,
}) => {
  const navigate = useNavigate();

  function updateCountry(e) {
    e.preventDefault();
    let x = document.getElementById("search-country").value;
    console.log(x);
    setActiveCountry(x);
    navigate(`/countrydetails/:${x}`);
  }

  return (
    <section className="filter">
      <div className="search-filter">
        <form onSubmit={updateCountry}>
          <input
            id="search-country"
            list="country"
            placeholder="Enter your country..."
          />
        </form>

        <datalist id="country">
          {allCountriesName.map((countryName, index) => {
            return (
              <option
                className="country-item"
                key={index}
                value={countryName}
              />
            );
          })}
        </datalist>
      </div>
      <div className="region-filter">
        <select
          value={activeRegion}
          name="region"
          id="regions"
          onChange={updateRegion}
        >
          <option className="region-tem">Select your region</option>
          {allRegions.map((region, index) => {
            return (
              <option key={index} className="region-tem">
                {region}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
};

export default Filter;
