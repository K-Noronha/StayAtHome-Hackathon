import React from "react";

const Sidebar = (props) => {
  const { categories } = props;

  return (
    <div>
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
