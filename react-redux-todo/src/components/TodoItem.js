import React from "react";
import { useDispatch } from "react-redux";
import { completeTodo } from "../actions/todos";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {todo.title}
      <input
        type="checkbox"
        value={todo.isCompleted}
        onChange={(e) => dispatch(completeTodo(todo.title, e.target.checked))}
      />
    </div>
  );
};

export default TodoItem;
