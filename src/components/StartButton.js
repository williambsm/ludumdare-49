import {useState} from "react";

function StartButton({game}) {
    const [className, setClassName] = useState('button');

    function onClick() {
        setClassName('button hiding');

        setTimeout(() => {
            game.startDive();
            setClassName('button hidden');
        }, 500);
    }

    return (
        <button onClick={onClick} className={className}>Start Dive!</button>
    );
}

export default StartButton;
