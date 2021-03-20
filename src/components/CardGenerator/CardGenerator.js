import React from "react";
import Card from "./Card/Card";

function CardGenerator({ cardsTotal }) {
  const randomArr = [];

  let num = null;
  getUniquePrimeNum: for (let i = 0; i < cardsTotal; i++) {
    //Get random
    num = Math.round(Math.random() * 100);
    //Check unique
    if (randomArr.includes(num)) {
      i--;
      continue;
    }
    //Check Primery
    for (let j = 2; j < num; j++) {
      if (num % i === 0) {
        i--;
        continue getUniquePrimeNum;
      }
    }
    randomArr.push(num);
  }

  const makeNumPair = arr => {
    for (let i = arr.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const doubleArr = makeNumPair([...randomArr, ...randomArr]);

  return doubleArr.map((item, i) => {
    return (
      <Card key={i} value={item}>
        {item}
      </Card>
    );
  });
}
export default CardGenerator;
