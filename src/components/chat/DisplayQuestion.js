import React from "react";

import "./DisplayQuestion.css";
import Answer from "./Answer";

const Question = (props) => {
  return (
    <div className="question">
      <h3 className="question-title">{props.title}</h3>
      <p className="question-definition">{props.text}</p>
      {/* <Answer answer="The first answer" /> */}
    </div>
  );
};

export default Question;
