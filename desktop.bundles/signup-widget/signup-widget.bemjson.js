({
    block: 'page',
    title: 'signup-widget',
    head: [
        { elem: 'css', url: '_signup-widget.css', ie: false },
        { elem: 'css', url: '_signup-widget', ie: true }
    ],
    content: [
        {
            block: 'signup-widget',
            content: [
                {
                    block: 'slogan',
                    content: [
                        {
                            elem: 'text',
                            content: '<span>Interested in contributing to the Alpha stage of High Fidelity?</span> Sign up here, and we\'ll email you when we are ready for help.'
                        },
                        {
                            block: 'button',
                            text: 'Sign up for Alpha',
                            url: 'http://highfidelity.io/alpha'
                        }
                    ]
                }

            ]
        }
    ]
})
