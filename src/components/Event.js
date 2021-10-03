function Event({game, sub, event}) {
    return (
        <div>
            {event.name}
            <div>
                {event.actions.map((action, index) => {
                    if(index === 0) {
                        return <button key={index} onClick={() => {sub.setPower(-10); game.startDive()}}>{action}</button>
                    } else {
                        return <button key={index} onClick={() => {sub.setHull(-10); game.startDive()}}>{action}</button>
                    }
                })}
            </div>
        </div>
    )
}

export default Event;