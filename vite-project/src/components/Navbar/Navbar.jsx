import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        🌱 GreenKeeper
      </div>

      <div className="navbar-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/encyclopedia">
          Encyclopedia
        </Link>
       
        <Link to="/myplants">
        My Plants
        </Link>

        <Link to="/about">
          About
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;