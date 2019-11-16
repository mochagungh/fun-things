import React from "react";

import { GLobalStyles } from "./GlobalStyles";
import Navbar from "./components/Navbar";
import Person from "./components/Person";
import MoneyState from "./components/MoneyState";
import ItemCard from "./components/Item";

function SpendMoney() {
  return (
    <>
      <GLobalStyles />
      <Navbar />
      <Person />
      <MoneyState />
      <ItemCard />
    </>
  );
}

export default SpendMoney;
