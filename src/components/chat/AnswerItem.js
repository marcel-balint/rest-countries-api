import { React, useContext, useEffect, useState } from "react";
import { Likes } from "./Likes";
import { v4 as uuidv4 } from "uuid";
import ChatContext from "../../ChatContext";
import "./AnswerItem.css";

const AnswerItem = ({ answer, country, questionId, answerId }) => {
  const [input, setInput] = useState("");
  const [replyBtnVisible, setReplyBtnVisible] = useState(false);
  const [replies, setReplies] = useState([]);

  const { state, dispatch } = useContext(ChatContext);

  const toggleReplyForm = () => {
    setReplyBtnVisible((prevValue) => !prevValue);
  };

  const addReply = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) {
      return;
    }
    const reply = {
      replyId: uuidv4(),
      country: country,
      questionId,
      answerId,
      replyText: input,
    };
    dispatch({
      type: "REPLY_TO_ANSWER",
      payload: reply,
    });
    setInput("");
    toggleReplyForm();
  };

  const getReplies = () => {
    const country = state.find((country) => country === country);
    const question = country.questions.find((q) => q.id === questionId);
    const answer = question.answers.find((answer) => answer.id === answerId);
    setReplies(answer.replies);
  };

  useEffect(() => {
    getReplies();
    console.log(replies);
  }, [replyBtnVisible]);
  return (
    <div className="answer-text" key={answer}>
      <p>{answer}</p>
      <div className="answer-reactions">
        <Likes />
        <p onClick={toggleReplyForm}>Reply</p>
      </div>
      {replyBtnVisible && (
        <form className="form-add_reply" onSubmit={addReply}>
          <input
            type="text"
            value={input}
            autoFocus={replyBtnVisible}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a Reply..."
            className="add-reply_input"
          />
          <button
            type="submit"
            disabled={input.trim().length === 0}
            style={{ fontWeight: `${input.trim().length !== 0 ? "bold" : ""}` }}
          >
            Reply
          </button>
        </form>
      )}
      {replies && (
        <div className="reply-text_box">
          {replies.map((el) => (
            <div key={el.id} className="reply-text">
              {el.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnswerItem;
