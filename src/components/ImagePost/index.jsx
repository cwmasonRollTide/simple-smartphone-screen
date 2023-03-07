import React from 'react';
import styles from "./ImagePost.module.css";

export default function ImagePost({index, messageBody, mediaUrl}) {
  return (
    <div key={index} className={styles.smartphoneBubble}>
      <img src={mediaUrl} className={styles.messageImage} alt={'/logo512.png'}/>
      {messageBody}
    </div>
  );
}