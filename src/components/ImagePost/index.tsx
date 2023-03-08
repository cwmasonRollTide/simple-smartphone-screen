import styles from "./ImagePost.module.css";
import {Box, Grid, Typography} from "@mui/material";
import Message from "../../interfaces/Message";
import React, {FunctionComponent} from 'react';
import TextPost from "components/TextPost";

interface ImagePostProps {
  index: number;
  message: Message;
}

const ImagePost: FunctionComponent<ImagePostProps> = ({message, index}) => {
  return (
    <Grid container key={index} className={styles.smartphoneBubbleOnImagePost}>
      <Grid item xs={12}>
        <img
          src={message.media}
          alt={'nothing'}
          className={styles.messageImageOnImagePost}
        />
      </Grid>
      <Grid item xs={12}>
        <TextPost index={index} message={message} />
      </Grid>
    </Grid>
  );
}

export default ImagePost;