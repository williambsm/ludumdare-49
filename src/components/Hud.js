function Hud({sub}) {
    return (
        <div id='hud'>
            <div id='hull' className='hull'>
                <div className="hull__bar" style={{width: 240 / sub.maxHull * sub.hull + 'px'}}/>
                <div className="hull__frame">hull: {sub.hull}</div>
            </div>
            <div id='power' className='power'>
                <div className="power__bar" style={{width: 240 / sub.maxPower * sub.power + 'px'}}/>
                <div className="power__frame">power: {sub.power}</div>
            </div>
            <div id='oxygen' className='oxygen'>
                <div className="oxygen__bar" style={{width: 240 / sub.maxOxygen * sub.oxygen + 'px'}}/>
                <div className="oxygen__frame">oxygen: {sub.oxygen}</div>
            </div>
        </div>
    )
}

export default Hud;
