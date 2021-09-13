import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import useStyles from './styles';

interface TypeBoxProps {
  onSend: (message: string) => void;
  // sendTypingStart: () => void;
  // sendTypingStop: () => void;
}

const INITIAL_MSG_STATE = '';

const TypeBox = ({ onSend }: TypeBoxProps) => {
  const classes = useStyles();
  const [message, setMessage] = useState(INITIAL_MSG_STATE);

  const sendMessage = (event: any) => {
    event.preventDefault();
    onSend(message);
    setMessage(INITIAL_MSG_STATE);
  };

  return (
    <form onSubmit={sendMessage}>
      <Grid container>
        <Grid item sm={10}>
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            placeholder="Type your message here..."
            autoComplete="off"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            autoFocus
            // onFocus={sendTypingStart}
            // onBlur={sendTypingStop}
          />
        </Grid>
        <Grid item sm={2}>
          <Button
            className={classes.sendBtn}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TypeBox;
