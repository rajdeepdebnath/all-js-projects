import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_ALL_NAME } from '../action/nameAgeAction'
import { Router, Route } from 'react-router-dom'
import  history from '../history'
import NameList from './NameList'
import NewName from './NewName'

const App = () => {
    return (
        <div>
            App
            <Router history={history}>
                <Route path="/" exact component={NameList} />
                <Route path="/newname" exact component={NewName} />
            </Router>
        </div>
    );
}

export default App;