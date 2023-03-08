import styles from "./ImagePost.module.css";
import {Box, Typography} from "@mui/material";
import Message from "../../interfaces/Message";
import React, {FunctionComponent} from 'react';

interface ImagePostProps {
  index: number;
  message: Message;
}

const ImagePost: FunctionComponent<ImagePostProps> = ({message, index}) => {
  return (
    <Box key={index} className={styles.smartphoneBubbleOnImagePost}>
      <img
        src={message.media}
        alt={'nothing'}
        className={styles.messageImageOnImagePost}
      />
      <Typography variant="h4">{message.messageBody}</Typography>
    </Box>
  );
}

export default ImagePost;