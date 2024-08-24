import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqKg208lpFQcx3vLEmLU40qPDuBztTcrcQmaHF2eIv1pzVg5W9hbIJAU9BFWI979tqRHA&usqp=CAU'></img>
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contacts" className="navbar-link">Contacts</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Decorations" className="navbar-link">Decorations</Link>
          </li>
          <li className="navbar-item">
            <Link to="Services" className="navbar-link">Services</Link>
          </li>
          <li className="navbar-item">
            <Link to="Login" className="navbar-link">Login</Link>
          </li>
         
        </ul>
        <nav><span className='icon'> <i class="fa-solid fa-heart"></i></span>
        <span><i class="fa-solid fa-arrow-right-from-bracket"></i></span>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
