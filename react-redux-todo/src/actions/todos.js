// // export const fetchAllTodos = () => {
// //   return async function (dispatch, getState) {
// //     const response = await fetch("/api/todos");

// //     dispatch({
// //       type: "todos/fetchAllTodos",
// //       payload: await response.json(),
// //     });
// //   };
// // };
// export const fetchAllTodos = () => {
//   return {
//     type: "todos/fetchAllTodos",
//     payload: [],
//   };
// };
// export const addTodo = (title) => {
//   return {
//     type: "todos/addTodo",
//     payload: title,
//   };
// };
// export const completeTodo = (title, isCompleted) => {
//   return {
//     type: "todos/completeTodo",
//     payload: { title, isCompleted },
//   };
// };
