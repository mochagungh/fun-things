import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../res/logo.png";

const Wrapper = styled.nav`
  width: 100%;
  height: 5em;
  background: #fafafa;
  color: whitesmoke;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-left: 3em;

  h1,
  p {
    margin: 0;
  }
`;

function Navbar() {
  return (
    <Wrapper>
      <Link to="/">
        <img src={logo} alt="logo" height="50" />
      </Link>
    </Wrapper>
  );
}

export default Navbar;
