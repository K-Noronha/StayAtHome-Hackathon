import React from "react";

const Sidebar = (props) => {
  const { categories } = props;

  return (
    <div className="sidebar">
      {categories.map((category, i) => {
        return (
          <div className="sidebar__category" key={i}>
            <img src={category.icon} />
            <h2>{category.topic}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Sidebar;
