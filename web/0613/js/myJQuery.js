function $(id){
	return  document.getElementById(id);
}

//DIV 获取外边距
function get(obj,attr){
		if(obj.currentStyle){
		  return	parseInt(obj.currentStyle[attr]);
			}else{
		return	parseInt( getComputedStyle(obj)[attr]);
			}
}
//查询所需要的属性
/**
 * 
 * @param {Object} obj 所要操作的元素
 * @param {Object} nature 元素的属性
 * @param {Object} operate 属性值
 * @param {Object} maxNat 走到限制点
 */
function property(obj,nature,operate,maxNat,enFun){
	var time=null
	clearInterval(time);
	time = setInterval(function(){
		var oTop=get(obj,nature)+operate;
	//如果属性为正数。当属性值大于了限制点则 为限制点 然后清除定时器
		if(operate<0){
			if(oTop<=maxNat ){
				oTop=maxNat;
			}
	//如果属性为负数。当属性值小于了限制点则等于限制点 然后清除定时器
		}else{
				if(oTop>=maxNat){
				oTop=maxNat;
				clearInterval(time);
			}
		}
		obj.style[nature]=oTop+'px';
		if(oTop==maxNat){
			clearInterval(time);
			if(enFun){
				enFun();
			}
		}
	},100)
}
/**
 * 
 * @param {Object} obj 要修改隐藏度的标签
 * @param {Object} num 每次修改多少
 * @param {Object} maxOpa	最多修改多少
 */
	function opacity(obj,num,maxOpa,enFun){
			time = setInterval(function(){
			 	var opa = parseFloat(getComputedStyle(obj).opacity)-0.03;
				if(opa<=maxOpa){
					opa=maxOpa;
					clearInterval(time);
					if(enFun){
						enFun();
					}
				}
				obj.style.opacity=opa
			 },60)
		}
	
/**
 * 根据获取到的标签，进行标签抖动
 * @param {Object} obj 获取的标签
 * @param {Object} attr 抖动方向
 */
function shake(obj,attr,enFun){
			var num=0
			if(obj.s){
				obj.s=false;
				var picL= get(obj,attr);
				var arra =[];
				for(var i=12;i>=0;i-=2){
					arra.push(i,-i);
				}
				obj.shaker=setInterval(function(){
					obj.style[attr]=picL+arra[num]+'px';
					num++;
					if(num==arra.length){
//						obj.s=true;
						clearInterval(obj.shaker);
						num=0;
						if(enFun){
							enFun();
						}
					}
				},30)
			}
}