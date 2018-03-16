window.onload=function(){
	//购物车页面
    var trLen = $('#myTableProduct tr').length;//行数
    var allScore = 0;//总积分
    var allPrice = 0;//折后总价格
    var allInitPrice = 0;//原来总价
    var allSave = 0;//节省金额
    function initCalculate(){
    	for (var i = 0; i < trLen; i++) {
	    	allScore += $('#myTableProduct tr:eq('+i+') .shopping_product_list_2 label').html()*
	    	$('#myTableProduct tr:eq('+i+') .shopping_product_list_5 input').attr('value');
	    	allPrice += $('#myTableProduct tr:eq('+i+') .shopping_product_list_4 label').html()*
	    	$('#myTableProduct tr:eq('+i+') .shopping_product_list_5 input').attr('value');
	    	allInitPrice += $('#myTableProduct tr:eq('+i+') .shopping_product_list_3 label').html()*
	    	$('#myTableProduct tr:eq('+i+') .shopping_product_list_5 input').attr('value');
	    }
	    allPrice = twoDecimal(allPrice);
	    allSave = twoDecimal(allInitPrice-allPrice);
		$('#product_integral').html(allScore);
		$('#product_total').html(allPrice);
		$('#product_save').html(allSave);
    }
    //页面初始计算
    initCalculate();
    //删除功能
    for (var k = 0; k < trLen; k++) {
    	 $('#myTableProduct tr:eq('+k+') .shopping_product_list_6 a').on('click',function(){
	    	$(this).parent().parent().remove();
	    	trLen--;
	    	allScore=0;//先重置
			allPrice = 0;
			allInitPrice = 0;
			allSave = 0;
	    	initCalculate();
	    })
    }
    //修改功能
    for (var j = 0; j < trLen; j++) {
    	$('#myTableProduct tr:eq('+j+') .shopping_product_list_5 input').attr('index',j);
    	$('#myTableProduct tr:eq('+j+') .shopping_product_list_5 input').on('blur',function(){
    		//改购买数量
	    	var inum = $(this).val();
	    	if (inum=='') {
	    		inum='0';
	    	}
	    	$(this).attr('value',inum);
	    	allScore=0;//先重置
			allPrice = 0;
			allInitPrice = 0;
			allSave = 0;
	    	initCalculate();
	    })
    }

    function twoDecimal(num){//保留两位小数
    	if (num%1!=0 && num!=0 && typeof num==='number') {
    		var str = '' + num;
	    	var dn = str.split('.')[1].length;//有几位小数
	    	var str1 = 0;
	    	var re = /\d+\.\d\d/g;
	    	if (dn>2) {
				str.replace(re,function(str){
		    		str1 = str-0;
		    	});
	    		return str1;
	    	}else{
	    		return num;
	    	}
    	}else{
    		return num;
    	}
    }
}