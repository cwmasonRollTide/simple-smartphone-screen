import React, {FunctionComponent} from "react";
import TextPost from "../TextPost";
import {Box, Container, Grid, List} from "@mui/material";
import styles from "./MessageDisplay.module.css";
import Message from "interfaces/Message";

interface Props {
  messages: Message[]
}

const MessageDisplay: FunctionComponent<Props> = ({messages}) => {
  return (
    <Grid container className={styles.list}>
      {messages.map((message, index) => {
        return (
          <Grid key={index} item xs={12} className={!message.from ? styles.message : styles.message}>
            <TextPost index={index} message={message} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default MessageDisplay;