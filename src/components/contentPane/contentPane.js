import { useState } from 'react';
import Header from '../header';
import CardList from '../cardList';
import Footer from '../footer';

const ContentPane = () => {
  const [state, setState] = useState({
    cards: []
  });

  const handleAddCard = () => {
    const newCard = {
      id: state.cards.length + 1,
      value: Math.floor((Math.random() * 101))
    }

    const cards = state.cards.concat(newCard);

    setState({ ...state, cards})
  }

  const handleSortCards = () => {
    const cards = [].concat(state.cards).sort((a, b) => {return a.value - b.value});

    setState({ ...state, cards})
  }

  return (
    <div>
      <Header handleAddCard={handleAddCard} handleSortCards={handleSortCards} />
      <CardList cards={state.cards} />
      <Footer />
    </div>
  )
}

export default ContentPane;