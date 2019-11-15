import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  height: 7em;
  background: salmon;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;

  h1,
  p {
    margin: 0;
  }
`;

const Heading = styled.h1``;

const Paragraph = styled.p``;

function Title() {
  return (
    <Wrapper>
      <Heading>Fun Things</Heading>
      <Paragraph>that i create with react</Paragraph>
    </Wrapper>
  );
}

export default Title;
