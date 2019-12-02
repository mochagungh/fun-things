import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
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
`;

function MoneyState() {
  return (
    <Wrapper>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio
        maiores qui itaque 
      </p>
    </Wrapper>
  );
}

export default MoneyState;
