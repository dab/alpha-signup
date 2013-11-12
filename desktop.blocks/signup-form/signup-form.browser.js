/*global modules:false */

modules.define('i-bem__dom', function(provide, DOM) {

    DOM.decl('signup-form', {
        onSetMod : {
            'js' : {
                'inited': function() {
                    Typekit.load();
                }
            }
        }
    });

provide(DOM);

});

