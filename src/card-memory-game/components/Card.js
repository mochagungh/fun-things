import React from "react";
import styled from "styled-components";
import { CardWrapper } from "./CardWrapper";
import { CardList } from "./CardList";

const CardItem = styled.div``;

const FrontCard = styled.img`
  width: 100px;
  height: 100px;
  background: #f5f5f5;
`;

const BackCard = styled.img`
  width: 100px;
  height: 100px;
  background: #f5f5f5;
`;

function Card() {
  return (
    <CardWrapper>
      <CardItem>
        {CardList.map(list => (
          <>
            <FrontCard src={list.img} />
            <BackCard src={list.img} />
          </>
        ))}
      </CardItem>
    </CardWrapper>
  );
}

export default Card;
