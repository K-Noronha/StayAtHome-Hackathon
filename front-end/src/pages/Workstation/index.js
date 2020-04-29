import React from "react";

//data
import main from "../../data/main.json";
import categories from "../../data/categories.json";
import creations from "../../data/creations.json";

//components
import MainProject from "./MainProject";
import Sidebar from "./Sidebar";
import CreationCards from "./CreationCards";

const Workstation = () => {
  return (
    <>
      <Sidebar categories={categories} />
      <MainProject main={main} />
      <div>
        <h3>Completed Creations</h3>
        <h3>Filter by:</h3>
      </div>
      {creations.map((creation, i) => (
        <CreationCards creation={creation} key={i} />
      ))}
    </>
  );
};
export default Workstation;
