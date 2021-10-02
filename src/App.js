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
    'hull': 100,
    'oxygen': 100,
    'power': 100,
  })

  function loseHull(amount) {
    setSub(prevSub => prevSub = {
      'hull': prevSub.hull - amount,
      'oxygen': prevSub.oxygen,
      'power': prevSub.power,
    });
  }

  function startDive() {
    setDive(prevDive => prevDive = {
      'started': true,
      'depth': prevDive.depth,
    })

    setInterval(() => {
      setDive(prevDive => prevDive = {
        'started': prevDive.started,
        'depth': prevDive.depth + 1,
      })
    }, 1000);
  }

  return (
    <div className="App">
      <Hud sub={sub}/>
      <div className="water">
        <button onClick={() => loseHull(20)}>Boom!</button>
        <button onClick={() => startDive()}>Start Dive!</button>
        <p>depth: {dive.depth}</p>
      </div>
    </div>
  );
}

export default App;
