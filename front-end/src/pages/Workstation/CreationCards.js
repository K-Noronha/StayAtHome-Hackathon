import React, { useState } from "react";

import love from "../../assets/love.png";
import neutral from "../../assets/neutral.png";
import smile from "../../assets/smile.png";

const CreationCards = (props) => {
  const [showComments, toggleComments] = useState(false);
  const {
    id,
    image,
    desc,
    creatorpic,
    creator,
    location,
    comments,
  } = props.creation;

  return (
    <div key={id} className="creation">
      <img src={image} />
      <div>
        <p>{desc}</p>
        <div className="creation__author">
          <img src={creatorpic} alt="profile picture" />
          <div>
            <h2>{creator}</h2>
            <h3>{location}</h3>
          </div>
          <div>
            <img src={love} alt="rating" />
            <p>Rating</p>
          </div>
        </div>
      </div>
      <div className="creation__ratings">
        <img src={neutral} alt="Rating 1" />
        <img src={smile} alt="Rating 2" />
        <img src={love} alt="Rating 3" />
      </div>
      {showComments ? (
        <div className="commentSection" onClick={() => toggleComments(false)}>
          Show Comments{" "}
        </div>
      ) : (
        <div>
          <div className="commentSection" onClick={() => toggleComments(true)}>
            Hide Comments
          </div>
          {comments.map((comment, i) => {
            const { name, profpic, text } = comment;

            return (
              <div key={i} className="comment">
                <img src={profpic} />
                <h6>{name}</h6>
                <p>{text}</p>
              </div>
            );
          })}
          <div className="comment__submit">
            <input type="text" placeholder="Write a comment" />
            <button>Post</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CreationCards;
