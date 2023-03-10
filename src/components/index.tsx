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
    <Container className={styles.smartphone}>
      {mainImageUrl && (
        <Box justifyContent="center" className={styles.imgcontainer}>
          <img
            alt={'Person'}
            src={mainImageUrl}
            className={styles.img}
            style={{justifySelf: "center"}}
          />
        </Box>
      )}
      <MessageDisplay messages={messages} />
      {onSend &&
        <Box>
          <UserInteraction
            onSend={onSend}
            onTyping={onTyping ? onTyping : () => {}}
          />
        </Box>
      }
    </Container>
  );
}

export default SimpleSmartphoneComponent;
