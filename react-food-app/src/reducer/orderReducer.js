export const orderReducer = (state={}, action) => {
    switch(action.type){
        case "ORDER_PLACED":
            return {
                order:{
                    ...action.payload
                }
            };
        default:
            return state;
    }
}