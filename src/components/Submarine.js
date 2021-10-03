import React, {useState} from "react";

function Submarine ({sub}) {
    return (
        <img alt='sub-lv1' src={`/submarine/level${sub.level}.svg`} onClick={() => sub.setHull(-10)} />
    )
}

export default Submarine;
