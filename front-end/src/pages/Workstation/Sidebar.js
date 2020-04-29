import React from "react";
import '../../styling/Sidebar.scss';

const Sidebar = (props) => {
  const { categories } = props;

  return (
    <div className="sidebarMain">
      {categories.map((category, i) => {
        return (
          <div key={i}>
            <h5>{category.topic}</h5>
          </div>
        );
      })}
    </div>
  );
};
export default Sidebar;
