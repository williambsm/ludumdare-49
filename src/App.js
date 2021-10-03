import './App.scss';
import './components/Hud';
import Hud from './components/Hud';
import React, { useState } from 'react';
import Submarine from "./components/Submarine";
import submarineDatabase from "./database/submarines";

function App() {
  const [game, setGame] = useState({
    'started': false,
    'depth': 0,
  });

  /**
   * Submarine object.
   */
  const [sub, setSub] = useState({
    ...submarineDatabase()[1],
    setHull: function(amount) {
      setSub(prevSub => { return {...prevSub, 'hull': prevSub.hull + amount}});
    },
    setPower: function(amount) {
      setSub(prevSub => { return {...prevSub, 'hull': prevSub.power + amount}});
    },
    setOxygen: function(amount) {
      setSub(prevSub => { return {...prevSub, 'hull': prevSub.oxygen + amount}});
    }
  });

  function upgradeSub(level) {
    setSub(prevSub => { return {...prevSub, 'hull': prevSub.level + level}});
  }

  function startDive() {
    setGame(prevGame => { return {...prevGame, 'started': true}});

    setDiving(setInterval(() => {
      setGame(prevGame => { return {...prevGame, 'depth': prevGame.depth + 1}})
    }, 1000))};

  return (
    <div className="App">
      <Hud sub={sub}/>
      <div className="water">
        <Submarine sub={sub} />
        <button onClick={() => startDive()}>Start Dive!</button>
        <button onClick={() => setDiving(() => clearInterval(diving))}>Pause Dive!</button>
        <p>Depth: {game.depth}m</p>
      </div>
    </div>
  );
}

export default App;
