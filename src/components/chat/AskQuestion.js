import React from "react";
import "./AskQuestion.css";

const AskQuestion = () => {
  return (
    <div className="question-box">
      <div className="question-box__top">
        <p>Subject:</p> <input type="text" placeholder="Type subject..." />
      </div>
      <div className="question-box__bottom">
        <textarea placeholder="Type your question..."></textarea>
        <button className="add-question__btn">Add Question</button>
      </div>
    </div>
  );
};

export default AskQuestion;
