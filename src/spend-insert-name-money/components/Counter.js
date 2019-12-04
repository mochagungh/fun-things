import React, { useState, useContext } from "react";
import styled from "styled-components";

const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  justify-content: center;
`;

const Input = styled.input`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 0.5rem;
  height: 100%;
  width: 3rem;
  border: none;
  color: whitesmoke;
  box-shadow: 0px 1px 1px #000;
  cursor: pointer;
`;
const BuyButton = styled(Button)`
  background: lightgreen;
`;
const SellButton = styled(Button)`
  background: deeppink;
`;

function Counter({ dispatchNetWorth }) {
  return (
    <CountWrapper>
      <SellButton onClick={() => dispatchNetWorth({ type: "sell" })}>
        Sell
      </SellButton>
      <Input type="number" pattern="\d*"></Input>
      <BuyButton onClick={() => dispatchNetWorth({ type: "buy" })}>
        Buy
      </BuyButton>
    </CountWrapper>
  );
}

export default Counter;
