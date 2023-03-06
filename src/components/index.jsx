import React from 'react';
import PropTypes from "prop-types";
import "./SimpleSmartphoneComponent.css";
import MessageDisplay from "./MessageDisplay";

function SimpleSmartphoneComponent({messages, mainImageUrl}) {
  return (
    <div className="smartphone">
      <div className="smartphone-container">
        <div className="main-image-container">
          <img src={mainImageUrl} className="main-image" alt={'/logo512.png'}/>
        </div>
        <MessageDisplay messages={messages} />
      </div>
    </div>
  );
}

SimpleSmartphoneComponent.propTypes = {
  mainImageUrl: PropTypes.string,
  messages: PropTypes.arrayOf({
    image: PropTypes.string,
    messageBody: PropTypes.string.isRequired
  })
};

export { SimpleSmartphoneComponent };

