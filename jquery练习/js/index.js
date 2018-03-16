window.onload=function(){
    //打开首页时弹出固定大小的广告页面窗口
    setTimeout(function(){
    	$('#right').css('opacity','1');
    },500);
    //关闭广告
    $('#dd_close').click(function(){
    	$('#right').css('opacity','0');
    });
    //随滚动条上下移动的广告图片
    $(document).on('scroll',function(){
    	$('#right').css('top',50+$(window).scrollTop());
    });

    
    //带数字按钮的循环显示的图片广告
    var timer1 = null;
    var adTop = 0;
    var adNum = 0;
    autoPlay();
    function autoPlay(){
    	clearInterval(timer1);
    	timer1 = setInterval(function(){
	    	adTop-=205;
	    	$('#scroll_number>li').get(adNum).className = '';
	    	adNum++;
	    	if (adNum == $('#scroll_img').children().size()) {
	    		adNum=0;
	    	}
	    	$('#scroll_img').css('transition','1s');
	    	if (adTop == -($('#scroll_img').children().size())*205 ) {
	    		$('#scroll_img').css('transition','none');
	    		adTop=0;
	    	}
	    	$('#scroll_img').css('top',adTop);
	    	$('#scroll_number>li').get(adNum).className = 'active';
    	},4000);
    }
    $('#scroll_number>li').click(function(){
		$('#scroll_number>li').each(function(i,elem){
			$(elem).removeClass('active');
		});
		$(this).addClass('active');
		adTop=-$(this).index()*205;
		$('#scroll_img').css('top',adTop);
		adNum=$(this).index();
    });
    $('.scroll_mid').hover(function(){
    	clearInterval(timer1);
    },function(){
    	autoPlay();
    });


    //Tab切换特效
    $('#bookTab .book_type').each(function(i,elem){
		$(elem).attr('index',i);
	});
    $('#bookTab .book_type').click(function(){
    	//选项卡
    	$('#bookTab .book_type').each(function(i,elem){
    		$(elem).css('background-image','url(images/dd_book_bg1.jpg)');
    	});
    	$(this).css('background-image','url(images/dd_book_bg2.jpg)');
    	//内容页
    	$('#bookTab .book_class').children().each(function(i,elem){
    		$(elem).addClass('book_none');
    	});
    	$('#bookTab .book_class').children().get($(this).attr('index')).className='';
    });


    //书讯快递无缝隙、循环垂直向上滚动
    var timer2 = null;
    var domeTop = 0;
    domeAutoPlay();
    function domeAutoPlay(){
    	clearInterval(timer2);
    	timer2=setInterval(function(){
	    	$('#dome1').css('transition','1s');
	    	domeTop-=26;
	    	if (domeTop==-($('#express').children().size()-9)*26) {
	    		$('#dome1').css('transition','none');
	    		domeTop=0;
	    	}
	    	$('#dome1').css('top',domeTop);
	    },2000);
    }
    $('#dome').hover(function(){
    	clearInterval(timer2);
    },function(){
    	domeAutoPlay();
    });

    
}