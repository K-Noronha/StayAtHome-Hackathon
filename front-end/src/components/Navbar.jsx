import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <ul>
      <Link to="/">
        <li>Homepage </li>
      </Link>
      <Link to="/profile">
        <li>Profile </li>
      </Link>
      <Link to="/workstation">
        <li>workstation </li>
      </Link>
    </ul>
  );
};
export default Navbar;
