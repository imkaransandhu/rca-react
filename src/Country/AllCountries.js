import "./Country.scss";
import "./../App.scss";
import Country from "./Country";

const AllCountries = ({ allCountries }) => {
  return (
    <div className="all-countries">
      {allCountries.length != 0 ? (
        allCountries.map((country, index) => (
          <Country country={country} key={index} />
        ))
      ) : (
        <div className="container">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default AllCountries;
