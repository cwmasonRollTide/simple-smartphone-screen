import React from 'react';
import PropTypes from "prop-types";
import {Container, Grid, Box} from "@mui/material";
import MessageDisplay from "./MessageDisplay";
import styles from "./SimpleSmartphoneComponent.module.css";

export default function SimpleSmartphoneComponent({messages, mainImageUrl}) {
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

SimpleSmartphoneComponent.propTypes = {
  mainImageUrl: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    messageBody: PropTypes.string
  }))
};
