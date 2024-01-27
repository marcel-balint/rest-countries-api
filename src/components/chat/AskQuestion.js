import React, { useState, useContext } from "react";
import ChatContext from "../../ChatContext";
import { v4 as uuidv4 } from "uuid";
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
  const sendQuestion = (country) => {
    const currentCountry = state.filter((el) => el.country === country);
    // If there are questions attached to the current country
    const addQuestion = {
      country,
      question: { id: uuidv4(), subject, questionText, answers: [] },
    };
    if (currentCountry.length > 0) {
      dispatch({
        type: "ADD_QUESTION",
        payload: addQuestion,
      });
    }
    // If is the first question for the current country
    const newCountryQuestion = {
      country,
      questions: [{ id: uuidv4(), subject, questionText, answers: [] }],
    };

    if (currentCountry.length === 0) {
      dispatch({
        type: "ADD_FIRST_QUESTION",
        payload: newCountryQuestion,
      });
    }
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
        <button
          className="add-question__btn"
          onClick={() => sendQuestion(country)}
        >
          Add Question
        </button>
      </div>
    </div>
  );
};

export default AskQuestion;
