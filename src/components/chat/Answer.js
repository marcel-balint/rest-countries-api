import React, { useState, useContext } from "react";
import ChatContext from "../../ChatContext";
import "./Answer.css";
import AnswerItem from "./AnswerItem";
import { v4 as uuidv4 } from "uuid";

const Answer = (props) => {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(ChatContext);

  const submitAswer = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      return;
    }
    const answer = {
      id: uuidv4(),
      answerText: input,
      replies: [],
    };
    dispatch({
      type: "ADD_ANSWER",
      questionId: props.questionId,
      country: props.country,
      answer: answer,
    });
    setInput("");
    props.toggleAddButton();
  };
  return (
    <>
      {props.answer.map((answer) => (
        <AnswerItem
          answer={answer.answerText}
          country={props.country}
          questionId={props.questionId}
          answerId={answer.id}
          key={answer.id}
        />
      ))}
      {props.buttonState ? (
        <form className="form-add_answer" onSubmit={submitAswer}>
          <input
            type="text"
            value={input}
            placeholder="Add a Reply..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            disabled={input.length === 0}
            style={{ fontWeight: `${input.length !== 0 ? "bold" : ""}` }}
            type="submit"
          >
            Reply
          </button>
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default Answer;
