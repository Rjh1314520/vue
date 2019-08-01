$('.header img:first-child').on('touchend',function(){
	location.href="deal.html"
})
$('a').click(function(){
	if($(this).attr('href') == 'javascript:;'){
		$(this).nextAll().toggle()
		if($(this).nextAll().css('display') == 'none'){
			$(this).addClass('shou')
		}else{
			$(this).removeClass('shou')
		}
	}
})
