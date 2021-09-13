import React from 'react';
import useStyles from './styles';

const TypingIndicator = () => {
  const classes = useStyles();

  return (
    <div className={classes.typing}>
      <div className={classes.typingDot} />
      <div className={classes.typingDot} />
      <div className={classes.typingDot} />
    </div>
  );
};

export default TypingIndicator;
