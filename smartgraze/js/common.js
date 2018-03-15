$(function(){
	//模态框点击空白不消失
    $('#myModal').modal({backdrop: 'static', keyboard: false, show: false});
	//模拟checkbox
	$("input[type='checkbox']").on('click',function(){
		if($(this).is(":checked")){
			$(this).parent('a').addClass('check');
		}else{
			$(this).parent('a').removeClass('check');
		}
	});
	//全选
    $('.checkAll').on('click',function(){
    	if($(this).is(":checked")){
    		$(this).parents('table').find("tbody input[name='subbox']").prop("checked",true).parent('a').addClass('check');
    		if($('.btnbox>a').length>0){
	    		$(this).parents('table').parent('div').find('.btnbox>a').removeClass('disabled');
	    	}
    		
    	}else{
    		$(this).parents('table').find("tbody input[name='subbox']").prop("checked",false).parent('a').removeClass('check');
    		if($('.btnbox>a').length>0){
	    		$(this).parents('table').parent('div').find('.btnbox>a').addClass('disabled');
	    	}
    	}
    });
    
    $("tbody input[name='subbox']").on('click',function(){
    	var size=$(this).parents('tbody').find('tr').length;
    	if ($(":checkbox[name=subbox]:checked").size() != size) {
    		$(this).parents('table').find('.checkAll').prop("checked",false).parent('a').removeClass('check');
    	}else{
    		$(this).parents('table').find('.checkAll').prop("checked",true).parent('a').addClass('check');
    	}
    	if( $(this).parents('tbody').find(":checkbox[name=subbox]:checked").length>0 && $('.btnbox>a').length>0){
	    	$(this).parents('table').parent('div').find('.btnbox>a').removeClass('disabled');
	    }else{
	    	$(this).parents('table').parent('div').find('.btnbox>a').addClass('disabled');
	    }
    });
    //导航切换
	$('.nav>li>a').on('click',function(){
    	$(this).parent('li').addClass('active').siblings('li').removeClass('active');
    });
    //分页
    $('.pagination>li:not(":first,:last")').on('click','a',function(){
    	$(this).parent('li').addClass('active').siblings('li').removeClass('active');
    });
});
