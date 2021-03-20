import React from "react";
import classes from "./Mahjong.module.scss";

function Mahjong(props) {
  return (
    <div className={classes.Mahjong}>
      <div className={classes.Mahjong__title}>Mahjong-like game</div>
      {props.children}
    </div>
  );
}

export default Mahjong;
