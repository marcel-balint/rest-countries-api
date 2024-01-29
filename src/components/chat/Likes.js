import React, { useState } from "react";
import emptyLike from "../../images/like-empty-icon.svg";
import filledLike from "../../images/like-filled-icon.svg";
import "./Likes.css";

export function Likes(props) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    likes === 1 ? setLikes(0) : setLikes(1);
  };

  return (
    <>
      <p className="reaction-like">
        <img
          src={likes ? filledLike : emptyLike}
          onClick={handleLike}
          alt="Like"
        />
        <span> {likes}</span>
      </p>
    </>
  );
}
