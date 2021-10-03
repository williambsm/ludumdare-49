function submarineController () {
    return {
        setHull(amount) {
            setSub(prevSub => { return {...prevSub, 'hull': prevSub.hull + amount}});
        },
        setPower(amount) {
            setSub(prevSub => { return {...prevSub, 'hull': prevSub.power + amount}});
        },
        setOxygen(amount) {
            setSub(prevSub => { return {...prevSub, 'hull': prevSub.oxygen + amount}});
        }
    };
}

export default submarineController;
