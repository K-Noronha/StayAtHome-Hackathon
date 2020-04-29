import React from "react";
import { connect } from "react-redux";

//data
import categories from "../../data/categories.js";

//components
import MainProject from "./MainProject";
import Sidebar from "./Sidebar";
import CreationCards from "./CreationCards";

//style
import "../../styling/Workstation.scss";
import downarrow from "../../assets/downarrow.png";
const Workstation = ({ main, creations }) => {
  return (
    <div className="workstation">
      <Sidebar categories={categories} />

      <div className="workstation__main">
        <MainProject main={main} />
        <div className="workstation__main--divider">
          <h3>Completed Creations</h3>
          <div>
            <h3>Filter by :</h3>
            <img src={downarrow} />
          </div>
        </div>
        <div className="creations">
          {creations.map((creation, i) => (
            <CreationCards creation={creation} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  main: state.stationReducer,
  creations: state.stationReducer.creations,
});
export default connect(mapStateToProps)(Workstation);
