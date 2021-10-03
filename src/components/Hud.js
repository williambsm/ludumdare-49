function Hud({sub}) {
    return (
        <div id='hud'>
            <div id='hull' className='hull'>
                <div className="hull__bar" style={{width: 240 / sub.maxHull * sub.hull + 'px'}}/>
                <div className="hull__frame">Hull: {sub.hull}</div>
            </div>
            <div id='power' className='power'>
                <div className="power__bar" style={{width: 240 / sub.maxPower * sub.power + 'px'}}/>
                <div className="power__frame">Power: {sub.power}</div>
            </div>
            <div id='oxygen' className='oxygen'>
                <div className="oxygen__bar" style={{width: 240 / sub.maxOxygen * sub.oxygen + 'px'}}/>
                <div className="oxygen__frame">Oxygen: {sub.oxygen}</div>
            </div>
        </div>
    )
}

export default Hud;
