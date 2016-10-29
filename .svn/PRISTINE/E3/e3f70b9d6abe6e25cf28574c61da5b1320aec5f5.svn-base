
$(function(argument) {
    $('[type="checkbox"]').bootstrapSwitch();

    $(".position-r").hover(function(index){

        var num= $(".position-r").index(this);
        $($(".detail")[num]).stop();
        $($(".detail")[num]).animate({height:100})
    },function(){
        /*   $(this).stop();*/
        var num= $(".position-r").index(this);
        $($(".detail")[num]).stop();
        $($(".detail")[num]).animate({height:0})
    })
/******************************/
    /*banner*/
        var pics=$(".introo");
        var num=0;
        setInterval(function(){
            num++;
            if(num==pics.length){
                num=0;
            }
            for(var i=0;i<pics.length;i++){
                $(pics[i]).css({display:"none"})
                //pics[i].style.opacity=0;
            }
            $(pics[num]).css({display:"block"})
            //pics[num].style.opacity=1;
        },3000)

    /********/
    $(".menu").hover(function(){
        $(this).css({background:"#09c7ff",color:"fff"})
    },function(){
        $(this).css({background:"",color:"000!important"})
    })
    /*活动*/
    $(".active-detail").hover(
        function(index){

            var aa= $(".active-detail").index(this);
            $($(".active-d")[aa]).finish();
            $($(".active-d")[aa]).animate({left:0})
        },
        function(index){

            var aa= $(".active-detail").index(this);
            $($(".active-d")[aa]).stop();
            $($(".active-d")[aa]).animate({left:"-100%"})
        }
    )
/*找工作*/
    $(".offer-middle ul li").click(function(){

        var num= $(".offer-middle ul li").index(this);
       // alert(num)
        $(".offer-box").animate({top:450})
        $($(".offer-box")[num]).animate({top:0})
    })
})
