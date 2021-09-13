import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    container: {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: '10px',
    },
    btn: {
      margin: '20px 15px',
    },
  })
);
