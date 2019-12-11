import React from "react";
import styled from "styled-components";

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
`;

const FrontCard = styled(AllCard)`
  transform: rotateY(180deg);
`;

const BackCard = styled(AllCard)``;

function Card({ id, key, type, handleClick, flip }) {
  return (
    <CardItem
      key={key}
      onClick={() => handleClick(id)}
      className={flip ? "flip" : null}
    >
      <FrontCard alt={"front card"} src={`/res/cards/${type}.svg`} />
      <BackCard alt={"back card"} src={"/res/cards/9.svg"} />
    </CardItem>
  );
}

export default Card;
