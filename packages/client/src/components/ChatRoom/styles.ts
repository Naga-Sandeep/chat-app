import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    chatContainer: {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: '10px',
    },
    heading: {
      margin: '15px',
      textDecoration: 'underline',
    },
    friendsList: {
      borderRight: `1px solid ${theme.palette.primary.light}`,
    },
    contentContainer: {
      borderTop: `1px solid ${theme.palette.primary.light}`,
    },
  })
);
