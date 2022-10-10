import "./Country.scss";
import "./../App.scss";
import Country from "./Country";
import LoaderCountryElement from "./LoaderCountryElement/LoaderCountryElement";
import { Fragment } from "react";

const AllCountries = ({ allCountries }) => {
  return (
    <div className="all-countries">
      {allCountries.length !== 0 ? (
        allCountries.map((country, index) => (
          <Country country={country} key={index} />
        ))
      ) : (
        <Fragment>
          <LoaderCountryElement />
          <LoaderCountryElement />
          <LoaderCountryElement />
          <LoaderCountryElement />
          <LoaderCountryElement />
          <LoaderCountryElement />
          <LoaderCountryElement />
          <LoaderCountryElement />
        </Fragment>
      )}
    </div>
  );
};

export default AllCountries;
