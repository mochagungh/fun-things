import React from "react";
import styled from "styled-components";
import { ItemWrapper } from "./ItemWrapper";
import { itemList } from "./ItemList";
import Counter from "./Counter";

const Item = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 1px 0 2px #000;
  border: solid 1px deepskyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 1rem;
`;

function ItemCard() {
  return (
    <ItemWrapper>
      {itemList.map(item => (
        <Item>
          <h3>{item.title}</h3>
          <p>{item.image}</p>
          <p>{item.money}</p>
          <p>{item.ket}</p>
          <Counter />
        </Item>
      ))}
    </ItemWrapper>
  );
}

export default ItemCard;
