window.onload=function(){
    var pics=document.getElementById("banner").getElementsByTagName("a");
    var num=0;
    setInterval(function(){
        num++;
        if(num==pics.length){
            num=0;
        }
        for(var i=0;i<pics.length;i++){
            pics[i].style.display="none";
        }
        pics[num].style.display="block";
    },3000)
}