import React from "react";
import "./LoaderCountry.scss";

const LoaderCountry = () => {
  return (
    <div className="country-page">
      <div className="left loader-element-image ">
        <span className="loader-image"></span>
      </div>
      <div className="right">
        <h3>
          <span className="loader"></span>
        </h3>
        <div className="detail">
          <div className="detail-left">
            <p>
              Native Name:
              <span className="loader-text"></span>
            </p>
            <p>
              Population:
              <span className="loader-text"></span>
            </p>
            <p>
              Region:
              <span className="loader-text"></span>
            </p>
            <p>
              Sub Region:
              <span className="loader-text"></span>
            </p>
            <p>
              Captital: <span className="loader-text"></span>
            </p>
          </div>
          <div className="detail-right">
            <p>
              Top Level Domain: <span className="loader-text"></span>
            </p>
            <p>
              Currencies: <span className="loader-text"></span>
            </p>
            <p>
              Languages: <span className="loader-text"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderCountry;
