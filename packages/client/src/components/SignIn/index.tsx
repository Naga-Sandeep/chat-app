import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import useStyles from '../app/styles';

interface SignInProps {
  setUserName: (inputValue: string) => void;
}

const SignIn = ({ setUserName }: SignInProps) => {
  const [inputValue, setInputValue] = useState('');
  const classes = useStyles();

  const chatNow = (event: any) => {
    event.preventDefault();
    setUserName(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={chatNow}>
      <Grid
        container
        alignItems="center"
        justify="center"
        spacing={2}
        className={classes.container}
      >
        <Grid item xs={12} md={2} lg={2}>
          <h2>Enter you name:</h2>
        </Grid>
        <Grid item xs={12} md={3} lg={2}>
          <TextField
            id="userName"
            label="Name"
            variant="outlined"
            placeholder="Type your name here..."
            autoComplete="off"
            margin="normal"
            size="small"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            fullWidth
            autoFocus
          />
        </Grid>
        <Grid item xs={12} md={2} lg={1}>
          <Button
            className={classes.btn}
            disabled={!inputValue}
            variant="contained"
            color="primary"
            size="medium"
            type="submit"
            fullWidth
          >
            Chat Now!
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignIn;
