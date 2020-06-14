import React from 'react'

import PostItem from '../post-item/post-item-component'

import './post-container-style.css'

function PostContainer({ posts }) {
    return (
        <div className="post-wrap">
            {posts.map((post, i) => <PostItem key={i} {...post} />)}
        </div>

    );
}

export default PostContainer