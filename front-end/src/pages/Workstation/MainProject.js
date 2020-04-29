import React from "react";

const MainProject = (props) => {
  const { main } = props;
  return (
    <div>
      <iframe
        width="840"
        height="470"
        src={main[0].link}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={main[0].title}
      ></iframe>

      <p>{main[0].desc}</p>
      <button onClick={() => null} className="bttnChallenge">
        Challenge A Friend
      </button>

      <button onClick={() => null} className="bttnUpload">
        Upload
      </button>
    </div>
  );
};
export default MainProject;
