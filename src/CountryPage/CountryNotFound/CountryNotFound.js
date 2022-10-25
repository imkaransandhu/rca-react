import { Link } from "react-router-dom";

import "./CountryNotFound.scss";

const CountryNotFound = ({ countryName }) => {
  return (
    <div className="country-not-found">
      <h3 className="">
        Country not found with name - <span>{countryName}</span>
      </h3>
      <p className="link-to-home" to="/rca-react">
        Click the button to go to home page
        <Link to="/rca-react"> Home </Link>
      </p>
    </div>
  );
};

export default CountryNotFound;
