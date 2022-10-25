import "./Header.scss";
import "./../App.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/rca-react" className="where-world">
        Where in the world?
      </Link>
    </header>
  );
};

export default Header;
// <div className="toggle-mode">Dark Mode</div>
