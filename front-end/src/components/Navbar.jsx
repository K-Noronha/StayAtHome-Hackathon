import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { user } = props;

  return (
    <div>
      <h2>{user.name}</h2>
      <ul>
        <Link to="/">
          <li>Homepage </li>
        </Link>
        <Link to="/profile">
          <li>Profile </li>
        </Link>
        <Link to="/workstation">
          <li>Workstation </li>
        </Link>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps)(Navbar);
