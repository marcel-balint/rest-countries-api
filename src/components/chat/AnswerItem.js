import { React, useState } from "react";
import { Likes } from "./Likes";

const AnswerItem = ({ answer }) => {
  const [input, setInput] = useState("");
  const [replyBtnVisible, setReplyBtnVisible] = useState(false);

  const toggleReplyForm = () => {
    setReplyBtnVisible((prevValue) => !prevValue);
  };

  const addReply = (e) => {
    e.preventDefault();
  };

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
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a Reply..."
            className="add-reply_input"
          />
          <button
            type="submit"
            disabled={input.length === 0}
            style={{ fontWeight: `${input.length !== 0 ? "bold" : ""}` }}
          >
            Reply
          </button>
        </form>
      )}
    </div>
  );
};

export default AnswerItem;
