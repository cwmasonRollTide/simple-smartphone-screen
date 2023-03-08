import TextPost from "../TextPost";
import ImagePost from "../ImagePost";
import {ListItem} from "@mui/material";
import React, {FunctionComponent} from "react";
import Message from "../../interfaces/Message";
import styles from "./MessageDisplay.module.css";

interface MessageDisplayProps {
  messages: Message[]
}

const MessageDisplay: FunctionComponent<MessageDisplayProps> = ({messages}) => {
  
  const postFactory = (message: Message, index: number) => {
    switch (message?.media) {
      case null:
      case undefined:
        return <TextPost index={index} message={message} />;
      default:
        return <ImagePost index={index} message={message} />;
    }
  }
  
  return (
    <div className={styles.list}>
      {messages.map((message, index) => {
        return (
          <ListItem key={index} className={!message.from ? styles.message : styles.message}>
            {postFactory(message, index)}
          </ListItem>
        );
      })}
    </div>
  );
}

export default MessageDisplay;