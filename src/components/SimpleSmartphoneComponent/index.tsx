import MessageDisplay from "../MessageDisplay";
import UserInteraction from "../UserInteraction";
import styles from "./SimpleSmartphoneComponent.module.css";
import React, {FunctionComponent, useEffect, useRef} from 'react';
import {Container, Box} from "@mui/material";
import SmartphoneProps from "interfaces/SimpleSmartphoneComponentProps";

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
        <Box display="flex" bgcolor="black" justifyContent="center" alignItems="center" p={2} top={0} position="sticky" zIndex={100}>
          <img
            src={mainImageUrl}
            className={styles.img}
            alt={null}
          />
        </Box>
      )}
      <MessageDisplay messages={messages}/>
      {onSend &&
          <Box display="flex" bgcolor="black" justifyContent="center" alignItems="center" p={2} bottom={0} position="sticky" zIndex={100}>
          <UserInteraction
            onSend={onSend}
            onTyping={onTyping ? onTyping : () => {}}
          />
          <Box ref={listRef}></Box>
        </Box>
      }
    </Container>
  );
}

export default SimpleSmartphoneComponent;
