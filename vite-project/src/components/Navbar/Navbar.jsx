import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
  <div className="navbar-logo">
    🌱 GreenKeeper
  </div>

  <div className="navbar-links">
    <a>Home</a>
    <a>Encyclopedia</a>
    <a>About</a>
  </div>
</nav>
  );
}

export default Navbar;