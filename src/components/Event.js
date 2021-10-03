import events from "../database/events";

function Event({dive, sub, event}) {
    function effect(attr, amount) {
        switch (attr) {
            case 'Hull':
                default:
                sub.setHull(amount)
                break;
            case 'Power':
                sub.setPower(amount)
                break;
            case 'Oxygen':
                sub.setOxygen(amount)
                break;
        }
    }

    return (
        <div>
            {event.name}
            <div>
                {event.actions.map((action, index) => {
                    return (
                        <button key={index} onClick={() => {
                            effect(action.affects, action.amount)
                            dive.startDive();
                        }}>{action.name}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Event;