import React, { useState } from "react";
import "./styles.css";
import Todo from "./Todo";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    console.log(newTodos);
    setTask("");
  };

  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">To-Do Managment Application</h5>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                name="task"
                value={task}
                onChange={changeHandler}
                placeholder="Enter your task here"
              />{" "}
              &nbsp;&nbsp;
              <input type="submit" name="Add" value="Add" />
            </form>
            <Todo todolist={todos} deleteHandler={deleteHandler} />
          </div>
        </div>
      </center>
    </div>
  );
}
