import TextPost from "../TextPost";
import {Grid} from "@mui/material";
import ImagePost from "../ImagePost";
import React, {FunctionComponent} from "react";
import Message from "../../interfaces/Message";
import styles from "./MessageDisplay.module.css";

interface Props {
  messages: Message[]
}

const MessageDisplay: FunctionComponent<Props> = ({messages}) => {
  
  const postFactory = (message: Message, index: number) => {
    switch (message.media) {
      case null:
      case undefined:
        return <TextPost index={index} message={message} />;
      default:
        return <ImagePost message={message}  index={index}/>;
    }
  }
  
  return (
    <Grid container className={styles.list}>
      {messages.map((message, index) => {
        return (
          <Grid key={index} item xs={12} className={!message.from ? styles.message : styles.message}>
            {postFactory(message, index)}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default MessageDisplay;