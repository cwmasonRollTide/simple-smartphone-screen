import React from  "react";
import styles from "./TextPost.module.css";
import {Box, Grid, ListItem, Typography} from "@mui/material";

export default function TextPost({index, message}) {
  return (
    <Box key={index} className={styles.sent}>
      <Typography variant="h4">{message}</Typography>
    </Box>
  );
}
