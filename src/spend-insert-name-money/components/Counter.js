import React, { useState } from "react";
import styled from "styled-components";

const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  justify-content: center;
`;
const TextArea = styled.textarea`
  flex: 1;
`;

const Button = styled.button`
  height: 100%;
  width: 3rem;
  background: deeppink;
  cursor: pointer;
`;
const PlusButton = styled(Button)``;
const MinusButton = styled(Button)``;

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <CountWrapper>
      <PlusButton>{count}</PlusButton>
      <TextArea />
      <MinusButton>{count}</MinusButton>
    </CountWrapper>
  );
}

export default Counter;
