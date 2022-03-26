import React, { useRef, useState } from "react";
import "../App.css";

const Task = ({ td, todo, onDelete, index, onCheckBoxClick, onDoneClick }) => {
  const [linedThrough, setLinedThrough] = useState(false);
  const text = useRef();
  const done = useRef();
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={(e) => {
          setLinedThrough(!linedThrough);
          onCheckBoxClick(td, { ...todo, isDone: e.target.checked }, index);
        }}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <p
          ref={text}
          className={linedThrough ? "lined-through" : "not-lined-through"}
        >
          {todo.taskName}
        </p>
        <span
          ref={done}
          style={{
            display: "none",
            marginLeft: "10px",
            cursor: "pointer",
            color: "#1ce092",
            fontWeight: "bold",
          }}
          onClick={(e) => {
            e.target.style.display = "none";
            onDoneClick(text.current.innerHTML, td, index);
          }}
        >
          ✔
        </span>
      </div>
      <span
        className="edit-btn"
        onClick={() => {
          text.current.contentEditable = "true";
          text.current.focus();
          done.current.style.display = "block";
        }}
      >
        Edit
      </span>
      <span className="delete-btn" onClick={() => onDelete(td, index)}>
        Delete
      </span>
    </div>
  );
};

export default Task;
