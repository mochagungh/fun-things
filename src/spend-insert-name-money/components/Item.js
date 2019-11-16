import React from "react";
import styled from "styled-components";
import { ItemWrapper } from "./ItemWrapper";

const Item = styled.div`
  width: 15em;
  height: 10em;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 2px 0 15px #000;
  margin: 0px 0px 2em;
`;

function ItemCard() {
  return (
    <ItemWrapper>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </ItemWrapper>
  );
}

export default ItemCard;
