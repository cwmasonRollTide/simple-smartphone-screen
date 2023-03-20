import TextPost from "../TextPost";
import ImagePost from "../ImagePost";
import {List, ListItem} from "@mui/material";
import Message from "../../interfaces/Message";
import styles from "./MessageDisplay.module.css";
import React, {FunctionComponent, MutableRefObject, useEffect, useRef} from "react";

interface MessageDisplayProps {
  messages: Message[];
}

const MessageDisplay: FunctionComponent<MessageDisplayProps> = ({messages}) => {

  /**
   * TODO: Refactor to follow better design pattern once we have video example
   * @param message
   * @param index
   */
  const postFactory = (message: Message, index: number) => {
    switch (message?.media) {
      case null:
      case undefined:
        return <TextPost index={index} message={message} />;
      default:
        return <ImagePost index={index} message={message} />;
    }
  };
  
  return (
    <List className={styles.list}>
      {messages.map((message, index) => {
        return (
          <ListItem
            key={index}
            className={!message.from ? styles.message : styles.message}
          >
            {postFactory(message, index)}
          </ListItem>
        );
      })}
    </List>
  );
}

export default MessageDisplay;