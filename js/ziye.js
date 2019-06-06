window.onload=function(){
		var ss=document.getElementById("si");
		var ww=document.getElementById("wu");
		var ll=document.getElementById("liu");
		var qq=document.getElementById("qi");
		var shsh=document.getElementById("shi");
		var sysy=document.getElementById("shiy");
	if(document.body.scrollTop){
		document.body.scrollTop=198;
	}else{
		document.documentElement.scrollTop=198;
	}
	
	
	
	
	//---------------------搜索框
	var div=document.getElementsByClassName("div");
		var a=div[0].getElementsByClassName("td1")[0];
		var b=div[0].getElementsByClassName("td2")[0];
		var spa=div[0].getElementsByTagName("span");
		console.log(spa)
		var ssk=document.getElementById("sskx");
			a.onfocus=function(){
				a.style.borderColor="#FF6700"
				b.style.borderColor="#FF6700"
				ssk.style.display="block"
				spa[0].style.display="none"
				spa[1].style.display="none"
			}
			a.onblur=function(){
				a.style.borderColor="#bbb"
				b.style.borderColor="#bbb"
				ssk.style.display="none"
				spa[0].style.display=""
				spa[1].style.display=""
			}
	
	//=-------------------------------购物车
	
	var gouwu=document.getElementsByClassName("g")[0];
	var gou=document.getElementsByClassName("gou")[0];
		gou.onmouseover=function(){
			la(gouwu,0)
		}
		gou.onmouseout=function(){
			la(gouwu,-140)
		}
	
	//-----------------------------------开始的导航
	var taba=document.getElementsByClassName("er_yi")[0];
				var lis=taba.getElementsByTagName("li")
				console.log(lis)
				var kuaik=document.getElementsByClassName("kuai");
				var er=document.getElementById("er_er2")
				var timer1;
				var dd;
				console.log(kuaik)
				for(var i=0;i<kuaik.length;i++){
					lis[i].index=i
					lis[i].onmouseover=function(){
						la(er,140)
						kuaik[this.index].style.display="block"
						dd=this.index
					}
					lis[i].onmouseout=function(){
						la(er,-66)
						kuaik[this.index].style.display="none"
					}
					er.onmouseover=function(){
						la(er,140)
						kuaik[dd].style.display="block"
					}
					er.onmouseout=function(){
						la(er,-66)
							kuaik[dd].style.display="none"
					}
					
					
				}
	
	
//   ----------------------------------------主要----------------------------------------------------------------------	
			var yuan=document.getElementById("jiu");
			var dian=yuan.getElementsByTagName("p");
			timera=setInterval(function(){
				var scrol=document.body.scrollTop||document.documentElement.scrollTop;
				console.log(scrol)
				if(scrol<191){
					yuan.style.display="none"
				}else{
					yuan.style.display="block"
				}
				if(scrol>208&&scrol<810){
					for(var i=0;i<dian.length;i++){
						dian[i].style.backgroundColor="transparent";
					}
					dian[0].style.backgroundColor="#fff"
				}else if(scrol>810&&scrol<1700){
					for(var i=0;i<dian.length;i++){
						dian[i].style.backgroundColor="transparent";
					}
					dian[1].style.backgroundColor="#fff"
				}else if(scrol>1500&&scrol<2350){
					for(var i=0;i<dian.length;i++){
						dian[i].style.backgroundColor="transparent";
					}
					dian[2].style.backgroundColor="#fff"
				}else if(scrol>2250&&scrol<3050){
					for(var i=0;i<dian.length;i++){
						dian[i].style.backgroundColor="transparent";
					}
					dian[3].style.backgroundColor="#fff"
				}else if(scrol>3050&&scrol<3800){
					for(var i=0;i<dian.length;i++){
						dian[i].style.backgroundColor="transparent";
					}
					dian[4].style.backgroundColor="#fff"
				}else if(scrol>3800&&scrol<4700){
					for(var i=0;i<dian.length;i++){
						dian[i].style.backgroundColor="transparent";
					}
					dian[5].style.backgroundColor="#fff"
				}
			},1)
			dian[0].onclick=function(){
				if(document.body.scrollTop){
					document.body.scrollTop=208;
				}else{
					document.documentElement.scrollTop=208;
				}
				for(var i=0;i<dian.length;i++){
					dian[i].style.backgroundColor="transparent";
				}
				dian[0].style.backgroundColor="#fff"
			}
			dian[1].onclick=function(){
				if(document.body.scrollTop){
					document.body.scrollTop=958;
				}else{
					document.documentElement.scrollTop=958;
				}
				for(var i=0;i<dian.length;i++){
					dian[i].style.backgroundColor="transparent";
				}
				dian[1].style.backgroundColor="#fff"
			}
			dian[2].onclick=function(){
				if(document.body.scrollTop){
					document.body.scrollTop=1728;
				}else{
					document.documentElement.scrollTop=1728;
				}
				for(var i=0;i<dian.length;i++){
					dian[i].style.backgroundColor="transparent";
				}
				dian[2].style.backgroundColor="#fff"
			}
			dian[3].onclick=function(){
				if(document.body.scrollTop){
					document.body.scrollTop=2488;
				}else{
					document.documentElement.scrollTop=2488;
				}
				for(var i=0;i<dian.length;i++){
					dian[i].style.backgroundColor="transparent";
				}
				dian[3].style.backgroundColor="#fff"
			}
			dian[4].onclick=function(){
				if(document.body.scrollTop){
					document.body.scrollTop=3222;
				}else{
					document.documentElement.scrollTop=3222;
				}
				for(var i=0;i<dian.length;i++){
					dian[i].style.backgroundColor="transparent";
				}
				dian[4].style.backgroundColor="#fff"
			}
			dian[5].onclick=function(){
				if(document.body.scrollTop){
					document.body.scrollTop=3980;
				}else{
					document.documentElement.scrollTop=3980;
				}
				for(var i=0;i<dian.length;i++){
					dian[i].style.backgroundColor="transparent";
				}
				dian[5].style.backgroundColor="#fff"
			}
			
			
			
			var tua=ss.getElementsByTagName("img")[0];
			sy=document.getElementById("si_yi");
			tua.onmouseover=function(){
				laa(sy,{opacity:100,top:200},10)
			}
			var tub=ww.getElementsByTagName("img")[0];
			wy=document.getElementsByClassName("wu_yi")[0];
			tub.onmouseover=function(){
				laa(wy,{opacity:100,top:200},10)
			}
			var tuc=ll.getElementsByTagName("img")[0];
			ly=document.getElementsByClassName("liu_yi")[0];
			le=document.getElementsByClassName("liu_er")[0];
			tuc.onmouseover=function(){
				laa(ly,{opacity:100,top:200},10)
				laa(le,{opacity:100,bottom:100},10)
			}
			var tud=qq.getElementsByTagName("img")[0];
			qy=document.getElementsByClassName("qi_yi")[0];
			tud.onmouseover=function(){
				laa(qy,{opacity:100,top:200},10)
			}
			var v1=shsh.getElementsByTagName("video")[0];
			shy=document.getElementById("shi_yi");
			v1.onmouseover=function(){
				laa(shy,{opacity:100,top:200},10,function(){
				v1.src="img/01.webm"
					
				})
			}
			var v2=sysy.getElementsByTagName("video")[0];
			shiy=document.getElementById("shiy_yi");
			v2.onmouseover=function(){
				laa(shiy,{opacity:100,top:200},10,function(){
				v2.src="img/02.webm"
					
				})
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			function laa(obj,json,su,fn){
					clearInterval(obj.timer);
					obj.timer=setInterval(function(){
						var istrue=true;
						for(var attr in json){
							var cur;//先定义一个变量
							//先判断参数类型是什么
							if(attr=="opacity"){//透明度
								cur=getStyle(obj,"opacity")*100;
							}else{//其他属性
								cur=parseInt(getStyle(obj,attr));
							}
							
							//然后是给他一个渐变的速度
							su=(json[attr]-cur)/10;
							su=su>0?Math.ceil(su):Math.floor(su);//调整   如果出现0.几几几几的那种情况，就可以避免
							
							//写渐变
							if(cur!=json[attr]){//如果与给的值相等就停止
								istrue=false;
							//否则分情况   透明度或者其他属性
								if(attr=="opacity"){// 透明度  分火狐和ie
									obj.style.opacity=(cur+su)/100;
									obj.style.filter="alpha(opacity="+(cur+su)+")";
									
								}else{//其他属性
									obj.style[attr]=(cur+su)+"px";
								}
							}
						}
						if(istrue){
							clearInterval(obj.timer);
							fn&&fn.call(obj)// call改变指针的	有回调函数，改变指针重新调回函数
						}
					},20)
				}
			
			
			
			
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//------------------------------------封装好的透明函数
	function touming(obj,attr,target,speed){
					//清除定时器
					clearInterval(obj.timer);
					//定时器
					obj.timer=setInterval(function(){
						var cur;
						//判断传入的属性是透明度还是其他的   因为透明度没单位
						if(attr=="opacity"){
							cur=getStyle(obj,"opacity")*100; 
						}else{
							cur=parseInt(getStyle(obj,attr)); // 其他的   如width 、height/left
						}
						
						//得到并设置速度
						
						var speed=(target-cur)/10;
						speed=speed>0?Math.ceil(speed):Math.floor(speed);
						
						
						//达到目标值清除定时器
						if(cur==target){
							clearInterval(obj.timer);
						}else{
							//如果透明度   分火狐和ie
							if(attr=="opacity"){
								obj.style.opacity=(cur+speed)/100;
								obj.style.filter="alpha(opacity="+(cur+speed)+")"
							}else{// 如果是其他   如width、height
								obj.style.height=cur+speed+"px";
							}
						}
					},20)
				}
	
	
	//--------------------------------封装好的移动函数
				function la(obj,target){
					clearInterval(obj.timer);
					obj.timer=setInterval(function(){
					var cur=parseInt(getStyle(obj,"top"));
					var speed=(target-cur)/8;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
						if(cur==target){
							clearInterval(obj.timer)
						}else{
							obj.style.top=cur+speed+"px";
						}
					},10)
					
				}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}




function getStyle(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj,false)[attr];
			}
		}