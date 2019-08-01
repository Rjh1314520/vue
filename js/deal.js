$('.header img:first-child').on('touchend',function(){
	location.href="play.html"
})
var data = JSON.parse(localStorage.getItem('dataPeople'))
$('.id h1').text(data[0].id)
var bool = true;
var i = 0;
Prev()
$('.button').on('click','button',function(){
	if($(this).attr('class') == 'show'){
		if(bool){
			$(this).text('隐藏身份')
			$('.bg').addClass(data[i].identity)
			bool = false;
		}else{
			Remove()
		}
	}else if($(this).attr('class') == 'next'){
		var num = Object.getOwnPropertyNames(data).length;
		Remove()
		i++;    //获取总人数
		if(i >= num - 1){
			if(i>=num){
				location.href = "playGame.html"
			}else{
				$('.id h1').text(i+1)
				$(this).text('开始游戏');
			}
		}else{
			$(this).text('下一个')
			$('.id h1').text(i+1)
		}
		Prev()
	}
	else if($(this).attr('class') == 'prev'){
		Remove()
		$('.next').text('下一个')
		i--;
		if(i>=0){
			$('.id h1').text(i+1)
			if(i>0){
				$(this).removeAttr('disabled','disabled')
			}else{
				$(this).attr('disabled','disabled')
			}
		}
	}
})
function Prev(){
	// if(i<=0){
	// 	$('.prev').attr('disabled','disabled')
	// }else{
	// 	$('.prev').removeAttr('disabled','disabled')
	// }
}
function Remove(){
	$('.show').text('显示身份')
	$('.bg').removeClass(data[i].identity)
	bool = true;
}