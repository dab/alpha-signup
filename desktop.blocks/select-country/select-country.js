modules.define('i-bem__dom', function(provide, DOM) {

    DOM.decl('select-country',
        {
            onSetMod: {
                js: {
                    'inited': function(){
                        jQuery('.select-country select').chosen();
                    }
                }
            }
        });

    provide(DOM);

});