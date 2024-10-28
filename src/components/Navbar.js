// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" align="center">
      <Link to="/">Home</Link>
      <Link to="/register">Register Student</Link>
      <Link to="/students">Student List</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default Navbar;
