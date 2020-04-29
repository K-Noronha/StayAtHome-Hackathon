import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../styling/Navbar.scss";
import logo from "../assets/ShowTellLogo.png";

const Navbar = (props) => {
  const { user } = props;

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src={logo} />
        </div>
      </Link>

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
