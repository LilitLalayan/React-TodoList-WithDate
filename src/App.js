import { useState } from "react";
import "./App.css";
import TaskGenerator from "./components/TaskGenerator";
import Todos from "./components/Todos";

function App() {
  const [allTodos, setAllTodos] = useState([]);

  const onBtnClick = (text, date) => {
    for (let item of allTodos) {
      let newAllTodos = [];
      if (item.dayName === date) {
        newAllTodos = allTodos.map((el) => {
          if (el.dayName === date) {
            el.tasks.push({
              taskName: text,
              id: Math.random(),
              isDone: false,
            });
            return el;
          }
          return el;
        });
        setAllTodos(newAllTodos);
        return;
      }
    }
    setAllTodos([
      ...allTodos,
      {
        dayName: date,
        tasks: [
          {
            taskName: text,
            id: Math.random(),
            isDone: false,
          },
        ],
      },
    ]);
  };

  const onDelete = (td, ind) => {
    let newAllTodos = [];
    newAllTodos = allTodos.map((el) => {
      if (el.dayName === td.dayName) {
        el.tasks.splice(ind, 1);

        return el;
      }
      return el;
    });
    const filteredAllTodos = newAllTodos.filter((el) => el.tasks.length);
    setAllTodos(filteredAllTodos);
  };
  const onCheckBoxClick = (td, todo, ind) => {
    let newAllTodos = [];
    newAllTodos = allTodos.map((el) => {
      if (el.dayName === td.dayName) {
        const newTasks = el.tasks.map((ts, index) => {
          if (index === ind) return todo;
          return ts;
        });

        return { ...el, tasks: newTasks };
      }
      return el;
    });

    setAllTodos(newAllTodos);
  };
  const onDoneClick = (p, td, ind) => {
    let newAllTodos = [];
    newAllTodos = allTodos.map((elem) => {
      if (elem.dayName === td.dayName) {
        const newTasks = elem.tasks.map((ts, index) => {
          if (index === ind) return { ...ts, taskName: p };
          return ts;
        });

        return { ...elem, tasks: newTasks };
      }
      return elem;
    });

    setAllTodos(newAllTodos);
  };
  return (
    <div className="App">
      <TaskGenerator onBtnClick={onBtnClick} />
      <Todos
        allTodos={allTodos}
        onDelete={onDelete}
        onCheckBoxClick={onCheckBoxClick}
        onDoneClick={onDoneClick}
      />
    </div>
  );
}

export default App;
