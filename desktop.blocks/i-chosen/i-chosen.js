modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

    window.jQuery = window.$ = $;

    /*borschik:include:../../libs/plugins/chosen_v1.0.0/chosen.jquery.js*/;

    provide(DOM);

});