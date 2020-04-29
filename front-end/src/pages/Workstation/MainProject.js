import React from "react";
import { connect } from "react-redux";

const MainProject = ({ main }) => {
  const { link, title, desc } = main;
  return (
    <div className="mainProject">
      <h1>{title}</h1>
      <iframe
        width="840"
        height="470"
        src={link}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={title}
      ></iframe>
      <div className="mainProject__details">
        <p className="mainProject__details--text">{desc}</p>
        <button className="mainProject__details--button" onClick={() => null}>
          Challenge A Friend
        </button>
      </div>

      <button className="mainProject__upload" onClick={() => null}>
        Upload
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  main: state.stationReducer,
});
export default connect(mapStateToProps)(MainProject);
