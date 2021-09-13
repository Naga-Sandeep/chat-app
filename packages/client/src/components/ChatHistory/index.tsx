import React from 'react';
import { Chip, Grid } from '@material-ui/core';
import useStyles from './styles';

interface ChatHistoryProps {
  user: any;
  chatHistory: any[];
}
const ChatHistory = ({
  chatHistory = [],
  user: { id: userId },
}: ChatHistoryProps) => {
  const classes = useStyles();

  const isOwner = (id: string) => id === userId;

  return (
    <Grid item className={classes.chatHistory}>
      {chatHistory.map(({ message, id }, index) => (
        <Grid
          container
          key={index.toString()}
          className={classes.messageWrapper}
          alignItems={!isOwner(id) ? 'flex-start' : 'flex-end'}
          direction={!isOwner(id) ? 'column-reverse' : 'column'}
        >
          <Chip color={isOwner(id) ? 'primary' : 'secondary'} label={message} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ChatHistory;
