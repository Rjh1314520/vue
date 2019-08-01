var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	loop:true,
	autoplay: 2500,
    paginationClickable: true
});

$('#form form').submit(function(){
	var userName = $('input[name="username"]').val();
	var passWord = $('input[name="password"]').val();
	var username = JSON.parse(localStorage.getItem(userName))
	if(!username){
		appendElement($('input[name="username"]'),'账号不正确，请重新输入！',false)
	}else{
		$('input[name="username"]').next().remove();
		if(username.password != passWord){
			appendElement($('input[name="password"]'),'密码不正确，请重新输入！',false)
		}else{
			$('input[name="password"]').next().remove();
			location.href = "play.html"
		}
	}
	return false;
})