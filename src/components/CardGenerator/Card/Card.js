import React, { useContext, useState, useEffect, useRef } from "react";
import classes from "./Card.module.scss";
import { ContextApp } from "../../../App";

function Card({ value, children }) {
  const [prevCards, prevCardValue] = useContext(ContextApp); //fooo
  const currentCard = useRef();

  const checkCardPair = value => {
    currentCard.current.childNodes[0].style.display = "flex";
    if (prevCardValue.current === value) {
      prevCardValue.current = null;
    } else {
      prevCardValue.current = value;
      prevCards.current.push(currentCard.current);
      if (prevCards.current.length >= 2) {
        prevCards.current.forEach(item => {
          item.childNodes[0].style.display = "none";
        });
        prevCards.current = [];
      }
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //   }, 3000);
  // }, []);

  return (
    <div
      className={classes.Card}
      ref={currentCard}
      value={value}
      onClick={e => {
        checkCardPair(value);
      }}>
      <span className={classes.Card__number}>{children}</span>
    </div>
  );
}

export default Card;
