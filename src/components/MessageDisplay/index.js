import React from 'react';
import './MessageDisplay.css';
import TextPost from "../TextPost";
import ImagePost from "../ImagePost";

const MessageDisplay = ({messages}) => {
  return (
    <div className="smartphone-conversation">
      {messages.map((message, index) => {
        if (!message.image) {
          return <TextPost message={message.messageBody} index={index} />;
        } else {
          return <ImagePost messageBody={message.messageBody} mediaUrl={message.image} />;
        }
      })}
    </div>
  );
};

export default MessageDisplay;
