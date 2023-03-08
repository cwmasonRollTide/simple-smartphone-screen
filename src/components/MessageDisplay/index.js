import React from "react";
import TextPost from "../TextPost";
// import ImagePost from "../ImagePost";
import {Box, Container, Grid, List} from "@mui/material";
import styles from "./MessageDisplay.module.css";

export default function MessageDisplay({messages}) {
  return (
    <Grid container className={styles.list}>
      {messages.map((message, index) => {
        return (
          <Grid key={index} item xs={12} className={styles.message}>
            <TextPost index={index} message={message.messageBody} />
          </Grid>
        );
      })}
    </Grid>
  );
}
