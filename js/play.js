$('.button button').on('touchend',function(){
	$('.button button').removeClass('border-color');
	$(this).addClass('border-color');
	peopleNum($(this).text())
})
$('.header img:first-child').on('touchend',function(){
	location.href="index.html"
})
function  peopleNum(num){
	$('.prophet').text('1 人')
	$('.witch').text('1 人')
	$('.guard').text('1 人')
	if(num == 9){
		$('.civilian').text('3 人')
		$('.werewolf').text('3 人')
	}else if(num == 10){
		$('.civilian').text('4 人')
		$('.werewolf').text('3 人')
	}else if(num == 11){
		$('.civilian').text('4 人')
		$('.werewolf').text('4 人')
	}else if(num == 12){
		$('.civilian').text('5 人')
		$('.werewolf').text('4 人')
	}
	
}
$('.play').on('touchend',function(){
	if(parseInt($('.prophet').text())>0){
		var num = parseInt($('.border-color').text())
		var arr = []
		setArr(arr,$('.civilian'))
		setArr(arr,$('.werewolf'))
		setArr(arr,$('.prophet'))
		setArr(arr,$('.witch'))
		setArr(arr,$('.guard'))
		var dataPeople = new Object();
		var i = 0;
		var keys = new Array(1)
		while (i<num){
			var key = Math.ceil(Math.random()*num)-1;
			if(keys.indexOf(key)<0){
				keys[i] = key;
				var data = arr[key]
				dataPeople[i] = {
					id:i+1,
					identity:data,
					life:1,
				}
				if(arr[key] == 'civilian'){
					dataPeople[i].position = 'ping'
				}else if(arr[key] == 'werewolf'){
					dataPeople[i].position = 'lang'
				}else{
					dataPeople[i].position = 'shen'
				}
				if(arr[key] == 'witch'){
					dataPeople[i].duyao = 1
					dataPeople[i].jieyao = 1
				}
				i++;
			}
		}
			console.log(dataPeople)
			localStorage.setItem('dataPeople',JSON.stringify(dataPeople))
			var dataTime = {
				day:1,
				schedule:1
			}
			localStorage.setItem('dataTime',JSON.stringify(dataTime))
			localStorage.setItem('jingZhang','false')
			localStorage.setItem('jingHui','true')
			location.href = 'deal.html'
			
	}else{
		alert('请选择人数！')
	}
})
$('.continue').on('touchend',function(){
	if(localStorage.getItem('dataTime')){
		location.href = 'deal.html'
	}else{
		alert('游戏未开始')
	}
})
// localStorage.removeItem('dataTime');
//添加数组
function setArr(arr,el){
	for(var i = 0;i < parseInt(el.text());i++){
		arr.push(el.attr('class'))
	}
}
