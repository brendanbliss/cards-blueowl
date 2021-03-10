import {
  Card as MUCard,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  makeStyles
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
  centerText: {
    textAlign: "center"
  },
  card: {
    width: "240px",
    height: "220px",
    margin: "10px"
  }
}));

const Card = (props) => {
  const card = props.card;
  const classes = useStyles();

  const handleDeleteClick = (id) => {
    props.handleDeleteCard(id);
  }

  return (
    <MUCard className={classes.card}>
      <CardHeader 
        action={
          <IconButton onClick={() => {handleDeleteClick(card.id)}}>
            <CloseIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="h2" className={classes.centerText}>
          {card.value}  
        </Typography>
      </CardContent>
    </MUCard>
  )
}

export default Card;