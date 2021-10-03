import './App.scss';
import './components/Hud';
import Hud from './components/Hud';
import React, { useState } from 'react';

function App() {
  const [game, setGame] = useState({
    'started': false,
    'depth': 0,
  });

  const [sub, setSub] = useState({
    'level': 1,
    'hull': 100,
    'oxygen': 100,
    'power': 100,
  })

  const [diving, setDiving] = useState()

  function setHull(amount) {
    setSub(prevSub => { 
      if(!(prevSub.hull + amount > 100) || !(prevSub.hull + amount < 0)) {
        return {...prevSub, 'hull': prevSub.hull + amount}
      }
    });
  }

  function setPower(amount) {
    setSub(prevSub => { return {...prevSub, 'hull': prevSub.power + amount}});
  }

  function setOxygen(amount) {
    setSub(prevSub => { return {...prevSub, 'hull': prevSub.oxygen + amount}});
  }

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
        <img alt='sub-lv1' src={`/submarine/level${sub.level}.svg`} className="sub-float" onClick={() => setHull(-10)} />
        <button onClick={() => startDive()}>Start Dive!</button>
        <button onClick={() => setDiving(() => clearInterval(diving))}>Pause Dive!</button>
        <p>Depth: {game.depth}m</p>
      </div>
    </div>
  );
}

export default App;
