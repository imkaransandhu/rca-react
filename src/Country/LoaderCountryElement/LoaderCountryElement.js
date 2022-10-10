import React from "react";
import "./LoaderCountryElement.scss";

const LoaderCountryElement = () => {
  return (
    <div className="country ">
      <div className="country-header loader-heading">
        <span className="loader-country-element"></span>
      </div>
      <div className="country-section">
        <h3 className="country-name">
          {" "}
          <div className="loading loading04">
            <span>C</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>r</span>
            <span>y</span>
            <span>N</span>
            <span>a</span>
            <span>m</span>
            <span>e</span>
          </div>
        </h3>
        <div className="country-data loader-data">
          <div className="country-population">
            Population:
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="country-region">
            Region:
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="country-capital">
            Capital:
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderCountryElement;
