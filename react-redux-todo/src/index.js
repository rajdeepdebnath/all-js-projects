import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import App from "./components/App";
import { todoReducer } from "./reducers/todoReducer";
import runMirage from "./server";
import { composeWithDevTools } from "redux-devtools-extension";

//let store = createStore(todoReducer, applyMiddleware(thunkMiddleware));
//let store = ;

//runMirage();

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStore(todoReducer, composeEnhancers(applyMiddleware()))}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
