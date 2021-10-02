function Hud({sub}) {
    return (
        <div id='hud'>
            <div id='hull' className='hull'>
                <div className="hull__bar" style={{width: 240/100*sub.hull + 'px'}}></div>
                <div className="hull__frame">hull: {sub.hull}</div>
            </div>
            <div id='power' className='power'>
                <div className="power__bar" style={{width: 240/100*sub.power + 'px'}}></div>
                <div className="power__frame">power: {sub.power}</div>
            </div>
            <div id='oxygen' className='oxygen'>
                <div className="oxygen__bar" style={{width: 240/100*sub.oxygen + 'px'}}></div>
                <div className="oxygen__frame">oxygen: {sub.oxygen}</div>
            </div>
        </div>
    )
}

export default Hud;