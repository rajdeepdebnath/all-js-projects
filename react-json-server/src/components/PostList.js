import React from 'react'
import { useSelector } from 'react-redux'

const PostList = () => {
    const posts = useSelector(state => state.post.posts);
    
    return (
        <div>
            {posts && posts.map(p => <div key={p.id}>{p.title}</div>)}
        </div>
    );
}

export default PostList;