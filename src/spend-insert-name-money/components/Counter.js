import React, { useState, useContext } from "react";
import styled from "styled-components";

const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  flex-grow: 1;
  text-align: center;
  width: 60%;
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

  &:disabled {
    background: grey;
    cursor: default;
  }
`;
const SellButton = styled(Button)`
  background: deeppink;
`;

function Counter({ dispatchNetWorth, price, netWorth }) {
  const [amount, setAmount] = useState(0);

  const sellButtonClick = () => {
    if (amount > 0) {
      setAmount(prevAmount => prevAmount - 1);
      let pricea = price;
      dispatchNetWorth({ type: "SELL", pricea });
    }
  };
  const buyButtonClick = () => {
    // console.log(amount);
    setAmount(prevAmount => prevAmount + 1);
    let pricea = price;
    dispatchNetWorth({ type: "BUY", pricea });
  };

  const handleChange = e => {
    setAmount(e.target.value);
    console.log(e.target.value);
  };

  return (
    <CountWrapper>
      <SellButton onClick={sellButtonClick}>Sell</SellButton>
      <Input
        type="number"
        value={amount}
        onChange={handleChange}
        pattern="\d*"
      ></Input>
      <BuyButton disabled={netWorth < price} onClick={buyButtonClick}>
        Buy
      </BuyButton>
    </CountWrapper>
  );
}

export default Counter;
