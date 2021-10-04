import React, { useEffect } from 'react';

function Submarine ({game, sub}) {

    useEffect(() => {
        if (game.depth > 200) {
            if (sub.level === 1) {
              sub.setHull(-1);
            }
        }
    
        if (game.depth > 400) {
            if (sub.level === 1) {
              sub.setHull(-1);
            }
            if (sub.level === 2) {
              sub.setHull(-1);
            }
        }
    
        if (game.depth > 600) {
            if (sub.level === 1) {
              sub.setHull(-1);
            }
            if (sub.level === 2) {
              sub.setHull(-1);
            }
            if (sub.level === 3) {
              sub.setHull(-1);
            }
        }
    
        if (game.depth > 800) {
            if (sub.level === 1) {
              sub.setHull(-1);
            }
            if (sub.level === 2) {
              sub.setHull(-1);
            }
            if (sub.level === 3) {
              sub.setHull(-1);
            }
            if (sub.level === 4) {
              sub.setHull(-1);
            }
        }
    }, [game])

    return (
        <img alt='sub-lv1' src={`/submarine/level${sub.level}.svg`} className="sub-float" />
    )
}

export default Submarine;
