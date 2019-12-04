import React, { useReducer } from "react";
import styled from "styled-components";
import { ItemWrapper } from "./ItemWrapper";
import { itemList } from "./ItemList";
import Counter from "./Counter";
import MoneyState from "./MoneyState";

const Item = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 1px 3px #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 1rem;
  border-radius: 8px;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "BUY":
      return state > 0 ? state - action.pricea : 0;
    case "SELL":
      return state + action.pricea;
    default:
      return state;
  }
};

function ItemCard({ initialNetWorth }) {
  const [netWorth, dispatchNetWorth] = useReducer(reducer, initialNetWorth);
  return (
    <>
      <MoneyState netWorth={netWorth} />
      <ItemWrapper>
        {itemList.map((item, i) => (
          <Item key={item[i]}>
            <h3>{item.title}</h3>
            <p>{item.image}</p>
            <p>{item.price}</p>
            <p>{item.ket}</p>
            <Counter price={item.price} dispatchNetWorth={dispatchNetWorth} />
          </Item>
        ))}
      </ItemWrapper>
    </>
  );
}

export default ItemCard;
