import './scss/main.scss';
import './components/Hud';
import React, { useState, useEffect } from 'react';
import Hud from './components/Hud';
import Submarine from "./components/Submarine";
import submarines from "./database/submarines";
import Event from './components/Event';
import events from './database/events';

function Game() {
  let intervals = {
    'diving': '',
    'eventTriggering': '',
  };

  const [event, setEvent] = useState(events[0]);

  const [dive, setDive] = useState({
    'depth': 0,

    startDive: function() {
      setEvent(events[0]);
      intervals.diving = (setInterval(() => {
        setDive(prevDive => { return {...prevDive, 'depth': prevDive.depth + 1}});
      }, 1000))
      setTimeout(() => {
        intervals.eventTriggering = (setInterval(() => {
          dive.triggerEvent(5)
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
          dive.pauseDive();
          setEvent(events[1]);
      } else {
      }
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
    if (dive.depth === 1000) {
      dive.pauseDive();
      setEvent(events[2]);
    }
    if (sub.hull <= 0) {
      dive.pauseDive();
      setEvent(events[3]);
    }
    if (sub.oxygen <= 0) {
      dive.pauseDive();
      setEvent(events[4]);
    }}, [dive, event, sub]
  )

  return (
    <div className="App">
      <Hud sub={sub} />
      <div className="water">
        <Event dive={dive} sub={sub} event={event}/>
        <Submarine sub={sub} />
        <button onClick={dive.startDive}>Start Dive!</button>
        <button onClick={dive.pauseDive}>Pause Dive!</button>
        <p>Depth: {dive.depth}m</p>
      </div>
    </div>
  );
}

export default Game;
