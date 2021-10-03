function Hud({sub}) {
    return (
        <div id='hud'>
            <div id='hull' className='bar hull'>
                <div className="bar__fill" style={{width: 300 / sub.maxHull * sub.hull + 'px'}}/>
                <div className="bar__frame">{sub.hull} / {sub.maxHull}</div>
            </div>
            <div id='power' className='bar power'>
                <div className="bar__fill" style={{width: 300 / sub.maxPower * sub.power + 'px'}}/>
                <div className="bar__frame">{sub.power} / {sub.maxPower}</div>
            </div>
            <div id='oxygen' className='bar oxygen'>
                <div className="bar__fill" style={{width: 300 / sub.maxOxygen * sub.oxygen + 'px'}}/>
                <div className="bar__frame">{sub.oxygen} / {sub.maxOxygen}</div>
            </div>
        </div>
    )
}

export default Hud;
