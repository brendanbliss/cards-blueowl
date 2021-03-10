import {
  AppBar,
  Button,
  makeStyles,
  Toolbar
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles(() => ({
  headerButton: {
    marginRight: "10px"
  }
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed" 
    >
      <Toolbar>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          className={classes.headerButton}
          onClick={props.handleAddCard}
          >Add Card</Button>
        <Button
          variant="contained"
          startIcon={<SortIcon />}
          className={classes.headerButton}
          onClick={props.handleSortCards}
          >Sort Cards</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;