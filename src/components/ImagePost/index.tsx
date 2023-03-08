import styles from "./ImagePost.module.css";
import {Box, Grid, Typography} from "@mui/material";
import Message from "../../interfaces/Message";
import React, {FunctionComponent} from 'react';
import TextPost from "../TextPost/index";

interface ImagePostProps {
  index: number;
  message: Message;
}

const ImagePost: FunctionComponent<ImagePostProps> = ({message, index}) => {
  return (
    <Grid container key={index} className={styles.post}>
      <Grid item xs={12} sx={{justifyItems: 'center', justifyContent: 'center', display: 'flex', float: 'center'}}>
        <img
          src={message.media}
          alt={'nothing'}
          className={styles.image}
        />
      </Grid>
      <Grid item xs={12}>
        <TextPost index={index} message={message} />
      </Grid>
    </Grid>
  );
}

export default ImagePost;