import React from "react";
import TextPost from "../TextPost";
// import ImagePost from "../ImagePost";
import styles from "./MessageDisplay.module.css";
import {Grid} from "@mui/material";

export default function MessageDisplay({messages}) {
  return (
    <Grid container className={styles.smartphoneConversation}>
      {messages.map((message, index) => {
        return (
          <Grid key={index} item xs={12} className={styles.messageItem}>
            <TextPost index={index} message={message.messageBody} />
          </Grid>
        );
      })}
    </Grid>
  );
}
