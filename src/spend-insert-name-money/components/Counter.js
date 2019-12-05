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

  &:disabled {
    background: grey;
    cursor: default;
  }
`;

function Counter({
  dispatchNetWorth,
  price,
  initialNetWorth = 100000,
  netWorth
}) {
  const [amount, setAmount] = useState(0);

  const sellButtonClick = () => {
    if (amount > 0) {
      setAmount(prevAmount => prevAmount - 1);
      let pricea = price;
      dispatchNetWorth({ type: "SELL", pricea });
    }
  };
  const buyButtonClick = () => {
    setAmount(prevAmount => prevAmount + 1);
    // console.log(amount);
    let pricea = price;
    dispatchNetWorth({ type: "BUY", pricea });
  };

  const handleChange = e => {
    // console.log(typeof e.target.value);
    console.log(e);
    setAmount(Number(e.target.value));
    let pricea = Number(e.target.value) * price;
    console.log(pricea);
    dispatchNetWorth({ type: "BUY" || "SELL", pricea });
  };

  return (
    <CountWrapper>
      <SellButton
        disabled={netWorth === initialNetWorth}
        onClick={sellButtonClick}
      >
        Sell
      </SellButton>
      <Input
        type="text"
        value={amount}
        onChange={handleChange}
        // onInput={e => setAmount(e.target.value)}
        // onInput={handleInput}
        pattern="\d*"
        readOnly
        disabled
      />
      <BuyButton disabled={netWorth < price} onClick={buyButtonClick}>
        Buy
      </BuyButton>
    </CountWrapper>
  );
}

export default Counter;
