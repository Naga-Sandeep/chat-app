import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    app: {
      textAlign: 'center',
    },
    appLogo: {
      height: '40vmin',
    },
    appHeader: {
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white',
    },
    appLink: {
      color: '#61dafb',
    },
  })
);
