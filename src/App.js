import './App.scss';
import './components/Hud';
import Hud from './components/Hud';
import React, { useState, useEffect } from 'react';
import Submarine from "./components/Submarine";
import submarineDatabase from "./database/submarines";
import Event from './components/Event';
import events from './events';

function App() {
  const [game, setGame] = useState({
    'started': false,
    'depth': 0,
  });

  const [diving, setDiving] = useState()

  const [event, setEvent] = useState();

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

  function startDive() {
    setGame(prevGame => { return {...prevGame, 'started': true}});

    setDiving(setInterval(() => {
      setGame(prevGame => { return {...prevGame, 'depth': prevGame.depth + 1}});
    }, 1000))
  };

  function pauseDive() {
    setDiving(clearInterval(diving));
  };

  return (
    <div className="App">
      <Hud sub={sub}/>
      <div className="water">
        <Event e={event} sub={sub} dive={startDive}/>
        <Submarine sub={sub} />
        <button onClick={() => startDive()}>Start Dive!</button>
        <button onClick={() => setDiving(pauseDive)}>Pause Dive!</button>
        <p>Depth: {game.depth}m</p>
      </div>
    </div>
  );
}

export default App;
