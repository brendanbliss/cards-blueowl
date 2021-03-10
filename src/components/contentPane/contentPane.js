import { useState } from 'react';
import Header from '../header';
import CardList from '../cardList';
import Footer from '../footer';

const ContentPane = () => {
  const [state, setState] = useState({
    cards: [],
    idSeed: 0
  });

  const handleAddCard = () => {
    const newIdSeed = state.idSeed++;

    const newCard = {
      id: newIdSeed,
      value: Math.floor((Math.random() * 101))
    }

    const cards = state.cards.concat(newCard);

    setState({ ...state, cards, newIdSeed})
  }

  const handleSortCards = () => {
    const cards = [].concat(state.cards).sort((a, b) => {return a.value - b.value});

    setState({ ...state, cards})
  }

  const handleDeleteCard = (cardId) => {
    const cards = state.cards.filter(c => c.id !== cardId);

    setState({ ...state, cards})
  }

  return (
    <div>
      <Header handleAddCard={handleAddCard} handleSortCards={handleSortCards}/>
      <CardList cards={state.cards} handleDeleteCard={handleDeleteCard} />
      <Footer />
    </div>
  )
}

export default ContentPane;