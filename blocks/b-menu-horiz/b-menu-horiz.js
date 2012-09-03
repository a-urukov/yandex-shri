/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-menu-horiz', {

    onElemSetMod : {
        'item': {
        	'state' : {
        		'current': function(elem) {
        			this.__base();
            	    var content_layout = this.findBlockOutside('b-page-layout').findBlockInside('b-content-layout');            	 
            		content_layout.changePage($('a', elem).attr('href'), true);            
     	      	}        			
        	} 
        }
   } 
});

})();
