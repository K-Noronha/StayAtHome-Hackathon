import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../styling/Navbar.scss";
import logo from "../assets/ShowTellLogo.png";

const Navbar = (props) => {
  const { user } = props;

  return (
    <div className="navbar">
      {/* <ul>
        <Link to="/">
          <li>Show and Tell </li>
        </Link>
        <Link to="/profile">
          <li>Profile </li>
        </Link>
        <Link to="/workstation">
          <li>Workstation </li>
        </Link>
      </ul> */}
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="userInfo">
        <img className="userInfo__pic" src={user.image} />
        <h2 className="userInfo__name">{user.name}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps)(Navbar);
