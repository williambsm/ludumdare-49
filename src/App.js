import './App.scss';
import './components/Hud';
import Hud from './components/Hud';
import React, { useState } from 'react';

function App() {
  const [dive, setDive] = useState({
    'started': false,
    'depth': 0,
  });

  const [sub, setSub] = useState({
    'level': 1,
    'hull': 100,
    'oxygen': 100,
    'power': 100,
  })

  function setHull(amount) {
    setSub(prevSub => prevSub = {
      'level': prevSub.level,
      'hull': prevSub.hull + amount,
      'oxygen': prevSub.oxygen,
      'power': prevSub.power,
    });
  }

  function setPower(amount) {
    setSub(prevSub => prevSub = {
      'level': prevSub.level,
      'hull': prevSub.hull,
      'oxygen': prevSub.oxygen,
      'power': prevSub.power + amount,
    });
  }

  function setOxygen(amount) {
    setSub(prevSub => prevSub = {
      'level': prevSub.level,
      'hull': prevSub.hull,
      'oxygen': prevSub.oxygen + amount,
      'power': prevSub.power,
    });
  }

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
        <img alt='sub-lv1' src={`/submarine/level${sub.level}.svg`} onClick={() => setHull(-10)} />
        <button onClick={() => startDive()}>Start Dive!</button>
        <p>Depth: {dive.depth}m</p>
      </div>
    </div>
  );
}

export default App;
