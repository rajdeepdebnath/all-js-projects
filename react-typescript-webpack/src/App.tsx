import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import IMAGE from './a.jpg'


const ele = <>
<h1>HI</h1>
<img src={IMAGE}/>
</>;
ReactDOM.render(ele, document.getElementById("root"));