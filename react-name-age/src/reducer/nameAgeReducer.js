const nameAgeReducer = (state=[], action) => {
    switch(action.type)
    {
        case "FETCH_ALL_NAME":
            return {
                ...state,
                nameAges: [...action.payload]
            };
        case "FETCH_NAME_BY_ID":
            return state?.nameAges.map(nameage => {
                if(nameage.id === action.payload.id)
                    return action.payload;
                
                return nameage;
            });
        // case "UPDATE_NAME_AGE":
        //     return state?.all_nameages.map(nameage => {
        //         if(nameage.id === action.payload.id)
        //             return action.payload;
                
        //         return nameage;
        //     });
        // case "DELETE_NAME_AGE":
        //     return state?.all_nameages.filter(nameage => nameage.id !== action.payload.id);
        default:
            return state;
    }
}

export default nameAgeReducer;