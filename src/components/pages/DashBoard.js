import { Link } from "react-router-dom";

import boxshadow from "../helpers/images/boxshadow.png";
import coinflip from "../helpers/images/coinflip.png";
import diceroll from "../helpers/images/diceroll.png";
import weather from "../helpers/images/weather.png";
import swapi from "../helpers/images/swapi.png";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <div className="component-wrapper">
          <div className="preview-img">
            <img src={boxshadow} alt="preview of boxshadow component" />
          </div>

          <div className="component-description">
            <p>
              This component allows the user to generate a mock boxshadow string
              for their CSS.
            </p>
          </div>

          <Link to="/boxshadow">Box Shadow</Link>
        </div>

        <div className="component-wrapper">
          <div className="preview-img">
            <img src={coinflip} alt="preview of coin flip component" />
          </div>

          <div className="component-description">
            <p>This component allows the user to flip a coin.</p>
          </div>

          <Link to="/coin-flip">Coin Flip</Link>
        </div>

        <div className="component-wrapper">
          <div className="preview-img">
            <img src={diceroll} alt="preview of dice roll component" />
          </div>

          <div className="component-description">
            <p>This component allows the user to roll a pair of dice.</p>
          </div>

          <Link to="/dice-roll">Dice Roll</Link>
        </div>

        <div className="component-wrapper">
          <div className="preview-img">
            <img src={weather} alt="preview of weather component" />
          </div>

          <div className="component-description">
            <p>
              This component allows the user to input a location and recieve the
              current, high, and low temperatures for the day.
            </p>
          </div>

          <Link to="/weather">Weather</Link>
        </div>

        <div className="component-wrapper">
          <div className="preview-img">
            <img src={swapi} alt="preview of star wars api component" />
          </div>

          <div className="component-description">
            <p>
              This component allows the user to search the Star Wars API open
              the JSON of the search result.
            </p>
          </div>

          <Link to="/swapi">SWAPI Search</Link>
        </div>
      </div>
    </div>
  );
}
