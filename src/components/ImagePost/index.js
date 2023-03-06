import React from 'react';

const ImagePost = ({index, messageBody, mediaUrl}) => {
  return (
    <div key={index} className="smartphone-bubble">
      <img src={mediaUrl} className="message-image" />
      {messageBody}
    </div>
  );
};

export default ImagePost;