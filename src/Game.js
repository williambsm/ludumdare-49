import './scss/main.scss';
import './components/Hud';
import React, { useState, useEffect } from 'react';
import Hud from './components/Hud';
import Submarine from "./components/Submarine";
import submarines from "./database/submarines";
import Event from './components/Event';
import events from './database/events';
import StartButton from "./components/StartButton";
import getRandomInt from './database/utilities';

function Game() {
  let intervals = {
    'diving': '',
    'eventTriggering': '',
  };

  const [event, setEvent] = useState(events[0]);

  const [currency, setCurrency] = useState(0);

  const [game, setGame] = useState({
    'depth': 0,

    startDive: function() {
      setEvent(events[0]);
      intervals.diving = (setInterval(() => {
        setGame(prevGame => { return {...prevGame, 'depth': prevGame.depth + 1}});
        setCurrency(prevCurrency => { return prevCurrency + 1 })
      }, 1000))
      setTimeout(() => {
        intervals.eventTriggering = (setInterval(() => {
          game.triggerEvent(2)
        }, 1000))
      }, 10000);
    },

    pauseDive: function() {
        clearInterval(intervals.diving);
        clearInterval(intervals.eventTriggering);
    },

    triggerEvent: function(oneInX) {
      const trigger = Math.floor(Math.random() * oneInX) === 0;
      if(trigger) {
          game.pauseDive();
          setEvent(events[getRandomInt(1, 4)]);
      }
    },

    resetGame: function() {
      if (sub.oxygen <= 0 || sub.hull <= 0) {
        setCurrency(prevCurrency => { return prevCurrency - game.depth })
      }
      setGame(prevGame => { return {...prevGame, 'depth': 0}})
      game.pauseDive();
    }
  });
  /**
   * Submarine object.
   */
  const [sub, setSub] = useState({
    ...submarines[0],
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

  useEffect(() => {
    if (game.depth === 1000) {
      game.pauseDive();
      setEvent(events[4]);
    }
    if (sub.hull <= 0) {
      game.pauseDive();
      setEvent(events[5]);
    }
    if (sub.oxygen <= 0) {
      game.pauseDive();
      setEvent(events[6]);
    }
    if (game.depth % 100 === 0 && game.depth !== 0) {
      game.pauseDive();
      setEvent(events[7])
    }
  }, [game, event, sub]
  )

  return (
    <div className="App">
      <Hud currency={currency} sub={sub} />
      <div className="water">
        <Event game={game} sub={sub} event={event} />
        <Submarine game={game} sub={sub} />
        <StartButton game={game} />
        <p>Depth: {game.depth}m</p>
      </div>
    </div>
  );
}

export default Game;
