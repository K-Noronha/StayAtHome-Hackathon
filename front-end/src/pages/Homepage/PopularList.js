import React from "react";
import { Link } from "react-router-dom";
import rightarrow from "../../assets/rightarrow.png";

const PopularList = (props) => {
  const { topic, activities } = props.category;

  return (
    <div className="activityList">
      <div className="activityList__title">
        <h2>{topic}</h2>
        <div>
          <h3>More </h3>
          <img src={rightarrow} />
        </div>
      </div>
      <div className="activityList__items">
        {activities.map((activity, i) => {
          return (
            <div className="activity" key={i}>
              <Link to="/workstation">
                <img className="activity__image" src={activity.thumbnail} />
              </Link>
              <h4>{activity.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PopularList;
