import React from 'react';
import PostCard from './PostCard';

const PostsList = ({ topics }) => {
    return (
        <div>
            {topics.map((topic, index) => (
                <PostCard key={index} {...topic} />
            ))}
        </div>
    );
};

export default PostsList