import React, {useState} from "react";

export default Submarine;

function Submarine(props) {
    return (
        <img alt='Submarine' src={`/submarine/level${props.level}.svg`} onClick={() => props.setHull(props.hull -10)} />
    )
}
