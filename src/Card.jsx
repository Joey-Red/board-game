import React, { useState, useEffect } from "react";
import chest from "./assets/chest_golden.png";
import knight from "./assets/monster_dark_knight.png";
import tree from "./assets/tree.png";
function Card(props) {
  const [img, setImg] = useState();
  let { cardType } = props;
  useEffect(() => {
    if (cardType === "loot") {
      setImg(chest);
    } else if (cardType === "monster") {
      setImg(knight);
    } else if (cardType === "tree") {
      setImg(tree);
    }
  }, []);
  return (
    <div className="w-[7vw] h-[16vh] rounded bg-white flex justify-center items-center">
      <img src={img} className="h-[3rem]" alt="" />
    </div>
  );
}

export default Card;
