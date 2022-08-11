import { useState } from "react";

export default function CoinFlip() {
  const [toggle, setToggle] = useState(false);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function headsTails() {
    for (let i = 0; i < 10; i++) {
      setToggle(true);
      await sleep(100);
      setToggle(false);
      await sleep(100);
    }
    let randomNumber = Math.floor(Math.random() * 2) + 1;
    if (randomNumber === 1) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }

  return (
    <div className="App">
      <div className="coin-container">
        <div className="coin-wrapper">
          <h1 className="coin">{toggle ? "Tails" : "Heads"}</h1>
          <button className="coin-button" onClick={headsTails}>
            Flip!
          </button>
        </div>
      </div>
    </div>
  );
}
