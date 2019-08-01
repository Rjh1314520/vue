var a = 1;
var audioSrc = $('audio').attr('src')
var _boolean = sessionStorage.getItem('music')
var data= JSON.parse(localStorage.getItem('dataPeople'))
var dataTime = JSON.parse(localStorage.getItem('dataTime'))
var dataPlay = JSON.parse(localStorage.getItem('dataPlay'))
var jingZhang = localStorage.getItem('jingZhang')
var jingHui = localStorage.getItem('jingHui')
var nextDay = localStorage.getItem('nextDay')
$(document).ready(function(){
	if(_boolean == 'false'){
		$('audio').attr('src','')
		$('#audio').attr('src','img/mute.png')
	}else{
		$('audio').attr('src',audioSrc)
		$('#audio').attr('src','img/play.png')
	}
})
$('#audio').click(function(){
	if(_boolean){
		_boolean = sessionStorage.getItem('music')
		if(_boolean == 'true'){
			$('audio').attr('src','')
			$(this).attr('src','img/mute.png')
			sessionStorage.setItem('music','false')
		}else{
			$('audio').attr('src',audioSrc)
			$(this).attr('src','img/play.png')
			sessionStorage.setItem('music','true')
		}
	}else{
		$('audio').attr('src','')
		$(this).attr('src','img/mute.png')
		sessionStorage.setItem('music','false')
	}
})
function appendElement(_this,val,bool){
	if(bool){
		_this.next().remove()
		_this.parent().append('<span class="succeed">'+val+'</span>')
	}else{
		_this.next().remove()
		_this.parent().append('<span class="error">'+val+'</span>')
	}
	
}
function showIdentity(Identity){
	var thisLife = 0;
	for(let i in data){
		$('#app>ul').append('<li><span>'+data[i].id+'</span></li>')
		if(data[i].life == 0){
			$('li:last-child').append('<img class="die" src="img/die.png" >')
		}
		if(parseInt(i)+1 == jingZhang){
			$('li:last-child').append('<img class="jingHui" src="img/jingHui.png" >')
		}
		if(data[i].identity == Identity){
			var a = parseInt(i)+1;
			if(a == data[i].id){
				$('li:last-child').addClass(Identity)
			}
			thisLife = data[i].life;
		}
	}
	return thisLife;
}
function clickLi(_this,img,me,die){
	if(_this.children('img').length == 0 || _this.children('img').attr('class') == 'jingHui'){
		if(!_this.attr('class')){
			$('.'+img).remove();
			_this.append('<img class="'+img+'" src="img/'+img+'.png" >')
		}else{
			alert(me)
		}
	}else if(_this.children('img').attr('class') == 'die'){
		alert(die)
	}
}
// data[4].life = 1;
// localStorage.setItem('dataPeople',JSON.stringify(data))
function result(Position){
	var num = 0;
	for(var i = 0;i < Object.keys(data).length;i++){
		if(data[i].position == Position && data[i].life == 0){
			num++;
		}
	}
	return num;
}
$('.return').click(function(){
	var ping = result('ping')
	var shen = result('shen')
	var lang = result('lang')
	if(ping == 3 || shen == 3){
		localStorage.setItem('victory','lang')
		location.href = 'result.html';
	}else if(lang == 3){
		localStorage.setItem('victory','hao')
		location.href = 'result.html';
	}else{
		location.href = 'playGame.html';
	}
})
function disabledSure(){
	$('.sure').attr('disabled','disabled')
	$('.sure').addClass('disabled-btn');
	$('.return').removeClass('disabled-btn');
	$('.return').removeAttr('disabled')
}