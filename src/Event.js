import { useState } from 'react/cjs/react.development';
import events from './events';

const [visibility, setVisibility] = useState('hidden');

const [event, setEvents] = useState();

function Event() {
    return (
        <div className={`event ${visibility}`}>
            
        </div>
    )
}