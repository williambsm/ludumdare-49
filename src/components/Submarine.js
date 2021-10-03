function Submarine ({sub}) {
    return (
        <img alt='sub-lv1' src={`/submarine/level${sub.level}.svg`} className="sub-float" />
    )
}

export default Submarine;
