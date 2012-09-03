/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-content-layout', {

	changePage : function(pageId, animate)	{
		var blocks = this.findBlocksInside('b-content-page');
        var screen_block;            	
        var buffer_block;            	            
            
        for (var i=0; i<blocks.length; i++) {
        	if (blocks[i].getMod('template') == 'no') {
           		screen_block = $(blocks[i].domElem[0]);
           	}
           	if (blocks[i].getMod('pageId') == pageId) {
           		buffer_block = $(blocks[i].domElem[0]);
           	}           			
        }
        
        if (animate)
        {
        	screen_block.fadeOut(200, function() {       								
     		    screen_block.html(buffer_block.html());
     			screen_block.fadeIn(400);
        	});
        }
        else
        {           		
        	screen_block.html(buffer_block.html());
        }
	},
	
    onSetMod : {

        'js' :  {
        	'inited' : function() {
            	this.changePage('tasks', false);            	
            }
            
   		}         
        

    }

}
);

})();
