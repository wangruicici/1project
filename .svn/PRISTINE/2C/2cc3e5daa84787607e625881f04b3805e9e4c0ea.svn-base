window.onload=function() {
    /*顶部ad*/
    var topad=$('.top-ad');
    var close=$('.ad-close');
    topad.css("marginTop",0);
    close.click(function () {
        if (topad.css('margin-top')=='-104px') {
            topad.css('margin-top',0);
            return;
        }
        setTimeout(function (){
            topad.css('margin-top','-104px');
            close.css("transform","rotateZ(90deg)");
        }, 200)
    })
    /*顶部下拉列表*/
    var top_type =$('.top-right-type');
    top_type.hover(function(){
        if($(this).children('.top-right-yincang')){
            $(this).children('.top-right-yincang').css('display','block');
            $(this).css('background','#fff');
            $(this).children('.top-right-xiala').css('webkitTransform','rotateZ(180deg)');
        }
    },function(){
        if($(this).children('.top-right-yincang')){
            $(this).children('.top-right-yincang').css('display','none');
            $(this).css('background','#F5F5F5');
            $(this).children('.top-right-xiala').css('webkitTransform','rotateZ(0deg)');
        }
    })
    /*搜索栏*/
    var search =$('.logo-midden-top-left');
    var search_yincang =$('.logo-yincang');
    search.focus(function () {
        search.css("outline",'none');
        search_yincang.css('display','block');
    })
    search.blur(function () {
        search_yincang.css('display','none');
    })
    /*banner 轮播*/
        /*banner 左侧列表*/
        var banner_left = $('.banner-left-type');
        banner_left.hover(function(){
            $(this).children('.banner-left-yincang').css('display','block');
        },function(){
            $(this).children('.banner-left-yincang').css('display','none');
        })
    /*banner 右侧轮播*/
    var colors = ['#2CCCFF','#DB293F','#F8133E','#FEE922','#F91844','#1E6718', '#F9C5EB','#FDFD83','#0F8CCE','#5ED4DE','#D11418','#750907','#DB1553','#C80203','#ED292D','#E8E8E8','#78CAFC','#0354A6','#FF0D3F','#D80029','#BC1B2D','#030303','#0271DA','#EB294E','#5EAEF3','#DED0C7','#88D8F9','#000000','#47BCFF','#DD0327','#FFE588','#FEC23E','#000000'];
    var bannerRightAll=$('.banner-right-all');
    var banner = $('.banner-right');
    var imgs=$('img',banner);
    var banner_all = $('.banner-all');
    var span = $('.banner-con-hezi');
    var banner_pic=$('.banner-pic');
    var banner_con =$('.banner-con');
    var biao_all =$('.banner-dot');
    var infor_list=$('.banner-yincang-type');
    var list=$('.banner-yincang-chang');
    var biao = $('.banner-dot-biao');
    var leftB=$('.leftB');
    var rightB=$('.rightB');
    var bannerYingcang=$('.banner-yincang');
    var time = setInterval(function(){
        func('l')
    }, 2000)
    bannerRightAll.hover(function(){
        clearInterval(time);
        leftB.css('display','block');
        rightB.css('display','block');
    },function(){
        time = setInterval(function(){
            func('l');
        }, 2000)
        leftB.css('display','none');
        rightB.css('display','none');
    })
    var num=0;
    function func(type){
        if(type=='l'){
            num++;
            if(num==imgs.length){
                num=0;
            }
        }else if(type=='r'){
            num--;
            if(num==-1){
                num=imgs.length-1;
            }
        }
        imgs.css('opacity','0');
        biao.css('background','#fff');
        $(imgs[num]).animate({opacity:1});
        banner_all.css('background',colors[num]);
        $(biao[num]).css('background','red');
        for(var i=0;i<banner_con.length;i++){
            $(banner_con[i]).children().eq(0).animate({height:0});
            $(banner_con[i]).children().eq(1).animate({opacity:0});
        }
        var parent=$(biao[num]).parent().parent();
        parent.children().eq(0).animate({height:50});
        parent.children().eq(1).animate({opacity:1});
    }
    leftB.click(function(){
        imgs.stop();
        span.stop();
        clearInterval(time);
        func('r');
    })
    rightB.click(function(){
        imgs.stop()
        span.stop();
        clearInterval(time)
        func('l')
    })
    banner_con.hover(function(){
            banner_con.stop();
            imgs.stop()
            clearInterval(time)
           for(var i=0;i<banner_con.length;i++){
             $(banner_con[i]).children().eq(0).animate({height:0});
               $(banner_con[i]).children().eq(1).animate({opacity:0});
                $(banner_con[i]).children().eq(2).css('display','none');
            }
                $(this).children().eq(2).css('display','block');
               imgs.animate({opacity:0});

            var obj=$(banner_pic[banner_con.index(this)]).children().eq(0).children().eq(0);
            obj.animate({opacity:1})
            list.css('background','#fff');
           $(list[imgs.index(obj)]).css('background','red');
            banner_all.css('background',colors[imgs.index(obj)])
            num=imgs.index(obj);
        },function(){
            $(this).children().eq(2).css('display','none');
        })
  infor_list.mouseenter(function(){
    list.css('background','#fff');
    imgs.css('opacity','0');
    $(list[infor_list.index(this)]).css('background','red');
    banner_all.css('background',colors[infor_list.index(this)])
    $(imgs[infor_list.index(this)]).css('opacity','1');
    num=infor_list.index(this);
  })  

    /*聚优品 惠生活*/
    var $sec = $('.secs');
    var $mintinue = $('.mintues');
    var $hours =$('.hours');
    setInterval(function () {
        $sec.html($sec.html()-1);
      
        if ($sec.html()=='-1') {
         $mintinue.html($mintinue.html()-1);
            $sec.html(60);
        }

        if ($mintinue.html()=='-1') {
            $hours.html($hours.html()-1);
            $mintinue.html(60);
        }

    }, 1000)
    /*楼层*/
    floor($('.position-zuo'), $('.position-you'), $('.floor-bottom-midden-all'), $('.floor-bottom-changtu'));
    floor($('.position-zuo3'), $('.position-you3'), $('.next-main-shichuang'), $('.next-main-chuang'));
    function floor(leftR, rightR, classname, changtu,slide) {
        var leftR = leftR;
        var rightR = rightR;
        var classname = classname;
        var changtu = changtu;
        var slide = slide || null;
        var imgList =changtu.children(classname);
        var imgW = imgList.outerWidth();
        var len = imgList.length;
        changtu.css('width',len*imgW+'px');
        var num2 = 0;
        function LeftMove() {
              num2--;
               if(num2==-(len-1)){
                changtu.animate({marginLeft:num2*imgW},function(){
                    changtu.css('margin-left',0)
                })
                num2=0;
            }else{
               changtu.animate({marginLeft:num2*imgW})
            }
            if (slide!= null) {
                slide.css('left',-num2*119+'px');
            }
        } 
        function RightMove() {
            num2++;
             if(num2==1){
                changtu.css('margin-left',-(len-1)*imgW);
                num2=-(len-2);
                changtu.animate({marginLeft:num2*imgW})
            }else{
                changtu.animate({marginLeft:num2*imgW});
            }
            if (slide != null) {
                slide.css('left',-num2*119+'px');
            }
        }
        changtu.hover(function () {
            leftR.css('display','block');
        },function () {
           
        })
        leftR.click(function () {
             LeftMove();
        })
        rightR.click(function () {
             RightMove();
        })
    }

    /*楼层1-4*/
    var leftB2 = $('.position-zuo2');
    var rightB2 =$('.position-you2');
    var colorss=['#FF5500','#2E82FF','#E87499','#83602A'];
    console.log($('.float'));
    rightB2.each(function(i,obj){
        dd($($('.floor-contain')[i]),$($('.float')[i]),$(leftB2[i]),$(rightB2[i]),colorss[i]);

    })
    function dd(win,slide,leftB,rightB,color) {
        var win = win;
        var list = win.find('.tab-con');
        var slide = slide;
        var con = win.find('.floor-items');
        var num1 = 0;
        var num2 = 0;
        var leftB =leftB;
        var rightB = rightB;
        win.hover(function(){
            leftB.css("display","block");
        },function(){
            leftB.css("display","none");
        });
        leftB.click(function () {
            con.finish()
            slide.stop(true);
            var temp = num1;
            num1--;
            if (num1 == -1) {
                num1 = 5;
            }
            $(con[num1]).css('left', 1240).animate({left: 0});
            $(con[temp]).animate({left: -1240});
            list.css('color', color);
            slide.animate({left: $(list[num1]).position().left}, function () {
                $(list[num1]).css('color', '#fff');
            })
        })
        rightB.click(function () {
            con.finish();
            slide.stop(true);
            var temp = num1;
            num1++;
            if (num1 == list.length) {
                num1 = 0
            }
            $(con[num1]).css('left', -1240).animate({left: 0});
            $(con[temp]).animate({left: 1240})
            list.css('color', color);
            slide.animate({left: $(list[num1]).position().left}, function () {
                $(list[num1]).css('color', '#fff');
            })
        })
        var tt;
        list.hover(function () {
                slide.finish();
                num2 = list.index(this);
                var that = $(this);
                // console.log(that);
            tt=setTimeout(function(){
                var lefts = that.position().left;
                list.css('color', color);
                slide.animate({left: lefts}, function () {
                    that.css('color', '#fff');
                })
                if (num1 == num2) {
                    return;
                } else if (num1 > num2) {
                    $(con[num2]).css('left', -1240).animate({left: 0});
                    $(con[num1]).animate({left: 1240})
                } else if (num1 < num2) {
                    $(con[num2]).css('left', 1240).animate({left: 0})
                    $(con[num1]).animate({left: -1240});
                }
                num1 = num2;
                num2 = "";  
            },300); 
        }, function () {
            clearTimeout(tt);
        })

    }
     /*底部小导航*/
    var fixed = $('.fixed-left-word');
    var fix_all = $('.fixed');
    var suning2 = $('.su-yincang',fixed);
    var guanbi = $('.close');
    var returns = $('.returns');
    fixed.mouseenter(function(){
        suning2.css('display','block');
        guanbi.css('display','block');
    })
    guanbi.click(function () {
        suning2.css('display','none');
        guanbi.css('display','none');
    })
        // console.log($("body").height());
    $(window).scroll(function () {
        var scall = $(window).scrollTop();
     if (scall > 4330) {
           suning2.css('display','block');
           guanbi.css('display','block');
            /*setTimeout(function () {
                $suning2.css('display','none');
                $guanbi.css('display','none');
            },2000)*/
        } else {
              suning2.css('display','none');
        }
    })
    returns.click(function () {
       var scall = $(window).scrollTop();
        var t = setInterval(function () {
            scall = scall - 200;
          $(window).scrollTop(scall);
           if ( $(window).scrollTop()==0) {
                clearInterval(t);
            }
        }, 10)
    })
}