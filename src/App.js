import './App.scss';
import './components/Hud';
import Submarine from './components/Submarine';
import Hud from './components/Hud';
import React, { useState } from 'react';

function App() {
  // Submarine.
  const [submarineLevel, setSubmarineLevel] = useState(1);
  const [submarineHull, setSubmarineHull] = useState(100);
  const [submarineMaxHull, setSubmarineMaxHull] = useState(100);
  const [submarineOxygen, setSubmarineOxygen] = useState(100);
  const [submarineMaxOxygen, setSubmarineMaxOxygen] = useState(100);
  const [submarinePower, setSubmarinePower] = useState(100);
  const [submarineMaxPower, setSubmarineMaxPower] = useState(100);

  const [dive, setDive] = useState({
    'started': false,
    'depth': 0,
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
      console.log(diving);
    }, 1000);
  }

  return (
    <div className="App">
      <Hud hull={submarineHull} maxHull={submarineMaxHull} oxygen={submarineOxygen} maxOxygen={submarineMaxOxygen} power={submarinePower} maxPower={submarineMaxPower}/>
      <div className="water">
        <Submarine level={submarineLevel} hull={submarineHull} setHull={setSubmarineHull} />
        <button onClick={() => startDive()}>Start Dive!</button>
        <p>Depth: {dive.depth}m</p>
      </div>
    </div>
  );
}

export default App;
