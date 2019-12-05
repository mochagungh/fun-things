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
    background: orange;
    color: black;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;

    &::-webkit-scrollbar {
      width: 8px;
      background-color: #F5F5F5;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
      background-color: #F5F5F5;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #555;
    }
  }


`;
