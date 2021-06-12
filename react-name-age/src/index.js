import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import nameAgeReducer from './reducer/nameAgeReducer'
import App from './component/App'

let store = createStore(combineReducers({name:nameAgeReducer, form:formReducer}), 
    composeWithDevTools(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
