import React from "react";
import Card from "./Card";
import { CardWrapper } from "./Cardwrapper";

function RouteCard() {
  return (
    <CardWrapper>
      <Card to="/spend-money" label="spendMoney" />
      <Card to="/memory-game" label="Memory Game" />
    </CardWrapper>
  );
}

export default RouteCard;
