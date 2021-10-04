import getRandomInt from "./utilities";

const events = [
    {
        'id': 0,
        'name': '',
        'actions': []
    },
    {
        'id': 1,
        'name': 'Hull Breach!',
        'actions': [
            {
                name: 'Fix',
                affects: 'Power',
                amount: -10,
            },
            {
                name: 'Look Away',
                affects: 'Hull',
                amount: -10,
            }
        ]
    },
    {
        'id': 2,
        'name': 'Reactor Failure!',
        'actions': [
            {
                name: 'Pray',
                affects: 'Power',
                amount: getRandomInt(-10, 5),
            }
        ]
    },
    {
        'id': 3,
        'name': 'Busted Pipe!',
        'actions': [
            {
                name: 'Fix',
                affects: 'Power',
                amount: -10,
            },
            {
                name: 'Look Away',
                affects: 'Oxygen',
                amount: -10,
            }
        ]
    },
    {
        'id': 4,
        'name': 'You Won!',
        'actions': [
            {
                name: 'Yay',
                affects: 'Reset',
                amount: 0,
            }
        ]
    },
    {
        'id': 5,
        'name': 'Your submarine crumbled under immense pressure!',
        'actions': [
            {
                name: 'Try again',
                affects: 'Reset',
                amount: 0,
            }
        ]
    },
    {
        'id': 6,
        'name': 'You ran out of oxygen!',
        'actions': [
            {
                name: 'Try again',
                affects: 'Reset',
                amount: 0,
            }
        ]
    },
    {
        'id': 7,
        'name': 'Check Point',
        'actions': [
            {
                name: 'Keep Going',
                affects: 'Power',
                amount: 0,
            },
            {
                name: 'Extract',
                affects: 'Reset',
                amount: 0,
            }
        ]
    },
]

export default events;
