import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import reduxThunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension'
import { orderReducer } from './reducer/orderReducer'
import { cartReducer } from './reducer/cartReducer'
import { menuReducer } from './reducer/menuReducer'
import App from './component/App'
import './index.css'

let store = createStore(combineReducers({ 
    order: orderReducer, 
    cart: cartReducer,
    menu: menuReducer,
    form: formReducer})
, composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.querySelector('#root'));