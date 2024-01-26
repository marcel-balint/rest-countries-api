import React from "react";

import "./Question.css";

const Question = (props) => {
  return (
    <div className="question">
      <h3 className="question-title">{props.title}</h3>
      <p className="question-definition">{props.text}</p>
    </div>
  );
};

export default Question;
