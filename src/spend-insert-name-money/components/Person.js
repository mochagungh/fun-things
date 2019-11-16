import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 70%;
  height: 10em;
  background: #eceff1;
  color: #000;
  margin: 1em auto;
  border-radius: 4px;
`;

function Person() {
  return <Wrapper></Wrapper>;
}

export default Person;
