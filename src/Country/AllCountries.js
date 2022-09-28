import "./Country.css";
import "./../App.css";
import Country from "./Country";

const AllCountries = ({ allCountries }) => {
  return (
    <div className="all-countries">
      {allCountries.map((country, index) => (
        <Country country={country} key={index} />
      ))}
    </div>
  );
};

export default AllCountries;
