import React from "react";
import Card from "./Card";
import { CardWrapper } from "./Cardwrapper";

function RouteCard() {
  return (
    <CardWrapper>
      <Card to="/spend-money" label="spendMoney" />
      <Card />
    </CardWrapper>
  );
}

export default RouteCard;
