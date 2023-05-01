import React from 'react';

function Post(props) {
  return (
    <div>
      <div className="container">
        <h1>{props.post.title}</h1>
        <p>{props.post.content}</p>
        <p>Tags: {props.post.tags}</p>
      </div>
    </div>
  );
}

export default Post;