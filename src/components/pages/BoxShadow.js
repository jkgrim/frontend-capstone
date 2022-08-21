import { useState } from "react";

export default function BoxShadow(props) {
  const [xAxis, setXAxis] = useState(5);
  const [yAxis, setYAxis] = useState(5);
  const [blur, setBlur] = useState(20);
  const [spread, setSpread] = useState(5);

  return (
    <div className="box-shadow-container">
      <div className="back-btn">
        <button onClick={() => props.history.push("/dashboard")}>
          &#60; Back to Dashboard
        </button>
      </div>

      <div className="box-shadow-wrapper">
        <div
          className="preview-box"
          style={{ boxShadow: `${xAxis}px ${yAxis}px ${blur}px ${spread}px` }}
        >
          Preview
        </div>

        <div className="sliders-wrapper">
          <div className="range-wrapper">
            <label>X-Axis Shift: </label>
            <input
              id="x-axis"
              type="range"
              min="-50"
              max="50"
              steps="1"
              value={xAxis}
              onChange={(e) => setXAxis(e.target.value)}
            />
          </div>

          <div className="range-wrapper">
            <label>Y-Axis Shift: </label>
            <input
              id="y-axis"
              type="range"
              min="-50"
              max="50"
              steps="1"
              value={yAxis}
              onChange={(e) => setYAxis(e.target.value)}
            />
          </div>

          <div className="range-wrapper">
            <label>Blur Shift: </label>
            <input
              id="blur"
              type="range"
              min="0"
              max="100"
              steps="1"
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
            />
          </div>

          <div className="range-wrapper">
            <label>Spread Shift: </label>
            <input
              id="spread"
              type="range"
              min="0"
              max="100"
              steps="1"
              value={spread}
              onChange={(e) => setSpread(e.target.value)}
            />
          </div>

          <div className="output-code">
            box-shadow: ({xAxis}px {yAxis}px {blur}px {spread}px)
          </div>
        </div>
      </div>
    </div>
  );
}
