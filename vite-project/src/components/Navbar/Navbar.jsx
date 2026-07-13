import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/encyclopedia">Encyclopedia</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;