export const cartReducer = (state={}, action) => {
    switch(action.type){
        case "FETCH_CART":
            return { ...action.payload };
        case "ADD_ITEM_TO_CART":
            return { ...action.payload };
        case "EMPTY_CART":
            return { ...action.payload };
        default:
            return state;
    }
}