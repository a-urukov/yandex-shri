/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-questions', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    },

    onClick : function(e) {
        var item = $(e.data.domElem[0]);
        item.next(".b-questions__question-сontent").slideToggle(200, function() {
        	$(".bg", item.parent()).toggleClass("collapse");        	
        });
        item.parent().next(".b-questions__answer").slideToggle(200);
    }

    


}, {

    live : function() {
        this.liveBindTo('question-header', 'leftclick', function(e) {
            this.onClick(e); });
        }
})
})();
