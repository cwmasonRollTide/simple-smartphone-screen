import React, { FunctionComponent } from 'react';
import {Container, Grid, Box} from "@mui/material";
import MessageDisplay from "./MessageDisplay";
import styles from "./SimpleSmartphoneComponent.module.css";

interface Props {
  messages: any[];
  mainImageUrl: string | null;
}

const SimpleSmartphoneComponent: FunctionComponent<Props> = ({messages, mainImageUrl}) => {
  return (
    <Container className={styles.smartphone}>
      <Grid container>
        {mainImageUrl && (
          <Grid item xs={12} className={styles.message}>
            <Box component="img" src={mainImageUrl} alt={'Person'}/>
          </Grid>
        )}
        <MessageDisplay messages={messages} />
      </Grid>
    </Container>
  );
}

export default SimpleSmartphoneComponent;
