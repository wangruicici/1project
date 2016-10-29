//兼容问题(通过父对象类名获取子对象标签名(标签名相同)) 
function getClass( cn){
	if(document.getElementsByClassName){
		//alert("支持");
		return document.getElementsByClassName(cn);

	}else{
		//alert("IE6~8");
		var all=document.getElementsByTagName("*");
		var arr=[];
		for(var i=0;i<all.length;i++){
			
			if(all[i].className==cn){
				arr.push(all[i]);
				}
			}
		return arr;
	}
}

//兼容问题(通过父对象类名获取子对象类名(标签名不相同，类名相同)) 
function getClass1(val,obj){          //val-->类名     obj-->范围
	var obj=obj||document;
	if(document.getElementsByClassName){
		//alert("支持");
		return obj.getElementsByClassName(val);

	}else{
		//alert("IE6~8");
		var all=obj.getElementsByTagName("*");
		var arr=[];
		for(var i=0;i<all.length;i++){
			
			if(all[i].className==val){
				arr.push(all[i]);
				}
			}
		return arr;
	}
}

//兼容问题 子对象两个类名

function getClass2(val,obj){          
	var obj=obj||document;
	if(document.getElementsByClassName){
		//alert("支持");
		return obj.getElementsByClassName(val);

	}else{
		//alert("IE6~8");
		var all=obj.getElementsByTagName("*");
		var arr=[];
		for(var i=0;i<all.length;i++){
			
			if(check(all[i].className,val)){
				arr.push(all[i]);
				}
			}
		return arr;
	}
}
function check(classname,val){
	var arr=classname.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==val){
			return true;
			}
	}
	 return false;
}

//兼容问题：
// 作用：
// 	$(selector,obj)
// 	参数1：string 选择器
// 	       function  window.onload
// 	参数2：  obj   范围
//  1.window.onload=function(){}    
//      $(function(){ })===window.onload=function(){}
//  2.获取页面元素
//  	返回值：类名 标签 返回元素集合
//  	 $(选择器，范围)
//      $(".box")  通过类名方式获取
//      $("#box")  通过ID方式获取
//      $("div")   通过标签名获取

function $(selector,obj){
	var obj=obj||document;
	if(typeof selector=="string"){
		if(selector.charAt(0)=="."){
			return getClass2(selector.substring(1),obj);
		}else if(selector.charAt(0)=="#"){
			return document.getElementById(selector.substring(1));
		}
		 else if(/^[a-z|1-9]{1,10}$/.test(selector)){
		 		return obj.getElementsByTagName(selector);
		}
	}
	if(typeof selector=="function"){
		window.onload=function(){
			selector();
		}
	}
}


	//获取浏览器高度分辨率
function getHpx(){
	return window.screen.height
}

	/*获取行内、样式表中的样式
getStyle(box,"width")
 */
function getStyle(obj,attr){
  return  obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,null)[attr];
}

//获取浏览器高
function getHeight(){
	return document.documentElement.clientHeight
}

//楼层封装
function floor(floors,btns,btns1,btns2,border){
	var ih=document.documentElement.clientHeight
    var dcm=document.documentElement.scrollTop?document.documentElement:document.body;
	var scrh=dcm.scrollTop+ih/2
	for(var i=0;i<floors.length;i++){
		var flh=floors[i].offsetTop
		if(scrh>flh){
			for(var j=0;j<floors.length;j++){
		    btns1[j].style.opacity=1;
		    btns2[j].style.cssText="opacity:0";
		}
		    btns1[i].style.opacity=0;
		    btns2[i].style.cssText="opacity:1";
		}	
	}
	if(scrh>floors[0].offsetTop){
		border.style.display="block"
	}else{
		border.style.display="none"
	}

	//指定楼层
     for(var n=0;n<btns.length;n++){
	    btns[n].num=n;
		  btns[n].onclick=function(){ 
          animate(dcm,{"scrollTop":floors[this.num].offsetTop},500)
    	 }
    }
}


//获取第一个子节点的函数
function getFirst(obj){
  var all=getChilds(obj);
  return all[0];
}

//获取所有子节点兼容问题
function getChilds(obj){
  var alls=obj.childNodes;
  var arr=[];
  for(var i=0;i<alls.length;i++){
    if(!((alls[i].nodeType==3&&alls[i].nodeValue.replace(/^\s+|\s+$/g,"")=="")||alls[i].nodeType==8)){
      arr.push(alls[i]);
    }
  }
  return arr;
}

//获取最后一个子节点的函数
function getLast(obj){
  var all=getChilds(obj);
  return all[all.length-1];
}