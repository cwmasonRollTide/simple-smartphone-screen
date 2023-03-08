import React from 'react';
import PropTypes from "prop-types";
import {Container, Grid} from "@mui/material";
import MessageDisplay from "./MessageDisplay";
import styles from "./SimpleSmartphoneComponent.module.css";

export default function SimpleSmartphoneComponent({messages, mainImageUrl}) {
  return (
    <Container className={styles.smartphone}>
      <Grid container className={styles.smartphoneContainer}>
        {mainImageUrl && (
          <Grid item xs={12} className={styles.mainImageContainer}>
            <img src={mainImageUrl} className={styles.mainImage} alt={'/logo512.png'}/>
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
