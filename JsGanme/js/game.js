$(function(){
	var gameAttr = ['one.html','two.html','three.html','four.html','five.html'];
		var c = $('.top').children('div').length;
		var j = 0;
		var k =0;
		//给每个元素一个自定义属性，好判断是否被覆盖
		for(var i =0;i<c-1;i++){
			$('.top').children('div').eq(i).attr({'top':j*50,'left':k*50});
			k++;
			if((i+1)%($('.top').width()/50)==0 && i!=0){
				j++;
				k=0;
			}
		}
	var cont = 0;
		window.onkeydown=function(ev){
			 cont=0;
			var imgLeft = $('#per').position().left;
			var imgTop = $('#per').position().top;
			var newEv = ev || event;
			var evCode = newEv.keyCode;
		
			if(evCode==39){
				ccc('left',imgLeft,1,39);
			}
			if(evCode==37){
				ccc('left',imgLeft,-1,37);
			}
			if(evCode==38){
				ccc('top',imgTop,-1,38);
			}
			if(evCode==40){
				ccc('top',imgTop,1,40);
			}
		}
		var time =null;
		var bool=true;
		var boo=true;
//		移动
/**
 * 
 * @param {Object} place 移动方向
 * @param {Object} distance 原来定位距离
 * @param {Object} n 正负
 * @param {Object} dire 按键值
 */
	function ccc(place,distance,n,dire){
		var num=0;
		if(bool){
			clearInterval(time);
			time = setInterval(function(){
			bool=false
			num+=10;
			//白色背景 框  和移动过的 不能移动进去 
			boo=false
			for(var i =0;i<c-1;i++){
				var L=$('.top').children('div').eq(i).attr('left');
				var T=$('.top').children('div').eq(i).attr('top');
				var yan = $('.top').children('div').eq(i).attr('class');
					
				
		//白色背景 框  和移动过的 不能移动进去 
				if(place=='top'){
					if($('#per').position().left==L){
						if($('#per').position().top+(50*n)==T){
							if(yan=='whit' || yan=='yet'){
								clearInterval(time);
								bool=true;
								return false;
							}
						}
					}
				}
				if(place=='left'){
					if($('#per').position().left+(50*n)==L){
						if($('#per').position().top==T){
							if(yan=='whit' || yan =='yet'){
								clearInterval(time);
								bool=true;
								return false;
							}
						}
					}
				}
						
		//走到边上 则停止走动
				if(place=='left'){
					if(distance+(num*n)<0 || distance+(num*n)>$('.top').width()-50){
						clearInterval(time);
						bool=true;
						return false;
					}
				}
				if(place=='top'){
					if(distance+(num*n)<0 || distance+(num*n)>$('.top').height()-50){
						clearInterval(time);
						bool=true;
						return false;
					}
				}
				
		//去除 移动方向的边框
				if($('#per').position().left==L){
						if($('#per').position().top==T){
							if(dire==39){
								$('.top').children('div').eq(i).css('border-right','0px');
								boo='left';
							}
							if(dire==37){
								$('.top').children('div').eq(i).css('border-left','0px');
								boo='right';
							}
							if(dire==38){
								$('.top').children('div').eq(i).css('border-top','0px');
								boo='bottom';
							}
							if(dire==40){
								$('.top').children('div').eq(i).css('border-bottom','0px');
								boo='top';
							}
						}
					}
				stop(n);
			}
				//移动
				$('#per').css(place,distance+(num*n))
				if(num==50){
					clearInterval(time);
					bool=true;
					judge();
					return;
				}
			},20)
		
		}
		
	}
		
		//移动去除小圆圈 并判断是否结束
		function judge(){
			for(var i =0;i<c-1;i++){
				var L=$('.top').children('div').eq(i).attr('left');
				var T=$('.top').children('div').eq(i).attr('top');
				var yan = $('.top').children('div').eq(i).attr('class');
				if($('#per').position().left==L){
					if($('#per').position().top==T){
						if(yan=='yuan'){
							$('.top').children('div').eq(i).removeClass()
						}
						$('.top').children('div').eq(i).addClass('yet');
					}
				}
			}
			//判断圆圈是否完了
			for(var i =0;i<c-1;i++){
				var yan = $('.top').children('div').eq(i).attr('class');
				if(yan=='yuan'){
					cont++;
				}
			}
			if(cont==0){
				var gaNo =$('.top').attr('gaNo')
				gaNo++
				location.href=gameAttr[gaNo]
				alert('结束了哦！')
			}
		}
		
//		去除所移动方向的边框
		function stop(n){
			for(var j =0;j<c-1;j++){
					var Le=$('.top').children('div').eq(j).attr('left');
					var Te=$('.top').children('div').eq(j).attr('top');
					if(boo=='right'){
							if($('#per').position().top==Te){
								if($('#per').position().left+(50*n)==Le){
									$('.top').children('div').eq(j).css('border-right','0px');
								}
							}
						}
					if(boo=='left'){
						if($('#per').position().left+(50*n)==Le){
							if($('#per').position().top==Te){
									$('.top').children('div').eq(j).css('border-left','0px');
							}
						}
					}
					if(boo=='top'){
						if($('#per').position().left==Le){
							if($('#per').position().top+(50*n)==Te){
									$('.top').children('div').eq(j).css('border-top','0px');
							}
						}
					}
					if(boo=='bottom'){
						if($('#per').position().left==Le){
							if($('#per').position().top+(50*n)==Te){
									$('.top').children('div').eq(j).css('border-bottom','0px');
							}
						}
					}
				}
		}
})