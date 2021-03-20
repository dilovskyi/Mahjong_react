import React, { useRef, useState } from "react";
import "./App.css";
import Mahjong from "./containers/Mahjong/Mahjong";
import CardGenerator from "./components/CardGenerator/CardGenerator";

export const ContextApp = React.createContext();

function App() {
  //Here can be state of input-option
  const cardsTotal = 10;
  const prevCards = useRef([]);
  const prevCardValue = useRef(null);

  return (
    <Mahjong>
      <ContextApp.Provider value={[prevCards, prevCardValue]}>
        <CardGenerator cardsTotal={cardsTotal} />
      </ContextApp.Provider>
    </Mahjong>
  );
}

export default App;
