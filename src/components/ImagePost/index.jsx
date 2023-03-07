import "./ImagePost.css";
import React from 'react';

export default function ImagePost({index, messageBody, mediaUrl}) {
  return (
    <div key={index} className="smartphone-bubble">
      <img src={mediaUrl} className="message-image" alt={'/logo512.png'}/>
      {messageBody}
    </div>
  );
}