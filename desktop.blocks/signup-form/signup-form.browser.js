modules.define('i-bem__dom', function(provide, DOM) {

    DOM.decl('signup-form', {
        onSetMod : {
            'js' : {
                'inited': function() {

                    Typekit.load();

                    this.domElem.validate({
                        errorLabelContainer: '.errors',
                        wrapper: 'p',
                        rules: {
                            fname: "required",
                            lname: "required",
                            email: {
                                required: true,
                                email: true
                            }
                        },
                        messages: {
                            fname: "Please specify your first name.",
                            lname: "Please specify your last name.",
                            email: {
                                required: "We need your email address to contact you.",
                                email: "Oops! Your email looks funny, please double check its formatting."
                            }
                        }
                    });

                }
            }
        }
    });

provide(DOM);

});