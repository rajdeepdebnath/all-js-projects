import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllPosts } from '../actions/postAction'
import PostList from './PostList'
import NewPost from './NewPost'


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllPosts());
    }, []);

    return (
        <div>
            App 
            <PostList />
            <NewPost />
        </div>
    );
};

export default App;