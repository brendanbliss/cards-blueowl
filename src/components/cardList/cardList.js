import { makeStyles } from '@material-ui/core';
import Card from '../card';

const useStyles = makeStyles(() => ({
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    padding: "20px",
    maxHeight: "100%",
    overflow: "auto",
    marginRight: "250px",
    position: "absolute",
    top: "65px",
    bottom: "65px"
  }
}));

const CardList = (props) => {
  const cards = props.cards;

  const classes = useStyles();

  return (
    <div className={classes.cardContainer} id="card-list-container">
      {cards.map(c => (
        <Card card={c} key={c.id} handleDeleteCard={props.handleDeleteCard}  />
      ))}
    </div>
  )
}

export default CardList;