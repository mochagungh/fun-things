import React from "react";

import { GLobalStyles } from "./GlobalStyles";
import Navbar from "./components/Navbar";
import Person from "./components/Person";
import ItemCard from "./components/Item";

const initialNetWorth = 100000;

function SpendMoney() {
  return (
    <>
      <GLobalStyles />
      <Navbar />
      <Person />
      <ItemCard initialNetWorth={initialNetWorth} />
    </>
  );
}

export default SpendMoney;
