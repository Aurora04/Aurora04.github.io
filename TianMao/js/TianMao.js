$(function(){
//点击我的淘宝有选项的文字，切换后面的向下图标
	$("#on").mouseenter(function(){
		shiftIn($("#Under_1")[0],$("#i")[0],$("#on")[0],$("#dianji")[0],true)
	});
	$("#dianji").mouseleave(function(){
		shiftIn($("#Under_1")[0],$("#i")[0],$("#on")[0],$("#dianji")[0],false)
		
	})
//移入收藏夹，显示出它的子选项
	$("#Bookmarks").mouseenter(function(){
		shiftIn($("#favorite")[0],$("#ii")[0],$("#Bookmarks_1")[0],$("#Bookmarks")[0],true)
	});
	$("#Bookmarks").mouseleave(function(){
		shiftIn($("#favorite")[0],$("#ii")[0],$("#Bookmarks_1")[0],$("#Bookmarks")[0],false)
	})
//移入商家支持，显示子选项
	$("#sustain").mouseenter(function(){
		shiftIn($("#support")[0],$("#iii")[0],$("#sustain_1")[0],$("#sustain")[0],true)
	});
	$("#sustain").mouseleave(function(){
		shiftIn($("#support")[0],$("#iii")[0],$("#sustain_1")[0],$("#sustain")[0],false)
	})
//移入网站导航。显示子选项
	$("#map").mouseenter(function(){
		shiftIn($("#site")[0],$("#iiii")[0],$("#map_1")[0],$("#map")[0],true)

	});
	$("#map").mouseleave(function(){
		shiftIn($("#site")[0],$("#iiii")[0],$("#map_1")[0],$("#map")[0],false)
	})
/**
 * 
 * @param {Object} subclass 子标签 选项
 * @param {Object} icon	箭头指向
 * @param {Object} fontColor 鼠标进入的字体颜色
 * @param {Object} bgColor 鼠标进入的背景颜色
 * @param {Object} bool 进入或离开
 */
function shiftIn(subclass,icon,fontColor,bgColor,bool){
	if(bool){
		subclass.style.display="block";
		icon.className='iconfont icon-head103xiao';
		fontColor.style.color="red";
		bgColor.style.background="white"
	}else{
		subclass.style.display='none';
		icon.className='iconfont icon-head103xiaoxia';
		fontColor.style.color="white";
		bgColor.style.background="";
	}
	
	
}
//右边选择栏
$("#icon_tmgwc").mouseenter(function(){
	$('.iconfont.icon-tianmaochaoshigouwuche').css('color','white')
})
$("#icon_tmgwc").mouseleave(function(){
	$('.iconfont.icon-tianmaochaoshigouwuche').css('color','red')
	
})

$('.icon_bg_cd').mouseenter(function(){
		var $Span = '<span>';
		$('.icon_bg').css('top',($(this).offset().top+2));
		$('.icon_bg').html($(this).attr('myText')+$Span);
	setTimeout(function(){
			$('.icon_bg').animate({'right':92,'opacity':1},500)
			
		},200)
})
$('.icon_bg_cd').mouseleave(function(){
			$('.icon_bg').animate({'right':122,'opacity':0},500)
			
	
})
$('#backTop').click(function(){
	var timer= setInterval(function(){
		var c =$(window).scrollTop();
		$(window).scrollTop(c-50);
		if(c<=0){
			clearInterval(timer);
		}
		console.log(1)
	},20)
})
	//当滚动条滚到500 距离的位置时 显示页面上方的搜索栏	
	$(window).scroll(function(){
            	var h2=$(this).scrollTop();
            if (h2>500) {
           		$('#seekTop').slideDown();
            }else{
           		$('#seekTop').slideUp();
            	
            }
        });
})
