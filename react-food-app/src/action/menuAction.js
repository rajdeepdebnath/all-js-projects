import foodApi from '../api/foodApi'

export const fetchAllMenus = () => {
    return async dispatch => {
        let response = await foodApi.get('/menu');

        dispatch({ type:'FETCH_ALL_MENUS', payload:response.data });
    }
};