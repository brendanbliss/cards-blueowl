import { makeStyles } from '@material-ui/core';
import Card from '../card';

const useStyles = makeStyles(() => ({
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    padding: "20px",
    height: "100%",
    margin: "65px 0"
  }
}));

const CardList = (props) => {
  const cards = props.cards;

  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      {cards.map(c => (
        <Card card={c} key={c.id} handleDeleteCard={props.handleDeleteCard}  />
      ))}
    </div>
  )
}

export default CardList;