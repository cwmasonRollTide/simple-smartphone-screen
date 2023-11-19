import clsx from "clsx";
import Message from "../../interfaces/Message";
import styles from "./TextPost.module.css";
import {Box, Typography} from "@mui/material";
import React, {FunctionComponent} from "react";

interface Props {
  index: number;
  message: Message;
}

const TextPost: FunctionComponent<Props> = ({index, message}) => {
  return (
    <Box key={index} className={clsx(styles.post, message.from ? styles.received : styles.sent)}>
      <Typography variant="h4">{message.messageBody}</Typography>
    </Box>
  );
}

export default TextPost;
