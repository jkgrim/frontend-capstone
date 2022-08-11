import { useState } from "react";

export default function DiceRoll() {
  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(1);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function rollDice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async function handleClick() {
    for (let i = 0; i < 20; i++) {
      setNum(rollDice(1, 6));
      setNum2(rollDice(1, 6));
      await sleep(100);
    }
  }

  return (
    <div className="dice-container">
      <div className="dice-wrapper">
        <h2 className="dice-1">{num}</h2>
        <h2 className="dice-2">{num2}</h2>
      </div>
      <button className="dice-button" onClick={handleClick}>
        Roll the Dice
      </button>
    </div>
  );
}
