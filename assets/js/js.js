$('.page-content a').each(function(i,v){
	if($(v).attr('href').startsWith('http')){
		$(v).attr('target', '_blank')
	}
})