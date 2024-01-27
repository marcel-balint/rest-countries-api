import React, { useState, useContext } from "react";
import ThemeContext from "../../ChatContext";
import "./AskQuestion.css";

const AskQuestion = ({ country }) => {
  const [subject, setSubject] = useState("");
  const [questionText, setQuestionText] = useState("");

  const { state, dispatch } = useContext(ThemeContext);
  console.log(state);
  const addSubject = (e) => {
    setSubject(e.target.value);
  };

  const addQuestionText = (e) => {
    setQuestionText(e.target.value);
  };
  const added = (country) => {
    // setCountriesChat((prevSate) => {
    //   const newState = [...prevSate];
    //   newState.push(country);
    //   return newState;
    // });
  };
  return (
    <div className="question-box">
      {/* <p>
        Subject:
        {questionAdded?.subject}{" "}
      </p>
      <p>
        Text:
        {questionAdded?.questionText}{" "}
      </p> */}
      <div className="question-box__top">
        <p>Subject:</p>{" "}
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
