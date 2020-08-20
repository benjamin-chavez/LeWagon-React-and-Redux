// TODO: import the right dependencies
import React from 'react';

// TODO: code the Article component
const Article = (props) => {
  return (
    <div className='article'>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
};

// TODO: export your Article component for tests
export default Article;
