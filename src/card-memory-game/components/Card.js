import React, { useState } from "react";
import styled from "styled-components";
import { CardWrapper } from "./CardWrapper";
import { CardList } from "./CardList";
import backCard from "../res/random2/10.svg";

const CardItem = styled.div`
  width: calc(25% - 10px);
  height: calc(33.333% - 10px);
  margin: 5px;
  position: relative;
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform 0.5s;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

  &:active {
    transform: scale(0.97);
    transition: transform 500ms;
  }

  &.flip {
    transform: rotateY(180deg);
  }
`;

const AllCard = styled.img`
  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
  border-radius: 4px;
  transform: scale(1);
  transform-style: preserve-3d;
  backface-visibility: hidden;

  &:active {
    transform: scale(0.97);
    transition: transform 500ms;
  }

  &.flip {
    transform: rotateY(180deg);
  }
`;

const FrontCard = styled(AllCard)`
  transform: rotateY(180deg);
`;

const BackCard = styled(AllCard)``;

function Card() {
  const [flip, setFlip] = useState(false);
  const toggleClass = i => {
    console.log(i);
    setFlip(!flip);
    console.log(flip);
  };

  return (
    <CardWrapper>
      {CardList.map((list, i) => (
        <CardItem
          onClick={toggleClass}
          className={flip ? "flip" : null}
          key={i}
        >
          <FrontCard alt="img" src={list.img} />
          <BackCard alt="img" src={backCard} />
        </CardItem>
      ))}
    </CardWrapper>
  );
}

export default Card;
