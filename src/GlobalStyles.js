import { createGlobalStyle } from "styled-components";

export const GLobalStyles = createGlobalStyle`
  html,
  body {  
    margin: 0;
    box-sizing: border-box;
  }
  
  *,
  :before,
  :after {
    box-sizing: inherit;
  }

  body {
    background: #ffb300;
    color: black;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }



`;
