import React, { useState } from "react";
import "./style/App.scss";

function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [currentScore1, setCurrentScore1] = useState(0);
  const [currentScore2, setCurrentScore2] = useState(0);
  const [activePlayer1, setActivePlayer1] = useState(true);
  const [activePlayer2, setActivePlayer2] = useState(false);

  const rollHandler = () => {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    if (dice !== 1 && activePlayer1 === true) {
      setCurrentScore1(currentScore1 + dice);
    } else if (dice === 1 && activePlayer1 === true) {
      setActivePlayer1(false);
      setActivePlayer2(true);
      setCurrentScore1(0)
    } else if (dice !== 1 && activePlayer2 === true) {
      setCurrentScore2(currentScore2 + dice);
    } else if (dice === 1 && activePlayer2 === true) {
      setActivePlayer1(true);
      setActivePlayer2(false);
      setCurrentScore2(0)
    }
  };
  
  const holdHandler = () => {
    if (activePlayer1 === true) {
      setScore1(score1 + currentScore1)
      setCurrentScore1(0)
      setActivePlayer1(false)
      setActivePlayer2(true)
    }else if(activePlayer2 === true) {
      setScore2(score2 + currentScore2)
      setCurrentScore2(0)
      setActivePlayer2(false)
      setActivePlayer1(true)

}
  };

  return (
    <div className="App">
      <div className="playing-field">
        <div className="player1-field">
          <h3>Player 1</h3>
          <h2>{score1}</h2>
          <div className="current-score">
            <h5>Current</h5>
            <h4>{currentScore1}</h4>
          </div>
        </div>
        <div className="player2-field">
          <h3>Player 2</h3>
          <h2>{score2}</h2>
          <div className="current-score">
            <h5>Current</h5>
            <h4>{currentScore2}</h4>
          </div>
        </div>
      </div>
      <div className="btn-wrapper">
        <button className="new-game">New game</button>
        <img src="" alt="" />
        <button onClick={rollHandler} className="roll-dice">
          Roll dice
        </button>
        <button onClick={holdHandler} className="hold">Hold</button>
      </div>
    </div>
  );
}

export default App;
