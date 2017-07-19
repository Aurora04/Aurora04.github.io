$(function() {
		//右边选择栏
	$("#icon_tmgwc").mouseenter(function() {
		$('.iconfont.icon-tianmaochaoshigouwuche').css('color', 'white')
	})
	$("#icon_tmgwc").mouseleave(function() {
		$('.iconfont.icon-tianmaochaoshigouwuche').css('color', 'red')

	})
	$('.icon_bg_cd').mouseenter(function() {
		var $Span = '<span>';
		$('.icon_bg').css('top', ($(this).position().top + 2));
		$('.icon_bg').html($(this).attr('myText') + $Span);
		setTimeout(function() {
			$('.icon_bg').animate({
				'right': 35,
				'opacity': 1
			}, 500)
		}, 200)
	})
	$('.icon_bg_cd').mouseleave(function() {
		$('.icon_bg').animate({
			'right': 55,
			'opacity': 0
		}, 500)
	})
	$('#backTop').click(function() {
		var timer = setInterval(function() {
			var c = $(window).scrollTop();
			$(window).scrollTop(c - 50);
			if(c <= 0) {
				clearInterval(timer);
			}
			console.log(1)
		}, 2)
	})
	//当滚动条滚到500 距离的位置时 显示页面上方的搜索栏	
	$(window).scroll(function() {
		var h2 = $(this).scrollTop();
		if(h2 >1500) {
			$('#seekTop').slideDown();
		} else {
			$('#seekTop').slideUp();
		}
	});
	
	//点击我的淘宝有选项的文字，切换后面的向下图标
	$("#on").mouseenter(function() {
		shiftIn($("#Under_1")[0], $("#i")[0], $("#on")[0], $("#dianji")[0], true)
	});
	$("#dianji").mouseleave(function() {
		shiftIn($("#Under_1")[0], $("#i")[0], $("#on")[0], $("#dianji")[0], false)

	})
	//移入收藏夹，显示出它的子选项
	$("#Bookmarks").mouseenter(function() {
		shiftIn($("#favorite")[0], $("#ii")[0], $("#Bookmarks_1")[0], $("#Bookmarks")[0], true)
	});
	$("#Bookmarks").mouseleave(function() {
		shiftIn($("#favorite")[0], $("#ii")[0], $("#Bookmarks_1")[0], $("#Bookmarks")[0], false)
	})
	//移入商家支持，显示子选项
	$("#sustain").mouseenter(function() {
		shiftIn($("#support")[0], $("#iii")[0], $("#sustain_1")[0], $("#sustain")[0], true)
	});
	$("#sustain").mouseleave(function() {
		shiftIn($("#support")[0], $("#iii")[0], $("#sustain_1")[0], $("#sustain")[0], false)
	})
	//移入网站导航。显示子选项
	$("#map").mouseenter(function() {
		shiftIn($("#site")[0], $("#iiii")[0], $("#map_1")[0], $("#map")[0], true)

	});
	$("#map").mouseleave(function() {
		shiftIn($("#site")[0], $("#iiii")[0], $("#map_1")[0], $("#map")[0], false)
	})
	/**
	 * 
	 * @param {Object} subclass 子标签 选项
	 * @param {Object} icon	箭头指向
	 * @param {Object} fontColor 鼠标进入的字体颜色
	 * @param {Object} bgColor 鼠标进入的背景颜色
	 * @param {Object} bool 进入或离开
	 */
	function shiftIn(subclass, icon, fontColor, bgColor, bool) {
		if(bool) {
			subclass.style.display = "block";
			icon.className = 'iconfont icon-head103xiao';
			fontColor.style.color = "red";
			bgColor.style.background = "white"
		} else {
			subclass.style.display = 'none';
			icon.className = 'iconfont icon-head103xiaoxia';
			fontColor.style.color = "white";
			bgColor.style.background = "";
		}

	}

	//商品分类.天猫国际
	$('.productB').mouseenter(function() {
		$(this).children('div').css('display','block')
		$(this).children('div').animate({'top':-34+'px'},300)
	});
	$('.productB').mouseleave(function() {
		$(this).children('div').animate({'top':-22+'px'},100,function(){
			$(this).css('display','none');
		})
	})
	
//	图片轮换，商品类别选择
	//	移入大类别 显示小类别
	$('.listBox li').mouseenter(function(){
		$('.Products_option').css('display','block');
		$('.listBox li').each(function(){
			$(this).css('color','#404040');
			$(this).children('a').css('color','#404040');
			$(this).css('background','')
			$(this).css('font-weight','')
			
		});
		$(this).css('color','#E64479');
		$(this).children('a').css('color','#E64479');
		$(this).css('background','white')
		$(this).css('font-weight','600')
	})
	//	移出类别选项 恢复原始状态
	$('.merchandise_main_1').mouseleave(function(){
		$('.Products_option').css('display','none')
		$('.listBox li').css('color','#404040');
			$('.listBox li').children('a').css('color','#404040');
			$('.listBox li').css('background','')
			$('.listBox li').css('font-weight','')
			
	})

	//图片轮换
	var list_presentationImg = [
							'img/listBox/TB17.jpg',
							'img/listBox/TB15.jpg',
							'img/listBox/TB14.jpg',
							'img/listBox/TB13.jpg',
							'img/listBox/TB16.jpg',
							'img/listBox/TB12.jpg'
							];
	var presentationImg=[
							'img/listBox/child/TB20.png',
							'img/listBox/child/TB21.png',
							'img/listBox/child/TB22.png',
							'img/listBox/child/TB23.png',
							'img/listBox/child/TB24.png',
							'img/listBox/child/TB25.png',
							'img/listBox/child/TB26.png',
							'img/listBox/child/TB27.png'
						]
		var canvas = document.getElementById("canvas");
		var context = canvas.getContext("2d");
		var presentationImg_length=list_presentationImg.length;
		var imgI = 1;
		var imgJ = 2;
		var img = new Image();
		img.src ='img/listBox/TB17.jpg';
		canvasImg();
		//设定图片下面的LI
		var strLi = '';
			for(var i =0;i<presentationImg_length;i++){
				if(i==0){
				strLi+='<li class="activeLi"></li>';
				}else{
					strLi+='<li></li>';
				}
			}
			$('.list_presentation ul').html(strLi);
			$('.list_presentation ul').css('margin-left',($('.list_presentation').width()/2)-(presentationImg_length*15)+'px')
			//图片轮换  
			var imgTime = setInterval(function(){
				context.clearRect(0,0,canvas.width,canvas.height);
				if(imgI>presentationImg_length-1){
					imgI=0;
				}
				presenImg();
				img.src =list_presentationImg[imgI];
				//图片轮换LI 变化
				$('.list_presentation ul li').each(function(){
					$(this).removeClass('activeLi');
				})
				$('.list_presentation ul li').eq(imgI).addClass('activeLi');
				canvasImg();
				$('canvas').addClass('.canvasTo');
				imgI++;
			},3000);
			//判断轮换图 的 小图片是否现实
			function presenImg(){
					//小项图片
				if(imgI==0 ||imgI==2 || imgI==4 || imgI==5){
					if(imgJ>presentationImg.length-1){
						imgJ=0;
					}
					if(imgI==0){
						imgJ=0;
					}
					if(imgI==2 ){
						imgJ=2;
					}
					if(imgI==4){
						imgJ=4
					}
					if( imgI==5){
						imgJ=6
					}
					$('#presentation_1 img').attr('src',presentationImg[imgJ]);
					$('#presentation_2 img').attr('src',presentationImg[imgJ+1]);
					$('#presentation_1').css('display','block');
					$('#presentation_2').css('display','block');
				}else{
					$('#presentation_1').css('display','none');
					$('#presentation_2').css('display','none');
				}
			}
			
			//获取图片上的某点的颜色
			function canvasImg(){
				$(img).load(function () {
					context.drawImage(img,0,0);
					var colorData = document.getElementById("canvas").getPixelColor(500,10);
				// 获取该点像素的数据
					var color = colorData.rgba;
					$('#merchandise').css('background',color)
				});
			}
			//点击LI 切换图片
			$('.list_presentation ul li').click(function(){
				$('.list_presentation ul li').each(function(){
					$(this).removeClass('activeLi');
				})
				$(this).addClass('activeLi');
				img.src =list_presentationImg[$(this).index()];
				imgI=$(this).index();
				presenImg();
				canvasImg();
			})
			
//品牌街
		//鼠标移入换一批
		$('.cont').mouseenter(function(){
			$(this).children('div').addClass('rotate');
			$('.iconfont.icon-huanyipi').css('color','white')
		})
		$('.cont').mouseleave(function(){
			$(this).children('div').removeClass('rotate');
			$('.iconfont.icon-huanyipi').css('color','  #A69999')
			
		})
//		//移入LI显示优惠券
		$('.item').mouseenter(function(){
			$(this).children('div').eq(1).removeClass('mask opacit1')
			
			$(this).children('div').eq(1).addClass('mask opacit')
		})
		$('.item').mouseleave(function(){
			$(this).children('div').eq(1).removeClass('mask opacit')
			
			$(this).children('div').eq(1).addClass('mask opacit1')
		})

//潮流前沿 移入 图片变大 
		$('.preface_img').mouseenter(function(){
			$(this).children('div').children('img').removeClass()
			
			$(this).children('div').children('img').addClass('imgBi')
			
		})
		$('.preface_img').mouseleave(function(){
			$(this).children('div').children('img').removeClass()
			$(this).children('div').children('img').addClass('imgSm')
			
		})

//美丽人生 鼠标移入透明度产生变化

		$('.beautifulList_content_left').mouseenter(function(){
			$(this).children('._content_leftTop').children('img').removeClass();
			$(this).children('._content_leftTop').children('img').addClass('imgOpc');
			$(this).children('._content_leftTop').children('span').css('color','red');
		})
		$('.beautifulList_content_left').mouseleave(function(){
			$(this).children('._content_leftTop').children('img').removeClass();
			$(this).children('._content_leftTop').children('img').addClass('imgOpcNo');
			$(this).children('._content_leftTop').children('span').css('color','black');
		})
	//鼠标移入 图片左移
		$('._content_right_left div div').mouseenter(function(){
			$(this).children('img').removeClass();
			$(this).children('img').addClass('imgRightGO');
		});
		$('._content_right_right div').mouseenter(function(){
			$(this).children('img').removeClass();
			$(this).children('img').addClass('imgRightGO');
		});
	//移出右移
		$('._content_right_left div div').mouseleave(function(){
			$(this).children('img').removeClass();
			$(this).children('img').addClass('imgRightBack');
		});
		$('._content_right_right div').mouseleave(function(){
			$(this).children('img').removeClass();
			$(this).children('img').addClass('imgRightBack');
		});
	//猜你喜欢 鼠标移入产生边框
		$('.like_recommend ul li').mouseenter(function(){
			$(this).css('border','1px solid red')
			$(this).children('a').children('img').removeClass();
			$(this).children('a').children('img').addClass('likeOpc');
			
		})
		$('.like_recommend ul li').mouseleave(function(){
			$(this).css('border','')
			
			$(this).children('a').children('img').removeClass();
			$(this).children('a').children('img').addClass('likeOpcNo');
			
		})








})