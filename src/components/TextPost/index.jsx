import React from  "react";
import styles from "./TextPost.module.css";

export default function TextPost({index, message}) {
  return (
    <div key={index} className={styles.smartphoneBubble}>
      {message}
    </div>
  );
}
