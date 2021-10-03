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
                amount: -50,
            }
        ]
    },
    {
        'id': 2,
        'name': 'You Won!',
        'actions': [
            {
                name: 'Yay',
                affects: 'Power',
                amount: 0,
            }
        ]
    },
    {
        'id': 3,
        'name': 'Your submarine crumbled under immense pressure!',
        'actions': [
            {
                name: 'Try again',
                affects: 'Power',
                amount: 0,
            }
        ]
    },
    {
        'id': 4,
        'name': 'You ran out of oxygen!',
        'actions': [
            {
                name: 'Try again',
                affects: 'Power',
                amount: 0,
            }
        ]
    },
]

export default events;
