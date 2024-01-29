import React, { useState } from "react";
import answerIcon from "../../images/answer-icon.svg";
import editIcon from "../../images/edit-icon.svg";
import { Likes } from "./Likes";

import "./DisplayQuestion.css";
import Answer from "./Answer";

const Question = (props) => {
  const [editedQuestion, setEditedQuestion] = useState(props.text);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };

  const hideOnBackdrop = (e) => {
    const modal = e.target;
    modal.classList.remove("active");
  };
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
            <img src={answerIcon} alt="Answer" /> <span>Answer</span>
          </p>
          <Likes />
        </div>

        {/* <Answer answer="The first answer" /> */}
      </div>
      {/* Edit Question Modal */}
      <div
        className={`modal  ${showModal ? " active" : ""}`}
        onClick={hideOnBackdrop}
      >
        <div className="modal-content">
          <span className="close" onClick={toggleModal}>
            &#10005;
          </span>
          <div className="modal-text">
            <h2>Edit Post</h2>
            <textarea cols="30" rows="10" value={props.text}></textarea>
          </div>
          <div className="modal-btns">
            <button type="submit" onClick={toggleModal}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
