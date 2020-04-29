import React from "react";

import categories from "../../data/categories.json";

const Homepage = () => {
  return (
    <div>
      <h1>HOMEPAGE</h1>
      {categories.map((category, i) => (
        <h3 key={i}>{category.topic}</h3>
      ))}
    </div>
  );
};
export default Homepage;
