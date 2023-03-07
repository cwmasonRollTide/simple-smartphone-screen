import React from "react";
import TextPost from "../TextPost";
// import ImagePost from "../ImagePost";
import styles from "./MessageDisplay.module.css";
import {Grid} from "@mui/material";

export default function MessageDisplay({messages}) {
  return (
    <div className={styles.smartphoneConversation}>
      {messages.map((message, index) => {
        return (
          <Grid item xs={12}>
            <TextPost index={index} message={message.messageBody} />
          </Grid>
        );
      })}
    </div>
  );
}
