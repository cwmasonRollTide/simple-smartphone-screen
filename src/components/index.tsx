import MessageDisplay from "./MessageDisplay";
import React, {FunctionComponent} from 'react';
import UserInteraction from "./UserInteraction";
import styles from "./SimpleSmartphoneComponent.module.css";
import {Container, Box, List, ListItem, Grid} from "@mui/material";
import SmartphoneProps from "interfaces/SimpleSmartphoneComponentProps";

const SimpleSmartphoneComponent: FunctionComponent<SmartphoneProps> = ({
  onSend,
  onTyping,
  messages,
  mainImageUrl
}) => {
  return (
    <div className={styles.smartphone}>
      <Grid container>
        {mainImageUrl && (
          <Grid item xs={12} className={styles.imgcontainer}>
            <Box component="img" className={styles.img} src={mainImageUrl} alt={'Person'} />
          </Grid>
        )}
        <MessageDisplay messages={messages} />
        {onSend &&
          <Grid item xs={12} className={styles.user}>
            <UserInteraction onSend={onSend} onTyping={onTyping ? onTyping : () => {}}/>
          </Grid>
        }
      </Grid>
    </div>
  );
}

export default SimpleSmartphoneComponent;
