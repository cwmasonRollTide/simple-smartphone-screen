import styles from "./UserInteraction.module.css";
import SendIcon from '@mui/icons-material/Send';
import {Box, Button, Container, Grid, InputAdornment, TextField} from "@mui/material";
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
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key.toLowerCase() === "enter") {
      event.preventDefault();
      onSend(typedContent);
      setTypedContent('');
    }
  };
  
  return (
    <Grid container className={styles.container} onKeyDown={handleKeyDown}>
      <Box className={styles.text}>
        <TextField
          type="text"
          variant="outlined"
          value={typedContent}
          onChange={handleTyping}
          className={styles.input}
        />
        <Box className={styles.btnctn}>
          <Button className={styles.button} onClick={handleSend} endIcon={<SendIcon />} />
        </Box>
      </Box>
    </Grid>
  );
}

export default UserInteraction;