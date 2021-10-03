import './App.scss';
import './components/Hud';
import Hud from './components/Hud';
import React, { useState } from 'react';
import Submarine from "./components/Submarine";
import submarineDatabase from "./database/submarines";

function App() {
  const [dive, setDive] = useState({
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

  function startDive() {
    setDive(prevDive => prevDive = {
      'started': true,
      'depth': prevDive.depth,
    })

    const diving = setInterval(() => {
      setDive(prevDive => prevDive = {
        'started': prevDive.started,
        'depth': prevDive.depth + 1,
      })
    }, 1000);
    console.log(diving)
  }

  return (
    <div className="App">
      <Hud sub={sub}/>
      <div className="water">
        <Submarine sub={sub} />
        <button onClick={() => startDive()}>Start Dive!</button>
        <p>Depth: {dive.depth}m</p>
      </div>
    </div>
  );
}

export default App;
