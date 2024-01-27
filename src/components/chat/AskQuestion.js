import React, { useState, useContext } from "react";
import ChatContext from "../../ChatContext";
import "./AskQuestion.css";

const AskQuestion = ({ country }) => {
  const [subject, setSubject] = useState("");
  const [questionText, setQuestionText] = useState("");

  const { state, dispatch } = useContext(ChatContext);

  const addSubject = (e) => {
    setSubject(e.target.value);
  };

  const addQuestionText = (e) => {
    setQuestionText(e.target.value);
  };
  const added = (country) => {
    const newCountryQuestion = { country, subject, questionText };
    dispatch({
      type: "ADD",
      payload: newCountryQuestion,
    });
  };
  return (
    <div className="question-box">
      <div className="question-box__top">
        <p>Subject:</p>
        <input
          type="text"
          value={subject}
          onInput={addSubject}
          placeholder={country}
        />
      </div>
      <div className="question-box__bottom">
        <textarea
          placeholder="Type your question..."
          onChange={addQuestionText}
        >
          {questionText}
        </textarea>
        <button className="add-question__btn" onClick={() => added(country)}>
          Add Question
        </button>
      </div>
    </div>
  );
};

export default AskQuestion;
