([
    {
        block: 'b-page',      
        title: 'Школа разработки интерфейсов ',
        head: [
	    	{ elem: 'js', url: 'jquery.min.js' },
	    	{ elem: 'js', url: 'highlight.min.js' },	    	
	    	{ elem: 'css', url: '_index.css' },
	    	{ elem: 'css', url: 'magula.css' },
	    	{ elem: 'css', url: 'screen.css' },     
        	{ elem: 'js', url: '_index.js' }        	        	    	
		],
        content: [
            {
            	block: 'b-page-layout',            	
            	content: [
            		{
            			block: 'b-header',
            			content: [
            				{
							    block: 'b-logo',
							    content: [
									{
										elem: 'link',
									    url: '#',
										title: 'yandex logo',
										icon: {
											elem: 'icon',
											url: 'logo.png',
											alt: 'yandex logo'
								    	}	
								    }
								]						    
							},
            				{
            					block: 'b-head-title',
            					title: 'Школа разработки интерфейсов — Уруков Андрей'
            				},
            				{
            					block: 'b-menu-horiz',
            					mods: { layout: 'normal' },							    
							  	content: [
							    	{
							    		elem: 'item',
							      		elemMods: { state: 'current' },
							      		content: {
							        		block: 'b-link',
							        		mods: { pseudo: 'yes' },	
							        		url: 'tasks',						        		
							        		mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],							        		
							        		content: 'Технические задания'
							    		}
							    	},					
							    	{
								      	elem: 'item',
								      	content: {
								        	block: 'b-link',
								        	mods: { pseudo: 'yes' },
								        	url: 'questions',								        	
								        	mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],								        	
								        	content:  'Общие вопросы'
								      	}								    
							    	},
							    	{
								      	elem: 'item',
								      	content: {
								        	block: 'b-link',								        	
								        	mods: { pseudo: 'yes' },
								        	url: 'expirience',								        	
								        	mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],								        
								        	content: 'Опыт разработки'
								      	}								    
							    	}
							   ]						    	
            				}
            			]
            		},
            		{
            			block: 'b-content-layout',  
            			current_page: 'tasks',
            			js: true       				            			 			
            		},
            		{
						block: 'b-footer',
						content: [
							{
								elem: 'copyright',
								content: '© 2012 Уруков Андрей'						
							}
						]           			
            		}            		  		
            	]
            }
        ]
    }
])
