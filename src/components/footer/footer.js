import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footer: {
    top: 'auto',
    bottom: 0
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed" 
      className={classes.footer}
    >
      <Toolbar>
        <Typography
          variant="h6"
        >
          Footer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;