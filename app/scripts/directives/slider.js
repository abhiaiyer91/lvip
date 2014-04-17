app.directive('slide', function (){
	return {
    	link: function(scope, element, attrs){
			element.revolution({
				delay:9000,
				startwidth:950,
				startheight:550,
				onHoverStop:"on",	
				navigationType:"none",		
				soloArrowLeftHOffset:0,
				soloArrowLeftVOffset:0,
				soloArrowRightHOffset:0,
				soloArrowRightVOffset:0,
				touchenabled:"on",			
				fullWidth:"on",
				shadow:0					
			});

    };
});