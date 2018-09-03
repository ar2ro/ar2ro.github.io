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

	$('.toggle .expand').click(function(){
		var dt = $(this).closest('dt');
		var toggleBlock  = $(this).closest('.toggle');
		if($(dt).hasClass('collapsed')){
			$.each($(toggleBlock).find('dt'), function(i,v){
				$(v).addClass('collapsed')
			})
			$(dt).toggleClass('collapsed');
		}else{
			$(dt).toggleClass('collapsed');
		}
	})
	$.each($('.curriculum dt .progress'), function(i,v){
		var steps = $(v).closest('dt').next().find('li');
		var totalSteps = steps.length;
		var totalProgress = 0;
		$.each(steps, function(i,v){
			var stepProgress = parseFloat($(v).find('.progress')[0].innerText);
			totalProgress += stepProgress;
		})
		totalProgress /= totalSteps;
		
		$(v)[0].innerText = totalProgress.toFixed(2);
	})

	//$('.toggle dt').click(function(){
	//	if($(this).hasClass('collapsed')){
	//		var parent = $(this).parent();
	//		$.each($(parent).find('dt'), function(i,v){
	//			$(v).addClass('collapsed')
	//		})
	//		$(this).next().toggleClass('hidden');
	//	}else{
	//		$(this).next().toggleClass('hidden');
	//	}
	//})