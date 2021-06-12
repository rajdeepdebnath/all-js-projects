import nameAgeApi from '../api/nameAgeApi'
import history from '../history'

export const FETCH_ALL_NAME = () => {
    return async function(dispatch){
        let response = await nameAgeApi.get('/nameAges');
        
        dispatch({ type:'FETCH_ALL_NAME', payload:response.data });
    }
}

export const FETCH_NAME_BY_ID = (id) => {
    return async function(dispatch){
        let response = await nameAgeApi.get(`/nameAges/${id}`);

        dispatch({ type:'FETCH_NAME_BY_ID', payload:response.data });
    }
}

export const ADD_NAME_AGE = (obj) => {
    return async function(dispatch){
        let response = await nameAgeApi.post('/nameAges', obj);

        //dispatch({ type:'UPDATE_NAME_AGE', payload:response.data });
        history.push('/');
    }
}

export const UPDATE_NAME_AGE = (id, obj) => {
    return async function(dispatch){
        let response = await nameAgeApi.put(`/nameAges/${id}`, obj);

        //dispatch({ type:'UPDATE_NAME_AGE', payload:response.data });

    }
}

export const DELETE_NAME_AGE = (id, obj) => {
    return async function(dispatch){
        let response = await nameAgeApi.delete(`/nameAges/${id}`);

        //dispatch({ type:'DELETE_NAME_AGE', payload:response.data });

    }
}