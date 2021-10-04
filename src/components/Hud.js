import Currency from "./Currency";

function Hud({currency, sub}) {
    return (
        <div id='hud' className="hud">
            <div id='hull' className='bar hull'>
                <img className='hud-icon hull-icon' src="/hud/hull-icon.png" alt="" />
                <div className="bar__fill" style={{width: 300 / sub.maxHull * sub.hull + 'px'}}/>
                <div className="bar__frame">{sub.hull} / {sub.maxHull}</div>
            </div>
            <div id='power' className='bar power'>
                <img className='hud-icon power-icon' src="/hud/power-icon.png" alt="" />
                <div className="bar__fill" style={{width: 300 / sub.maxPower * sub.power + 'px'}}/>
                <div className="bar__frame">{sub.power} / {sub.maxPower}</div>
            </div>

            <div id='oxygen' className='bar oxygen'>
                <img className='hud-icon o2-icon' src="/hud/o2-icon.png" alt="" />
                <div className="bar__fill" style={{width: 300 / sub.maxOxygen * sub.oxygen + 'px'}}/>
                <div className="bar__frame">{sub.oxygen} / {sub.maxOxygen}</div>
            </div>
            <Currency currency={currency} />
        </div>
    )
}

export default Hud;
