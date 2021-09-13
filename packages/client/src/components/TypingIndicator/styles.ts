import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    typing: {
      width: '3.5em',
      height: '2em',
      position: 'relative',
      padding: '10px',
      margin: '15px',
      background: '#e6e6e6',
      borderRadius: '40px',
    },
    typingDot: {
      float: 'left',
      width: '8px',
      height: '8px',
      margin: '12px 5px',
      background: '#8d8c91',
      borderRadius: '50%',
      opacity: '0',
      animation: `$loadingFade 1s infinite`,
      '&:nth-child(1)': { animationDelay: '0s' },
      '&:nth-child(2)': { animationDelay: '0.2s' },
      '&:nth-child(3)': { animationDelay: '0.4s' },
    },
    '@keyframes loadingFade': {
      '0%': { opacity: '0' },
      '50%': { opacity: '0.8' },
      '100%': { opacity: '0' },
    },
  })
);
