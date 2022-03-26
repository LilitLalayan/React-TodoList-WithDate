import React from "react";
import Task from "./Task";
import "../App.css";

const Tasks = ({ td, show, onDelete, onCheckBoxClick, onDoneClick }) => {
  return (
    <div className={show ? "tasks-show" : "tasks-hide"}>
      {td.tasks.map((item, index) => {
        return (
          <Task
            key={item.id}
            todo={item}
            td={td}
            onDelete={onDelete}
            index={index}
            onCheckBoxClick={onCheckBoxClick}
            onDoneClick={onDoneClick}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
