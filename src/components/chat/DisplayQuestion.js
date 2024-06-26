import React, { useState, useContext, useEffect } from "react";
import answerIcon from "../../images/answer-icon.svg";
import editIcon from "../../images/edit-icon.svg";
import { Likes } from "./Likes";
import ChatContext from "../../ChatContext";

import "./DisplayQuestion.css";
import Answer from "./Answer";

const Question = (props) => {
  const [editedQuestion, setEditedQuestion] = useState(props.text);
  const [showModal, setShowModal] = useState(false);
  const [hideAddButton, setHideAddButton] = useState(false);
  const [answers, setAnswers] = useState([]);

  const { dispatch } = useContext(ChatContext);

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };

  const showAnswerField = () => {
    setHideAddButton((prevState) => !prevState);
  };
  // Validation
  let inputValid = true;
  if (editedQuestion.trim().length < 3) {
    inputValid = false;
  }

  const hideOnBackdrop = (e) => {
    const modal = e.target;
    modal.classList.remove("active");
  };

  const editQuestion = (e) => {
    setEditedQuestion(e.target.value);
  };

  const sendQuestion = () => {
    if (editedQuestion.length < 3) {
      return;
    }
    const editedData = {
      country: props.country,
      id: props.id,
      question: editedQuestion,
    };
    dispatch({
      type: "EDIT_QUESTION",
      payload: editedData,
    });
    setShowModal((prevValue) => !prevValue);
  };

  const getAnswers = () => {
    // Find the country
    const countryQuestions = props.country.questions;
    // Find the questions
    const questions = countryQuestions.find((el) => el.id === props.id);
    // Find question answers
    const answers = questions.answers.map((el) => el);
    setAnswers(answers);
  };

  useEffect(() => {
    getAnswers();
  }, [hideAddButton]);

  return (
    <>
      <div className="question">
        <p className="edit-icon" onClick={toggleModal}>
          <img src={editIcon} alt="Edit" />
          <span>Edit</span>
        </p>
        <h3 className="question-title">{props.title}</h3>
        <p className="question-definition">{props.text}</p>
        <div className="question-reactions">
          <p className="reaction-answer">
            <img src={answerIcon} alt="Answer" />{" "}
            <span onClick={showAnswerField}>Answer</span>
          </p>
          <Likes />
        </div>

        <Answer
          toggleAddButton={showAnswerField}
          buttonState={hideAddButton}
          country={props.country}
          questionId={props.id}
          answer={answers}
        />
      </div>
      {/* Edit Question Modal */}
      <div
        className={`modal  ${showModal ? " active" : ""}`}
        onClick={hideOnBackdrop}
      >
        <div className="modal-content">
          {!inputValid ? (
            <p className="error-edit-post">
              Question must have at least 3 characters.
            </p>
          ) : (
            ""
          )}

          <span className="close" onClick={toggleModal}>
            &#10005;
          </span>
          <div className="modal-text">
            <h2>Edit Post</h2>
            <textarea
              cols="30"
              rows="10"
              value={editedQuestion}
              onChange={editQuestion}
            ></textarea>
          </div>
          <div className="modal-btns">
            <button type="submit" onClick={sendQuestion} disabled={!inputValid}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
