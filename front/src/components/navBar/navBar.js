import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css'; 

const Navbar = () => {
  // Check if the user role is "user" in local storage
  const userRole = localStorage.getItem('role');

  if (!userRole || userRole !== 'user') {
    // If the role doesn't exist or is not "user", return null (don't render the Navbar)
    return null;
  }

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/user/order" activeClassName="active">
            Order
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/profile" activeClassName="active">
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
