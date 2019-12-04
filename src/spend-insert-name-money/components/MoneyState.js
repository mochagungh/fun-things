import React, { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 70%;
  min-height: 5em;
  background: #eceff1;
  color: #000;
  margin: -0.5em auto;
  border-radius: 4px;
  position: sticky;
  top: 0;
  z-index: 1;
  /* box-shadow: 0 5px 20px -10px #000; */
  display: flex;
  justify-content: center;
`;

function MoneyState({ netWorth }) {
  return (
    <Wrapper>
      <h2>$ {netWorth}</h2>
    </Wrapper>
  );
}

export default MoneyState;
