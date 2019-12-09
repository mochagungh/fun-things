import { createGlobalStyle } from "styled-components";

export const GLobalStyles = createGlobalStyle`
  * {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1b6ad1;
    color: black;
    height: 100vh;
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
