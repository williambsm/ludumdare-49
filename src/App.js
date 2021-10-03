import './App.scss';
import './components/Hud';
import Hud from './components/Hud';
import React, { useState, useEffect } from 'react';
import Submarine from "./components/Submarine";
import submarineDatabase from "./database/submarines";
import Event from './components/Event';
import events from './database/events';

function App() {

  let diving;

  const [event, setEvent] = useState(events[0]);

  const [game, setGame] = useState({
    'depth': 0,
    'diving': diving,
    startDive: function() {
      setEvent(events[0]);
      diving = (setInterval(() => {
        setGame(prevGame => { return {...prevGame, 'depth': prevGame.depth + 1}});
        game.triggerEvent(5)
      }, 1000))
    },
    pauseDive: function() {
        clearInterval(diving);
    },
    triggerEvent: function(oneInX) {
      const trigger = Math.floor(Math.random() * oneInX) === 0;
      if(trigger) {
          game.pauseDive();
          setEvent(events[1]);
      }
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
      setSub(prevSub => { return {...prevSub, 'power': prevSub.power + amount}});
    },
    setOxygen: function(amount) {
      setSub(prevSub => { return {...prevSub, 'oxygen': prevSub.oxygen + amount}});
    },
    setLevel: function(level) {
      setSub(prevSub => { return {...prevSub, 'level': prevSub.level + level}});
    }
  });

  return (
    <div className="App">
      <Hud sub={sub}/>
      <div className="water">
        <Event game={game} sub={sub} event={event}/>
        <Submarine sub={sub} />
        <button onClick={game.startDive}>Start Dive!</button>
        <button onClick={game.pauseDive}>Pause Dive!</button>
        <p>Depth: {game.depth}m</p>
      </div>
    </div>
  );
}

export default App;
