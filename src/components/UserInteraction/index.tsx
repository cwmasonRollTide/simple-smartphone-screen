import styles from "./UserInteraction.module.css";
import SendIcon from '@mui/icons-material/Send';
import {Box, Button, Container, Grid, TextField} from "@mui/material";
import React, {ChangeEvent, FunctionComponent, useState} from "react";

interface UserInteractionProps {
  onSend: (value: string) => void;
  onTyping?: (value: string) => void;
}

const UserInteraction: FunctionComponent<UserInteractionProps> = ({
  onSend,
  onTyping
}) => {
  const [typedContent, setTypedContent] = useState<string | undefined>('');
  
  const handleSend = () => {
    if (typedContent)
      onSend(typedContent);
    setTypedContent('');
  }
  
  const handleTyping = (event: ChangeEvent<HTMLInputElement>) => {
    const typed = event?.target?.value ?? undefined;
    setTypedContent(typed);
    if (onTyping) {
      onTyping(typed);
    }
  };
  
  return (
    <div className={styles.container}>
      <Box className={styles.text}>
        <TextField
          type="text"
          value={typedContent}
          onChange={handleTyping}
          className={styles.input}
        />
      </Box>
      <Box className={styles.button}>
        <Button className={styles.button} onClick={handleSend}>
          <SendIcon />
        </Button>
      </Box>
    </div>
  );
}

export default UserInteraction;