import MessageDisplay from "./MessageDisplay";
import UserInteraction from "./UserInteraction";
import styles from "./SimpleSmartphoneComponent.module.css";
import React, {FunctionComponent, useEffect, useRef} from 'react';
import {Container, Box, List, ListItem, Grid, CardHeader, CardMedia, Card} from "@mui/material";
import SmartphoneProps from "interfaces/SimpleSmartphoneComponentProps";
import * as constants from "constants";

const SimpleSmartphoneComponent: FunctionComponent<SmartphoneProps> = ({
  onSend,
  onTyping,
  messages,
  mainImageUrl
}) => {
  const listRef = useRef<HTMLUListElement>(null);
  
  const scrollToBottom = () => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'auto' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  
  return (
    <Container className={styles.smartphone}>
      {mainImageUrl && (
        <CardHeader
          className={styles.imgcontainer}
          avatar={
            <Box className={styles.imgbox}>
              <img
                src={mainImageUrl}
                className={styles.img}
              />
            </Box>
          }
        />
      )}
        <MessageDisplay messages={messages}/>
      {onSend &&
        <Box>
          <UserInteraction
            onSend={onSend}
            onTyping={onTyping ? onTyping : () => {}}
          />
        </Box>
      }
      <Box ref={listRef}></Box>
    </Container>
  );
}

export default SimpleSmartphoneComponent;
