import MessageDisplay from "./MessageDisplay";
import UserInteraction from "./UserInteraction";
import styles from "./SimpleSmartphoneComponent.module.css";
import React, {FunctionComponent, useEffect, useRef} from 'react';
import {Container, Box, List, ListItem, Grid} from "@mui/material";
import SmartphoneProps from "interfaces/SimpleSmartphoneComponentProps";

const SimpleSmartphoneComponent: FunctionComponent<SmartphoneProps> = ({
  onSend,
  onTyping,
  messages,
  mainImageUrl
}) => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    list.scrollTop = list.scrollHeight;
  }, [listRef.current?.scrollHeight]);

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
      <MessageDisplay messages={messages}/>
      {onSend &&
        <Box ref={listRef}>
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
