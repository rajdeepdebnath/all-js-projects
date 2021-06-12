import foodApi from '../api/foodApi'

export const placeOrder = (order) => {
    return async dispatch => {
        let response = await foodApi.post('/order', order);

        dispatch({ type:'ORDER_PLACED', payload:response.data });
    }
};