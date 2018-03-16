window.onload=function(){
	//banner图
	var oDiv = document.getElementById('bannerImg');
	var aImg = oDiv.getElementsByTagName('img');

	var oUl = document.getElementById('navImg');
	var aLi = oUl.getElementsByTagName('li');

	var Prev = document.getElementById('prev');
	var Next = document.getElementById('next');

	var num = 0;
	

	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index=i;

		aLi[i].onmouseenter=function(){
			clearInterval(timer);

			for (var i = 0; i < aLi.length; i++) {
				aLi[i].style.background='';
			}
			this.style.background='#c6171e';

			for (var i = 0; i < aImg.length; i++) {
				aImg[i].style.zIndex=0;
			}
			aImg[this.index].style.zIndex=1;
		}
	}

	oDiv.onmouseenter=function(){
		Prev.style.display='block';
		Next.style.display='block';
		clearInterval(timer);
	}

	Prev.onmouseenter=function(){
		Prev.style.display='block';
		Next.style.display='block';
	}
	Next.onmouseenter=function(){
		Prev.style.display='block';
		Next.style.display='block';
	}

	oDiv.onmouseout=function(){
		Prev.style.display='none';
		Next.style.display='none';
		timer = setInterval(function(){
			if(num==aLi.length-1){
				num=0;
			}else{
				num++;
			}
			move();
		},3000)
	}

	Next.onclick=function(){
		if(num==aLi.length-1){
			num=0;
		}else{
			num++;
		}
		move();
	}

	Prev.onclick=function(){
		if(num==0){
			num=aLi.length-1;
		}else{
			num--;
		}
		move();
	}

	function move(){
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].style.background='';
		}
		aLi[num].style.background='#e6171e';
		for (var i = 0; i < aImg.length; i++) {
			aImg[i].style.zIndex=0;
		}
		aImg[num].style.zIndex=1;
	}

	var timer = null;

	clearInterval(timer);
	timer = setInterval(function(){
		if(num==aLi.length-1){
			num=0;
		}else{
			num++;
		}
		move();
	},3000);


	//倒计时
	// var oP = document.getElementsByClassName('time');
	var aP = document.querySelectorAll('.time');
	
	var iNew = new Date(2017,11,22,22,0,0);
	
	var timer2=null;
	var t = 0;

	clearInterval(timer2);

	timer2 = setInterval(function(){

		var iNow = new Date();
		t = Math.floor((iNew-iNow)/1000);

		if(t>=0){
			str ='剩余时间：'+'<b>'+Math.floor(t%86400/3600)+'时'+'</b>'+'<b>'+Math.floor(t%86400%3600/60)+'分'+'</b>'+'<b>'+t%60+'秒'+'</b>';

			for (var i = 0; i < aP.length; i++) {
				aP[i].innerHTML=str;
			}
		}else{
			clearInterval(timer2);
		}
	},1000)


	//侧边栏
	var navR = document.getElementById('navScroll');
	var aLi1 = navR.getElementsByTagName('li');
	var tLeft = document.getElementById('tleft');
	var oPop = document.getElementById('popularity');
	var aPro = document.querySelectorAll('.product');
	var oPar = document.getElementById('partners');

	window.onscroll=function(){
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;


	    if(scrollTop>=489){
	    	navR.style.display='block';
	    }else{
	    	navR.style.display='none';
	    }
	    if(scrollTop>=tLeft.offsetTop&&scrollTop<oPop.offsetTop){
	    	tab(0);
	    }else if(scrollTop>=oPop.offsetTop&&scrollTop<aPro[0].offsetTop){
	    	tab(2);
	    }else if(scrollTop>=aPro[0].offsetTop&&scrollTop<aPro[1].offsetTop){
	    	tab(3);
	    }
	    else if(scrollTop>=aPro[1].offsetTop&&scrollTop<aPro[2].offsetTop){
	    	tab(4);
	    }
	    else if(scrollTop>=aPro[2].offsetTop&&scrollTop<aPro[3].offsetTop){
	    	tab(5);
	    }
	    else if(scrollTop>=aPro[3].offsetTop&&scrollTop<aPro[4].offsetTop){
	    	tab(6);
	    }
	    else if(scrollTop>=aPro[4].offsetTop&&scrollTop<aPro[5].offsetTop){
	    	tab(7);
	    }
	    else if(scrollTop>=aPro[5].offsetTop&&scrollTop<aPro[6].offsetTop){
	    	tab(8);
	    }
	    else if(scrollTop>=aPro[6].offsetTop&&scrollTop<aPro[7].offsetTop){
	    	tab(9);
	    }
	    else if(scrollTop>=aPro[7].offsetTop&&scrollTop<oPar.offsetTop){
	    	tab(10);
	    }
	    else if(scrollTop>=oPar.offsetTop){
	    	tab(11);
	    }

	    var timer3 = null;

        aLi1[12].onclick=function(){
			timer3=setInterval(function(){
				 var scrollTop2 = document.documentElement.scrollTop || document.body.scrollTop;
	            var speed = Math.floor(-scrollTop2 / 2);

	            document.documentElement.scrollTop = document.body.scrollTop = scrollTop2 + speed;
	            
	            if(scrollTop2 == 0){
	                clearInterval(timer3);
	            }
			},50);
		}
	}
	    
	function tab(number){
		for (var i = 0; i < aLi1.length-1; i++) {
			aLi1[i].style.background=''
		}
		aLi1[number].style.background='#ffd9db';
	}



}