import React from 'react';
import PropTypes from "prop-types";
import "./SimpleSmartphoneComponent.css";
import MessageDisplay from "./MessageDisplay";

const SimpleSmartphoneComponent = (messages, mainImageUrl) => {
  return (
    <div className="component">
      <div className="smartphone-container">
        <div className="main-image-container">
          <img src={mainImageUrl} className="main-image"/>
        </div>
        <MessageDisplay messages={messages} />
      </div>
    </div>
  );
};

SimpleSmartphoneComponent.propTypes = {
  messages: PropTypes.arrayOf({
    image: PropTypes.string,
    messageBody: PropTypes.string.isRequired
  }),
  mainImageUrl: PropTypes.string
};
export default SimpleSmartphoneComponent;

