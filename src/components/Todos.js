import React from "react";
import Todo from "./Todo";
import "../App.css";

const Todos = ({ allTodos, onDelete, onCheckBoxClick, onDoneClick }) => {
  return (
    <div className="todos-wrapper">
      {allTodos.map((td, index) => {
        return (
          <Todo
            key={index}
            td={td}
            onDelete={onDelete}
            onCheckBoxClick={onCheckBoxClick}
            onDoneClick={onDoneClick}
          />
        );
      })}
    </div>
  );
};

export default Todos;
