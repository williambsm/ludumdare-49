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
                affects: 'Hull',
                amount: -10,
            },
            {
                name: 'Look Away',
                affects: 'Power',
                amount: -10,
            }
        ]
    }
]

export default events;