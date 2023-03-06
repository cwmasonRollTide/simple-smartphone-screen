import React from 'react';
import "./SimpleSmartphoneComponent.css";
import MessageDisplay from "./MessageDisplay";

const SimpleSmartphoneComponent = ({messages}) => {
  return (
    <div className="App">
      <MessageDisplay messages={messages} />
    </div>
  );
};

export default SimpleSmartphoneComponent;