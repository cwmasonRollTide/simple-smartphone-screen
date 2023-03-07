import React from 'react';
import PropTypes from "prop-types";
import MessageDisplay from "./MessageDisplay";
import styles from "./SimpleSmartphoneComponent.module.css";

export default function SimpleSmartphoneComponent(messages, mainImageUrl) {
  return (
    <div className={styles.smartphone}>
      <div className={styles.smartphoneContainer}>
        {mainImageUrl && (
          <div className={styles.mainImageContainer}>
            <img src={mainImageUrl} className={styles.mainImage} alt={'/logo512.png'}/>
          </div>
        )}
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
