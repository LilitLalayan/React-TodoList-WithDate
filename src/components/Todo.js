import React, { useState } from "react";
import "../App.css";
import Tasks from "./Tasks";

const Todo = ({ td, onDelete, onCheckBoxClick, onDoneClick }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="one-day"
        onClick={() => {
          setShow(!show);
        }}
      >
        <p>
          {td.dayName}{" "}
          <span
            style={{ color: "#e80088", fontWeight: "bold" }}
          >{`(${td.tasks.length})`}</span>
        </p>
        <span>...</span>
      </div>

      <Tasks
        td={td}
        show={show}
        onDelete={onDelete}
        onCheckBoxClick={onCheckBoxClick}
        onDoneClick={onDoneClick}
      />
    </>
  );
};

export default Todo;
