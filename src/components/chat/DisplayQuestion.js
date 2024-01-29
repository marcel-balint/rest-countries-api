import React from "react";
import answerIcon from "../../images/answer-icon.svg";
import editIcon from "../../images/edit-icon.svg";
import { Likes } from "./Likes";

import "./DisplayQuestion.css";
import Answer from "./Answer";

const Question = (props) => {
  return (
    <div className="question">
      <p className="edit-icon">
        <img src={editIcon} alt="Edit" />
        <span>Edit</span>
      </p>
      <h3 className="question-title">{props.title}</h3>
      <p className="question-definition">{props.text}</p>
      <div className="question-reactions">
        <p className="reaction-answer">
          <img src={answerIcon} alt="Answer" /> <span>Answer</span>
        </p>
        <Likes />
      </div>

      {/* <Answer answer="The first answer" /> */}
    </div>
  );
};

export default Question;
