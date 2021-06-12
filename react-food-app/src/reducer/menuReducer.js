export const menuReducer = (state={}, action) => {
    switch(action.type){
        case "FETCH_ALL_MENUS":
            return {
                menu:[...action.payload]
            };
        default:
            return state;
    }
}