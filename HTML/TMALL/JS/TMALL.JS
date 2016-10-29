$(function(){


/*banner鼠标滑过*/
  var bgcolors=document.getElementById("banner");
  var bb=["","#c02c4c","#bde2f2","#d40c50","#ffb701","#d8d8d8","#c02c4c","#d8d8d8","#c02c4c"
  ,"#2f8bde","#DED4C8","#d8d8d8","#ffb701","#d8d8d8","#2f8bde","#bde2f2"];
  var linkbox=getClass("bannerleft");
    var ilinks=linkbox[0].getElementsByTagName("li");
    var imgbox=getClass("jstabone");
    var imgs=imgbox[0].getElementsByTagName("ul");
  for(var i=0;i<ilinks.length;i++){
    ilinks[i].num=i;
    ilinks[i].onmouseover=function(){
            for(var j=0;j<imgs.length;j++){
              imgs[j].style.display="none";
            }
            imgs[this.num].style.display="block";
      bgcolors.style.background=bb[this.num];
    }
  }


/*鼠标点击事件*/
  var tabtwo=getClass("neirongone_center_top");
    var tabtwos=tabtwo[0].getElementsByTagName("span");
    var tabtwoimg=getClass("neirongone_center");
    var tabtwoimgs=tabtwoimg[0].getElementsByTagName("li");
  for(var i=0;i<tabtwos.length;i++){
    tabtwos[i].num=i;
    tabtwos[i].onclick=function(){
            for(var j=0;j<tabtwoimgs.length;j++){
              tabtwoimgs[j].style.display="none";
            }
           tabtwoimgs[this.num].style.display="block";
    }
  }

/*banner轮播事件*/

  var point=$("a",$(".circle")[0])
  var aas=$("a",$(".innerbanner")[0]);
  var num=0;
  var fdsx=$("img",$(".innerbanner")[0]);
  //var sss=["#c02c4c","#bde2f2","#d40c50","#ffb701"]
  setInterval(function(){
    num++;
    if(num==aas.length){
      num=0;
    }
    for(var i=0;i<aas.length;i++){
      //fdsx[i].style.transform="scale(1.2,1.2)"
      aas[i].style.zIndex="0";
      point[i].style.background="";
    }
    point[num].style.background="#C40000"
    aas[num].style.zIndex="999";
    //bgcolors.style.background=sss[num];
    var  t5=setTimeout(function(){
    //fdsx[num].style.transform="scale(1.0,1.0)"
    clearTimeout(t5)
    },400)
    
  },4000)
//自动轮播
   /* var num=0
    setInterval(function(){
    if (num==4) {
    num=0;
    }
    for (var j=0; j<imgs.length; j++) {
    imgs[j].style.zIndex=2;
    }
    imgs[num].style.zIndex=3;
    for (var i=0; i<lists.length; i++) {
     lists[i].style.background="";
    }
    lists[num].style.background="#ccc";
    num++;
    },2000)*/


/*右侧固定盒子高度的获取*/
var righth=$(".top_right")[0];
var fbl=document.documentElement.clientHeight;
righth.style.height=fbl+"px"





//返回顶层     
var back=$(".top_right_seven")[0];
back.onclick=function(){
  var dcm=document.documentElement.scrollTop?document.documentElement:document.body;
  animate(dcm,{"scrollTop":0},1000)
}



//顶部搜索框效果   //楼层效果   //返回顶层按钮的出现
var clih=getHpx();
var addone=$(".addone")[0]
var floors=$(".neirongthreebox");
var btns=$("ul",$(".addtwo")[0]);
var btns1=$("img",$(".addtwo")[0]);
var btns2=$("a",$(".addtwo")[0])
var border=$(".addtwo")[0]
window.onscroll=function(){
  var dcm=document.documentElement.scrollTop?document.documentElement:document.body;
  if(dcm.scrollTop>clih){
      addone.style.display="block"
      back.style.display="block"
  }else{
      addone.style.display="none"
      back.style.display="none"
  }
  floor(floors,btns,btns1,btns2,border)
}






//内容一的左侧左拉列表效果
var nrone=$(".neirongone_left_2")[0]
nrone.onmouseover=function(){
  animate(nrone,{"width":998},300)
}
nrone.onmouseout=function(){
  animate(nrone,{"width":198},300)
}


//桃心的显示

var fourbox=$(".neirongone_center_down")
for(var i=0;i<fourbox.length;i++){
  var onebox=fourbox[i]
  var aass=$("a",fourbox[i])
  var heart=$("dl",fourbox[i])
  hearts(onebox,aass,heart)
}

function hearts(obj,obj1,obj2){
  // var aass=$("a",onebox)
  // var heart=$("dl",onebox)
  for(var i=0;i<obj1.length;i++){
    obj1[i].num=i;
    obj1[i].onmouseover=function(){
      for(var j=0;j<obj1.length;j++){
      obj2[j].style.display=""
    }
      obj2[this.num].style.display="block"
    }
  }
}


//下拉导航
var topnav=$("li",$(".top_down_right")[0])
var tabnavs=$("dl",$(".top_down_right")[0])
for(var i=0;i<topnav.length;i++){
  topnav[i].num=i;
  topnav[i].onmouseover=function(){
    var tabnav=$("dl",topnav[this.num])[0]
    if(tabnav){
      tabnav.style.display="block"
    }else{
      return
    }  
  }
  topnav[i].onmouseout=function(){
    for(var j=0;j<tabnavs.length;j++){
      tabnavs[j].style.display="none"
    } 
  }
}


//顶部右侧
var tpr=$("ul",$(".top_right")[0])
var tprtab=$("dt",$(".top_right")[0])
var tprsix=$(".top_right_six")[0]
var trsix=$(".trsix")[0]
for(var i=0;i<tpr.length;i++){
  tpr[i].num=i;
  tpr[i].onmouseover=function(){
    var tab=$("dt",tpr[this.num])[0]
    if(tab){
      tab.style.display="block"
      animate(tab,{"left":-94},300)
    }else{
      return
    }
  }
  tpr[i].onmouseout=function(){
     for(var j=0;j<tprtab.length;j++){
      tprtab[j].style.display="none"
      tprtab[j].style.left=-130+"px"
     }
  }
}
tprsix.onmouseover=function(){
  trsix.style.display="block"
}
tprsix.onmouseout=function(){
  trsix.style.display=""
}



//楼层中图片的移动
var imgmove=$(".neirongthree_right")
for(var i=0;i<imgmove.length;i++){
  var moves=$(".neirongthree_right")[i]
  imgFun(moves)
}

//图层中图片的移动 函数封装
function imgFun(obj){
  var img=$("img",obj)
  for(var i=0;i<img.length;i++){
  img[i].num=i;
  img[i].onmouseover=function(){
    for(var j=0;j<img.length;j++){
      animate(img[j],{"marginLeft":0},600)
    }
    animate(img[this.num],{"marginLeft":-8},600)
  }
  img[i].onmouseout=function(){
    animate(img[this.num],{"marginLeft":0},600)
  }
}
}

inputs("input")

function inputs (ccc) {

  var ccc=document.getElementsByTagName("input")[0];

  //for (var i = 0; i < ccc.length; i++) {
    
  
  ccc.onfocus=function  () 
    {
    if(ccc.value="普罗旺斯，塞纳河畔，告诉你春天暖床的情调"){ccc.value=""}
      }
    ccc.onblur=function  () 
    {
     if (ccc.value) {}
     else {
        ccc.value="普罗旺斯，塞纳河畔，告诉你春天暖床的情调"}
        }
  
     // }
}




  /*轮播器*/
/*
  var leftBs=getClass("leftjt");
  for (var i = 0; i < leftBs.length; i++) {
    wheel(getClass("leftjt")[i],getClass("rightjt")[i],getClass("jiatwo")[i])
  };
  
  function wheel(leftB,rightB,box){
  var leftB=leftB;
  var rightB=rightB;
  var box=box;
  var list=getClass("jiaone_1",box);
  var winW=list[0].offsetWidth;
  var len=list.length
  box.style.width=len*winW+"px";
  var num=0;
  var t=setInterval(move,2000);
  function move(){
    num--;
   if(num==-(len-1)){
    animate(box,{marginLeft:num*winW},function(){
      box.style.marginLeft=0;
    })
    num=0;
   }else{
   animate(box,{marginLeft:num*winW})
   }
  }

   function move1(){
    num++;
   if(num==1){
    box.style.marginLeft=-(len-1)*winW+"px";
    num=-(len-2);
    animate(box,{marginLeft:num*winW})
   }else{
   animate(box,{marginLeft:num*winW})
   }
  }

  leftB.onmouseover=rightB.onmouseover=function(){
    clearInterval(t)
  }
  leftB.onmouseout=rightB.onmouseout=function(){
    t=setInterval(move,2000);
  }
  leftB.onclick=function(){
   move();
  }
   rightB.onclick=function(){
    move1();
  }

}*/


/*左侧小轮播*/ 
var box=$(".jiatwo")
for(var g=0;g<box.length;g++){
  var out=$(".jiatwo")[g]
  var inner=$("dd",$(".jiaone")[g])
  var w=$(".jiaone_1")[g]
  var leftb=$(".leftjt")[g];
  var rightb=$(".rightjt")[g];
  smallbanner(out,inner,w,leftb,rightb)
}

function smallbanner(outbox,innerbox,iw,lb,rb){
   // var outbox=$(".jiatwo")[0]
   // var innerbox=$("dd",$(".jiaone")[0])
   // var iw=$(".jiaone_1")[0]
   var ddwidth=parseInt(getStyle(iw,"width"))
   outbox.style.width=innerbox.length*(ddwidth)+"px"
   var m=0
   var xlb1=setInterval(move1,2000)
   function move1(){
  m++;
  // if(m==3){
  // m=0
  // }
  animate(outbox,{"marginLeft":-ddwidth},600,Tween.Quart.easeIn,function(){
    //smalllb.style.marginLeft=-(ddwidth)*m+"px"
    var first=getFirst(outbox);//获取第一个子节点
    outbox.appendChild(first);
    outbox.style.marginLeft=0;
  })
 
}

//鼠标滑过
outbox.onmouseover=function(){
clearInterval(xlb1);
}
outbox.onmouseout=function(){
xlb1=setInterval(move1,2000);
}
//点击轮播图片
// var lb=$(".leftjt")[0];
// var rb=$(".rightjt")[0];
   lb.onclick=function(){
    clearInterval(xlb1);
    move1()
   }


   rb.onclick=function(){
    clearInterval(xlb1);
    var last=getLast(outbox);
    var first=getFirst(outbox);
    outbox.insertBefore(last,first);
    outbox.style.marginLeft=-ddwidth+"px";
    animate(outbox,{"marginLeft":0},600,Tween.Quart.easeIn);
  //   m++;
  //   if(m==innerbox.length){
  //     m=0;
  //   }
  // animate(outbox,{"marginLeft":-ddwidth*m},600,Tween.Quart.easeIn)
    }
}

})

