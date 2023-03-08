import React, { FunctionComponent } from 'react';
import {Container, Grid, Box} from "@mui/material";
import MessageDisplay from "./MessageDisplay";
import styles from "./SimpleSmartphoneComponent.module.css";
import Message from "interfaces/Message";

interface SmartphoneProps {
  onSend?: Function;
  messages: Message[];
  mainImageUrl?: string;
}

const SimpleSmartphoneComponent: FunctionComponent<SmartphoneProps> = ({messages, mainImageUrl}) => {
  return (
    <Container className={styles.smartphone}>
      <Grid container>
        {mainImageUrl && (
          <Grid item xs={12} className={styles.imgcontainer}>
            <Box component="img" className={styles.img} src={mainImageUrl} alt={'Person'} />
          </Grid>
        )}
        <MessageDisplay messages={messages} />
      </Grid>
    </Container>
  );
}

export default SimpleSmartphoneComponent;
