import "./Header.css";
import "./../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="where-world">
        Where in the world?
      </Link>

      <div className="toggle-mode">Dark Mode</div>
    </header>
  );
};

export default Header;
