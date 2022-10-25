import "./Country.scss";
import "./../App.scss";
import Country from "./Country";
import LoaderCountryElement from "./LoaderCountryElement/LoaderCountryElement";
import { Fragment } from "react";

const AllCountries = ({ Countries }) => {
  return (
    <div className="all-countries">
      {Countries.length !== 0 ? (
        Countries.map((country, index) => (
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
