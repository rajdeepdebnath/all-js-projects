import foodApi from '../api/foodApi'

export const fetchCart = () => {
    return async dispatch => {
        let response = await foodApi.get('/cart');

        dispatch({ type:"FETCH_CART", payload:response.data });
    }
}

export const addItemToCart = (cart) => {
    return async dispatch => {
        let response = await foodApi.post('/cart', cart);

        dispatch({ type:"ADD_ITEM_TO_CART", payload:response.data });
    }
}

export const emptyCart = () => {
    return async dispatch => {
        let response = await foodApi.post('/cart', {});
        console.log(response);
        dispatch({ type:"EMPTY_CART", payload:response.data });
    }
}