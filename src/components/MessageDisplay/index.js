import './MessageDisplay.css';
import React, {useEffect, useState} from 'react';

const MessageDisplay = ({messages}) => {
  return (
    <div className="smartphone-container">
      <div className="smartphone-conversation">
        {messages.map((message, index) => (
          <div key={index} className="smartphone-bubble">
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageDisplay;
