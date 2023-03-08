import React, {FunctionComponent} from 'react';
import styles from "./ImagePost.module.css";

interface Props {
  index: number;
  mediaUrl: string;
  messageBody: string;
}

const ImagePost: FunctionComponent<Props> = ({index, messageBody, mediaUrl}) => {
  return (
    <div key={index} className={styles.smartphoneBubbleOnImagePost}>
      <img src={mediaUrl} className={styles.messageImageOnImagePost} alt={'/logo512.png'}/>
      {messageBody}
    </div>
  );
}