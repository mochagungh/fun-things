import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 5em;
  height: 7em;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 2px 0 15px #000;
`;

function Card() {
  return <Wrapper></Wrapper>;
}

export default Card;
