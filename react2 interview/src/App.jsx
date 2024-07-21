import { useState } from "react";
import "./App.css";

const options = ["Cricket", "Football", "Hockey"];
const days = ["Weekday", "Weekend"];

function App() {
  const [game, setGame] = useState("Game");
  const [day, setDay] = useState("Day");

  const handlegameChange = (e) => {
    console.log("event", e.target);
    console.log(e.target.value);
    let selectedValue = e.target.value;
    setGame(selectedValue);
  };

  const handledayChange = (e) => {
    console.log("event", e.target);
    console.log("handleChange", e.target.value);
    let selectedValue = e.target.value;
    setDay(selectedValue);
  };

  return (
    <div className="App">
      <div className="AppInner">
        <div className="main_radio">
          <h1>Play Game</h1>
          {options.map((item) => {
            return (
              <div key={item}>
                <input
                  type="radio"
                  name="play"
                  onChange={handlegameChange}
                  value={item}
                />
                {item}
              </div>
            );
          })}
        </div>
        <div className="main_radio">
          <h1>Choose Days</h1>
          {days.map((item) => {
            return (
              <div key={item}>
                <input
                  type="radio"
                  name="days"
                  onChange={handledayChange}
                  value={item}
                />
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="gameOn">
        <div>
          <h1>you will play</h1>
          <p>
            {game} on {day}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
