import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import '../styling/Navbar.scss'
import {Brian} from '../../src/Assets/BrianLogin_MacCheese.png';
;
const Navbar = (props) => {
  const { user } = props;

  return (
    <div className="navbarMain">
      <ul>
        <Link to="/">
          <li>Show and Tell </li>
        </Link>
        <Link to="/profile">
          <li>Profile </li>
        </Link>
        <Link to="/workstation">
          <li>Workstation </li>
        </Link>
      </ul>
      <div className="userInfo">
        <img className="userInfo__pic" src={Brian}></img>
        <h2 className="userInfo__name">{user.name}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps)(Navbar);
