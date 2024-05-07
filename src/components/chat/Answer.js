import React, { useState, useContext } from "react";
import { Likes } from "./Likes";
import ChatContext from "../../ChatContext";

const Answer = (props) => {
  const [comment, setComment] = useState("");
  const [input, setInput] = useState("");

  const { state, dispatch } = useContext(ChatContext);

  const submitAswer = (e) => {
    e.preventDefault();
    // setComment(input);
    dispatch({
      type: "ADD_ANSWER",
      questionId: props.questionId,
      country: props.country,
      answer: input,
    });
    setInput("");
    props.toggleAddButton();
  };

  return (
    <>
      {props.answer.map((el) => (
        <p>{el}</p>
      ))}
      {/* <Likes /> */}
      {comment !== "" && <p>{comment}</p>}
      {props.buttonState ? (
        <form onSubmit={submitAswer}>
          <input
            type="text"
            value={input}
            placeholder="Add a Reply..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Reply</button>
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default Answer;
