import React from "react";

const CreationCards = (props) => {
  const { id, image, creator, rating, comments } = props.creation;

  return (
    <div key={id}>
      <img src={image} />
      <div>
        <img src="#" alt="profile picture" />
        <h5>{creator}</h5>
      </div>
      <div>
        <img src={rating} alt="rating" />
        <p>Rating</p>
      </div>
      <div>
        <img src="#" alt="Rating 1" />
        <img src="#" alt="Rating 2" />
        <img src="#" alt="Rating 3" />
      </div>

      {comments.map((comment, i) => {
        return (
          <div key={i}>
            <h6>{comment.name}</h6>
            <p>{comment.text}</p>
          </div>
        );
      })}
    </div>
  );
};
export default CreationCards;
