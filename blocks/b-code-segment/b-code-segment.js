/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-code-segment', {

    onSetMod : {

        'js' : function() {
             $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
        }

    }

});

})();
