import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardWrapper = styled.div`
  width: 35em;
  height: 35em;
  display: flex;
  flex-wrap: wrap;
  perspective: 1000px;
`;

function CardBoard({ cards, handleClick, flip }) {
  return (
    <CardWrapper>
      {cards.map(card => (
        <Card
          id={card.id}
          key={card.id}
          type={card.type}
          flip={flip.includes(card.id)}
          handleClick={() => handleClick(card.id)}
        />
      ))}
    </CardWrapper>
  );
}

export default CardBoard;
