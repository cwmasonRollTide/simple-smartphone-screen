import styles from "./ImagePost.module.css";
import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import Message from "../../interfaces/Message";
import React, {FunctionComponent} from 'react';
import TextPost from "../TextPost/index";

interface ImagePostProps {
  index: number;
  message: Message;
}

const ImagePost: FunctionComponent<ImagePostProps> = ({message, index}) => {
  return (
    <Card key={index} className={styles.post}>
      <CardMedia sx={{justifyItems: 'flex-start', justifyContent: 'flex-start', display: 'flex', float: 'flex-start'}}>
        <img
          src={message.media}
          alt={'nothing'}
          className={styles.image}
        />
      </CardMedia>
      <CardContent>
        <TextPost index={index} message={message} />
      </CardContent>
    </Card>
  );
}

export default ImagePost;