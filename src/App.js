import React from "react";
import { GLobalStyles } from "./GlobalStyles";
import Title from "./components/Title";
import { CardWrapper } from "./components/Cardwrapper";
import Card from "./components/Card";

function App() {
  return (
    <>
      <GLobalStyles />
      <Title />
      <CardWrapper>
        <Card />
        <Card />
      </CardWrapper>
    </>
  );
}

export default App;
