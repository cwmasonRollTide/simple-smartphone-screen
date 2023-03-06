import './MessageDisplay.css';
import TextPost from "../TextPost";
import ImagePost from "../ImagePost";
import React, {useEffect, useState} from 'react';

const MessageDisplay = ({messages}) => {
  return (
    <div className="smartphone-container">
      <div className="smartphone-conversation">
        {messages.map((message, index) => {
          if (!message.mediaUrl0) {
            return <TextPost message={message.messageBody} index={index} />
          } else {
            return <ImagePost messageBody={message.messageBody} mediaUrl={message.mediaUrl0} />
          }
        })}
      </div>
    </div>
  );
};

export default MessageDisplay;
