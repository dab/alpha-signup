({
    block: 'page',
    mods: { theme: 'narrow'},
    title: 'Subscription Success',
    head: [
        { elem: 'css', url: '_success.css', ie: false },
    ],
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'logo',
                    content: 'High Fidelity',
                    href: 'http://highfidelity.io'
                }
            ]
        },
        {
            block: 'slogan',
            mods: { theme: 'bordered' },
            content: 'Success!'
        },
        {
            block: 'message',
            content: '<p>We just sent you an email to confirm your subscription.</p><p>Go back to the <a href="http://highfidelity.io">High Fidelity homepage</a>.'
        }
    ]
})
