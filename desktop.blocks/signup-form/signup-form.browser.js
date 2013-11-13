modules.define('i-bem__dom', function(provide, DOM) {

    DOM.decl('signup-form', {
        onSetMod : {
            'js' : {
                'inited': function() {

                    Typekit.load();

                    jQuery('.signup-form').validate({
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
                            lname: "Please specify your first name.",
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