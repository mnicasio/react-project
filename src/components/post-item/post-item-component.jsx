import React from 'react'

import './post-item-style.css'

function PostItem({ title, body }) {
    return (
        <div className="post-item">
            <div className="post-content">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default PostItem