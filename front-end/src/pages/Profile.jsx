import React from "react";
import { connect } from "react-redux";

const Profile = (props) => {
  const { name, work } = props.user;
  console.log(name);
  return (
    <div>
      <h1>PROFILE PAGE</h1>;<h2>{name}</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps)(Profile);
