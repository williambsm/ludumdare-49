import './App.scss';
import './components/Hud';
import Hud from './components/Hud';
import React, { useState, useEffect } from 'react';
import Submarine from "./components/Submarine";
import submarineDatabase from "./database/submarines";
import Event from './components/Event';

function App() {

  let diving;

  const [event, setEvent] = useState();

  const [game, setGame] = useState({
    'depth': 0,
    'event': event,
    'diving': diving,
    startDive: function() {
      diving = (setInterval(() => {
        setGame(prevGame => { return {...prevGame, 'depth': prevGame.depth + 1}});
      }, 1000))
    },
    pauseDive: function() {
        clearInterval(diving);
    }
  });

  /**
   * Submarine object.
   */
  const [sub, setSub] = useState({
    ...submarineDatabase()[0],
    setHull: function(amount) {
      setSub(prevSub => { return {...prevSub, 'hull': prevSub.hull + amount}});
    },
    setPower: function(amount) {
      setSub(prevSub => { return {...prevSub, 'hull': prevSub.power + amount}});
    },
    setOxygen: function(amount) {
      setSub(prevSub => { return {...prevSub, 'hull': prevSub.oxygen + amount}});
    },
    setLevel: function(level) {
      setSub(prevSub => { return {...prevSub, 'hull': prevSub.level + level}});
    }
  });

  return (
    <div className="App">
      <Hud sub={sub}/>
      <div className="water">
        <Event game={game} sub={sub}/>
        <Submarine sub={sub} />
        <button onClick={game.startDive}>Start Dive!</button>
        <button onClick={game.pauseDive}>Pause Dive!</button>
        <p>Depth: {game.depth}m</p>
      </div>
    </div>
  );
}

export default App;
