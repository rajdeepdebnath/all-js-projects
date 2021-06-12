import React from "react";
import { useSelector, connect } from "react-redux";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";

const App = (props) => {
  let todos = useSelector((state) => {
    console.log(state);
    return state.todos;
  });

  return (
    <div>
      <div>App</div>
      <NewTodo />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
