import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";
import TodoItem from "./TodoItem";
import { fetchAllTodos } from "../actions/todos";

const TodoList = (props) => {
  //   let todos = useSelector((state) => {
  //     console.log(state);
  //     return state.todos;
  //   });

  // useEffect(() => {
  //   console.log("use effect");
  //   props.fetchAllTodos();
  // }, []);

  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem key={todo.title} todo={todo} />
      ))}
    </div>
  );
};

const mapDispatchToProps = {
  fetchAllTodos,
};

// const mapStateToProps = (state) => {
//   console.log(state);
//   return { todos: state.todos };
// };

export default TodoList;
