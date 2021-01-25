import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';
export default () => {
    return (
        <div className="container">
            <h2>Create Post</h2>
            <PostCreate />
            <hr />
            <h3>Posts</h3>
            <PostList />
        </div>
    );
};