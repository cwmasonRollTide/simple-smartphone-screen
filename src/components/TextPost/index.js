import React from 'react';

const TextPost = ({index, message}) => {
  return (
    <div key={index} className="smartphone-bubble">
      {message}
    </div>
  );
};

export default TextPost;