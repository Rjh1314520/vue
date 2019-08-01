$('input').blur(function(){
	var value = $(this).val();
	if(value){
		//判断用户名
		if($(this).attr('name') == 'username'){
			if (!/[\u4E00-\u9FA5]/g.test(value)) {
				if(/^[a-zA-Z]{1,}[0-9A-Za-z]{7,}$/.test(value)){
					if(localStorage.getItem(value)){
						appendElement($(this),'该账号已存在，请重新输入！',false)
					}else{
						appendElement($(this),'用户名格式正确',true)
					}
				}else{
					appendElement($(this),'首字为字母，至少8位，不能包含汉字！',false)
				}
			}else{
				appendElement($(this),'首字为字母，至少8位，不能包含汉字！',false)
			}
		 }
		 //判断密码
		 else if($(this).attr('name') == 'password'){
			if (!/[\u4E00-\u9FA5]/g.test(value)) {
				if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/.test(value)){
					appendElement($(this),'密码格式正确',true)
				}else{
					appendElement($(this),'必须字母和数字混合，至少8位，不能包含汉字！',false)
				}
			}else{
				appendElement($(this),'必须字母和数字混合，至少8位，不能包含汉字！',false)
			}
		 }
		 //判断确认密码
		 else if($(this).attr('name') == 'confirmPws'){
		 	if($(this).val() == $('input[name="password"]').val()){
		 		appendElement($(this),'密码一致',true)
		 	}else{
		 		appendElement($(this),'两次密码不一致,请输入正确的密码！',false)
		 	}
		 }
		
		 //判断电话号码
		 else if($(this).attr('name') == 'phone'){
		 	if (!/[\u4E00-\u9FA5]/g.test(value)) {
		 		if(/^[1][3,4,5,7,8][0-9]{9}$/.test(value)){
		 			appendElement($(this),'电话号码格式正确',true)
		 		}else{
		 			appendElement($(this),'电话号码格式不正确请重新输入！',false)
		 		}
		 	}else{
				appendElement($(this),'电话号码格式不正确请重新输入！',false)
			}
		 }
	}
})
$('button[type="reset"]').on('touchend',function(){
	$('input').next().remove()
})
 $('#form').submit(function(){
// $('button[type="button"]').click(function(){
	var bool = false;
	for (var i = 0;i<$('input').length;i++) {
		if($('#form input').eq(i).next().attr('class') == 'succeed'){
			bool = true;
		}else{
			bool = false;
		}
	}
	if(bool){
		var userName = $('input[name="username"]').val();
		var passWord = $('input[name="password"]').val();
		var Phone = $('input[name="phone"]').val();
		var username = JSON.stringify(userName)
		username = {
			password:passWord,
			phone:Phone
		}
		var userText = JSON.stringify(username)
		localStorage.setItem(userName, userText);
		location.href="index.html"
	}
	
	return false;
})
$('.header img:first-child').on('touchend',function(){
	location.href="index.html"
})
//localStorage.removeItem('a11111111');