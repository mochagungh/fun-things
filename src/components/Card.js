import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CardWrapper } from "./Cardwrapper";

const Wrapper = styled.div`
  min-width: 15em;
  height: 15em;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 2px 0 15px #000;
  margin: 0px 0px 2em;
  break-inside: avoid;
`;

function Card({ to, label }) {
  return (
    <CardWrapper>
      <Wrapper>
        <Link to={to}>{label}</Link>
      </Wrapper>
    </CardWrapper>
  );
}

export default Card;
