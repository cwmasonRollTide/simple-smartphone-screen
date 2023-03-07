import React from "react";
import TextPost from "../TextPost";
import ImagePost from "../ImagePost";
import styles from "./MessageDisplay.module.css";

export default function MessageDisplay({messages}) {
  return (
    <div className={styles.smartphoneConversation}>
      {messages.map((message, index) => {
        if (!message.image) {
          return <TextPost message={message.messageBody} index={index} />;
        } else {
          return <ImagePost messageBody={message.messageBody} mediaUrl={message.image} />;
        }
      })}
    </div>
  );
}
