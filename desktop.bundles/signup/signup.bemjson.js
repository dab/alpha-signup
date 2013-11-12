({
    block: 'page',
    title: 'HF Alpha Signup',
    head: [
        { elem: 'css', url: '_signup.css', ie: false },
        { elem: 'css', url: '_signup', ie: true }
    ],
    content: [
        {
            block: 'header',
            content: 'HF logo'
        },
        {
            block: 'slogan',
            content: '<span>Interested in contributing to the Alpha stage of High Fidelity?</span> Sign up here, and we\'ll email you when we are ready for help.'
        },
        {
            block: 'signup-form',
            content: [
                {
                    elem: 'left',
                    content: [
                        {
                            block: 'list',
                            content: [
                            {
                                elem: 'title',
                                content: 'I have these: (check all that apply)'
                            },
                            {
                                elem: 'item',
                                content: [
                                    {
                                    block: 'checkbox',
                                    val: 'android',
                                    text: 'Android Phone or Tablet'
                                    }
                                ]
                            },
                            {
                                elem: 'item',
                                content: [
                                    {
                                        block: 'checkbox',
                                        text: 'iPhone or iPad',
                                        val: 'ios'
                                    }
                                ]
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'checkbox',
                                    val: 'pc',
                                    text: 'PC or laptop'
                                }

                            },
                            {
                                block: 'list',
                                content: [
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'checkbox',
                                            text: 'Windows',
                                            val: 'win'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'checkbox',
                                            text: 'OS X',
                                            val: 'osx'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'checkbox',
                                            text: 'Linux',
                                            val: 'linux'
                                        }
                                    }
                                ]
                            }
                        ]
                        },
                        {
                            block: 'connection-params',
                            content: [
                                {
                                    block: 'h3',
                                    content: 'My broadband connection speed is:'
                                },
                                {
                                    block: 'radio',
                                    name: 'connection-speed',
                                    options: [
                                        { text: '< 5Mbps', val: 'M5' },
                                        { text: '5 - 20Mbps', val: 'M520' },
                                        { text: '> 20Mbps', val: 'M20' }
                                    ]
                                }
                            ]
                        }

                    ]
                },
                {
                    elem: 'right',
                    content: [
                        {
                            block: 'select',
                            content: 'Choose a country...',
                            name: 'country'
                        },
                        {
                            block: 'select',
                            content: 'Choose a city...',
                            name: 'city'
                        },
                        {
                            block: 'input',
                            content: 'First Name',
                            name: 'first-name'
                        },
                        {
                            block: 'input',
                            content: 'Last Name',
                            name: 'last-name'
                        },
                        {
                            block: 'input',
                            mod: 'email',
                            name: 'email',
                            content: 'Email'
                        },
                        {
                            block: 'button',
                            mod: 'signup',
                            content: 'Sign up'
                        },
                        {
                            block: 'errors',
                            content: 'Oops! Your email looks funny, please double check its formatting.'
                        }
                    ]
                }

            ]
        },
        { elem: 'js', url: '_signup.js' }
    ]
})