import { Link } from "react-router-dom";

const BackBreadcrum = () => {
  return (
    <div className="breadcrum">
      <Link to="/rca-react" className="back-button">
        Back
      </Link>
    </div>
  );
};

export default BackBreadcrum;
