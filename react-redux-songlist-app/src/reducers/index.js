import { combineReducers } from 'redux'

const songReducer = () => {
    return [{song:1}, {song:2}]
}

export default combineReducers({ songs:songReducer });