import React, { useState, useEffect } from "react";
import { GLobalStyles } from "./GlobalStyles";
import CardBoard from "./components/CardBoard";
import initialCardList from "./components/CardList";

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flip, setFlip] = useState([]);

  useEffect(() => {
    setCards(initialCardList());
  }, []);

  const handleClick = id => {
    setFlip([...flip, id]);
  };

  return (
    <>
      <GLobalStyles />
      <CardBoard cards={cards} flip={flip} handleClick={handleClick} />
    </>
  );
}

export default MemoryGame;
