import "./Filter.scss";
import "./../App.scss";
import { useNavigate } from "react-router-dom";
import InputFilter from "./InputFilter";
import SearchFilter from "./SearchFilter";

const Filter = ({ props }) => {
  //Deconstructing the props
  const {
    withoutDupAllRegions: regions,
    withoutDupAllCountriesName: countriesName,
    activeRegion,
    updateRegion,
  } = props;

  const inputFilterProps = { countriesName, updateCountry }; // input component props
  const searchFilterProps = { activeRegion, updateRegion, regions }; // search component props

  const navigate = useNavigate(); // Navigation function to link to detail page

  // Function to go to details page on Submit of form
  function updateCountry(e) {
    e.preventDefault();
    const countryName = document.getElementById("search-country").value;
    navigate(`/rca-react/countrydetails/${countryName}`);
  }

  return (
    <section className="filter">
      <InputFilter props={inputFilterProps} />
      <SearchFilter props={searchFilterProps} />
    </section>
  );
};

export default Filter;
