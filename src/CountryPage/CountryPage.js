import { useParams } from "react-router-dom";
import "./../App.css";

const CountryPage = ({ activeCountry }) => {
  const { key } = useParams();
  console.log(activeCountry);
  return (
    <h1 name={key} className="country-page">
      {activeCountry.name.common}
    </h1>
  );
};

export default CountryPage;
