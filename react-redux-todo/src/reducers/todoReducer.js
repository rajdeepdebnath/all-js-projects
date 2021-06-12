let initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/fetchAllTodos":
      return {
        ...state,
        todos: [...action.payload],
      };
    case "todos/addTodo":
      return {
        ...state,
        todos: [...state.todos, { title: action.payload, isComplete: false }],
      };
    case "todos/completeTodo":
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.title === action.payload.title)
            t.isComplete = action.payload.isCompleted;
          return t;
        }),
      };
    default:
      return state;
  }
};
