import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todos";

const NewTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input type="submit" value="New Todo" />
    </form>
  );
};

export default NewTodo;
