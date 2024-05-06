import React, { useState, useContext, useEffect, useRef } from "react";
import ChatContext from "../../ChatContext";
import { v4 as uuidv4 } from "uuid";
import "./AskQuestion.css";

const AskQuestion = ({ country }) => {
  const [subject, setSubject] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [changeState, setChangeState] = useState(false);
  const [enteredSubjectTouched, setEnterdSubjectTouched] = useState(false);
  const [enteredQuestionTouched, setEnterdQuestionTouched] = useState(false);

  const { state, dispatch } = useContext(ChatContext);
  // Input fields validation
  let subjectInputIsValid = subject.trim().length > 2;
  let questionInputIsValid = questionText.trim().length > 2;
  // Check if input is touched and input has required number of characters
  let subjectInputIsInvalid = !subjectInputIsValid && enteredSubjectTouched;
  let questionInputIsInvalid = !questionInputIsValid && enteredQuestionTouched;

  let inputsValid = false;
  if (subject.trim().length > 2 && questionText.trim().length > 2) {
    inputsValid = true;
  }
  const subjectInputClasses = subjectInputIsInvalid ? "input-invalid" : "";
  const questionInputClasses = questionInputIsInvalid ? "input-invalid" : "";

  const blurSubjectHandler = () => {
    setEnterdSubjectTouched(true);
  };

  const blurQuestionHandler = () => {
    setEnterdQuestionTouched(true);
  };

  const addSubject = (e) => {
    setSubject(e.target.value);
  };

  const addQuestionText = (e) => {
    setQuestionText(e.target.value);
  };

  // Send question on 'Enter' key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputsValid) {
      e.target.blur(); // Remove focus after 'Enter' is pressed
      sendQuestion(country);
    }
  };

  const scrollToBottom = useRef(false);

  // Effect to scroll to the bottom when scrollToBottom ref is true
  useEffect(() => {
    if (scrollToBottom.current) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
      scrollToBottom.current = false; // Reset the ref
    } else {
      window.scrollTo({
        top: 0,
      });
    }
  }, [changeState]);

  const sendQuestion = (country) => {
    if (!(subject.trim().length > 2) && !(questionText.trim().length > 2)) {
      return false;
    }

    // Set the ref to true to trigger scrolling
    scrollToBottom.current = true;
    setChangeState((prevValue) => !prevValue);

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

    setSubject("");
    setQuestionText("");
    setEnterdQuestionTouched(false);
    setEnterdSubjectTouched(false);
  };

  return (
    <>
      {subjectInputIsInvalid && (
        <p className="error-text_subject">
          <i>
            <small>Subject must have at least 3 characters.</small>
          </i>
        </p>
      )}
      {questionInputIsInvalid && (
        <p className="error-text_subject error_question">
          <i>
            <small>Question must have at least 3 characters.</small>
          </i>
        </p>
      )}

      <div className="question-box">
        <div className="question-box__top">
          <p>Subject:</p>
          <input
            type="text"
            className={subjectInputClasses}
            value={subject}
            onInput={addSubject}
            onBlur={blurSubjectHandler}
            onKeyDown={handleKeyPress}
            placeholder="Type topic subject..."
          />
        </div>
        <div className="question-box__bottom">
          <textarea
            placeholder="Type your question..."
            className={questionInputClasses}
            onChange={addQuestionText}
            onBlur={blurQuestionHandler}
            onKeyDown={handleKeyPress}
            value={questionText}
          ></textarea>
          <button
            className="add-question__btn"
            onClick={() => sendQuestion(country)}
            disabled={!inputsValid}
          >
            Post Question
          </button>
        </div>
      </div>
    </>
  );
};

export default AskQuestion;
