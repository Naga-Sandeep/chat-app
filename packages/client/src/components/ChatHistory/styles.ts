import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    chatHistory: {
      minHeight: 500,
      padding: '15px',
    },
    messageWrapper: {
      margin: '10px 0',
    },
  })
);
