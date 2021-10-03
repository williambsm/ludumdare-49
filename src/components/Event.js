import { useState } from 'react/cjs/react.development';

function Event({e, sub, dive}) {
    const [visibility, setVisibility] = useState('hidden');

    if(e) {
        return (
            <div className={`event ${visibility}`}>
                Event name: {e.name}
                {e.actions.map((action, index) => {
                    if(index === 0) {
                        return <button onClick={() => sub.setHull(+10)}>{action}</button>
                    } else {
                        return <button onClick={() => sub.setHull(-10)}>{action}</button>
                    }
                })}
            </div>
        )
    } else {
        return (
            <div />
        )
    }

}

export default Event;