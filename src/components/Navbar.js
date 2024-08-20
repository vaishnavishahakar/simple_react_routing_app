import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <span className='brand-name'>
        React-Router-Dom
        </span>

      <div className='navbar-links'>
      <Link to="/" className='navbar-link'>Home</Link>
      <Link to="/about" className='navbar-link'>About</Link>
      <Link to="/contact" className='navbar-link'>Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
