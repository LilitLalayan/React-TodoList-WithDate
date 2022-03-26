import React, { useRef, useState } from "react";
import "../App.css";

const TaskGenerator = ({ onBtnClick }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const input = useRef();
  return (
    <div className="header">
      <h1>TODO LIST</h1>
      <div className="task-generator">
        <input
          ref={input}
          type="text"
          maxLength="25"
          placeholder="Add a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input"
        />
        <input
          className="input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            if (!text || !date) {
              input.current.style.border = "2px solid #e80088";
              return;
            }
            input.current.style.border = "none";
            onBtnClick(text, date);
            setDate("");
            setText("");
          }}
        >
          ADD
        </div>
      </div>
    </div>
  );
};

export default TaskGenerator;
