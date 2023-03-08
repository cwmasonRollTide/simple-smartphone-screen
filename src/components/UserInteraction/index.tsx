import styles from "./UserInteraction.module.css";
import {Button, Container, Grid, TextField} from "@mui/material";
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
    <div className={styles.root}>
      <div className={styles.messageContainer}>
        <Grid item xs={8}>
          <TextField
            variant="standard"
            value={typedContent}
            onChange={handleTyping}
            className={styles.messageInput}
            InputProps={{
              disableUnderline: true
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button className={styles.button} onClick={handleSend}/>
        </Grid>
      </div>
    </div>
  );
}

export default UserInteraction;