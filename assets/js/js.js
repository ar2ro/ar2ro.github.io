/*
	Add target="_blank" to any link that starts with "http" (not internal)
*/
$('.page-content a').each(function(i,v){
	if($(v).attr('href').startsWith('http')){
		$(v).attr('target', '_blank')
	}
})

$('.title .close-open')[0].getClientRects();

/*
	if the description line in the header is wrapped hide the social icons, if it continues to be wrapped hide the line
*/
	$(window).bind('load resize orientationchange', function(e){
		testfit()
	});

	function testfit(scrolled){
		console.log('loaded')
		$('.site-header .social').show();
		$('.title .close-open').show();

		if($(window).outerWidth(true) <= 900 && $('.title .close-open')[0].getClientRects().length > 1){
			if ($(".site-header .social").is(":visible") == true) { 
			  $('.site-header .social').hide();
			}
			if ($(".site-header .social").is(":visible") != true && $('.title .close-open')[0].getClientRects().length > 1) { 
			  $('.title .close-open').hide();
			}
		}
	}