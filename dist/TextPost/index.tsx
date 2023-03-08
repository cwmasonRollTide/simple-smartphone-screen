import React, {FunctionComponent} from "react";
import styles from "./TextPost.module.css";
import {Box, Grid, ListItem, Typography} from "@mui/material";
import clsx from "clsx";

interface Message {
  from: string | null;
  messageBody: string;
  
}

interface Props {
  index: number;
  message: Message;
}

const TextPost: FunctionComponent<Props> = ({index, message}) => {
  return (
    <Box key={index} className={clsx(styles.post, !message.from ? styles.sent : styles.received)}>
      <Typography variant="h4">{message.messageBody}</Typography>
    </Box>
  );
}

export default TextPost;
