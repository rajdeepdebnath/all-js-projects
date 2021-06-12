import posts from '../apis/posts'

export const fetchAllPosts = () => async dispatch => {
    let response = await posts.get('/posts');
    
    dispatch({ type:"fetchAllPosts", payload:response.data });
}

export const addNewPost = (item) => async dispatch => {
    let response = await posts.post('/posts', item);
    
    dispatch({ type:"addNewPost", payload:response.data });
}