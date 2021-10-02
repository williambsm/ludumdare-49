function Hud(props) {
    return (
        <div id='hud'>
            <div id='hull' className='hull'>
                <div className="hull__bar" style={{width: 240 / 100 * props.hull + 'px'}} />
                <div className="hull__frame">hull: {props.hull} / {props.maxHull}</div>
            </div>
            <div id='power' className='power'>
                <div className="power__bar" style={{width: 240 / 100 * props.power + 'px'}} />
                <div className="power__frame">power: {props.power} / {props.maxPower}</div>
            </div>
            <div id='oxygen' className='oxygen'>
                <div className="oxygen__bar" style={{width: 240 / 100 * props.oxygen + 'px'}} />
                <div className="oxygen__frame">oxygen: {props.oxygen} / {props.maxOxygen}</div>
            </div>
        </div>
    )
}

export default Hud;
