export const postReducer = (state=[], action) =>{
    switch(action.type){
        case "fetchAllPosts":
            return {
                ...state,
                posts:[...action.payload]
            }
        case "addNewPost":
            return {
                ...state,
                posts:[...state.posts,action.payload]
            }
        default:
            return state;
    }
}