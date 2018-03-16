window.onload=function(){
	$('#email').on('blur',function(){
		if ( checkEmail($(this).val()) ) {
			$(this).css('background-color','#f1ffde');
			$('#email_prompt')
			.css('width','25px')
			.css('background','left top url("images/cyq_right.jpg") no-repeat')
			.css('background-color','#fff')
			.css('border','')
			.css('padding','0')
			.html('');
		}else{
			if ( $(this).val()=='' ) {
				$(this).css('background-color','#fef4d0');
				$('#email_prompt')
				.css('width','')
				.css('background','')
				.css('border','1px solid #999')
				.css('padding','0 5px')
				.html('邮箱不能为空');
			}else{
				$(this).css('background-color','#fef4d0');
				$('#email_prompt').css('width','')
				.css('background','')
				.css('border','1px solid #999')
				.css('padding','0 5px')
				.html('邮箱格式错误');
			}
		}
	});
	$('#nickName').on('blur',function(){
		if ( $(this).val()=='' ) {
			$(this).css('background-color','#fef4d0');
			$('#nickName_prompt').css('width','')
			.css('background','')
			.css('border','1px solid #999')
			.css('padding','0 5px')
			.html('昵称不能为空');
		}else{
			$(this).css('background-color','#f1ffde');
			$('#nickName_prompt').css('width','25px')
			.css('background','left top url("images/cyq_right.jpg") no-repeat')
			.css('background-color','#fff')
			.css('border','')
			.css('padding','0')
			.html('');
		}
	});
	$('#pwd').on('blur',function(){
		if ( $(this).val()=='' ) {
			$(this).css('background-color','#fef4d0');
			$('#pwd_prompt').css('width','')
			.css('background','')
			.css('border','1px solid #999')
			.css('padding','0 5px')
			.html('密码不能为空');
		}else if( checkPsw($(this).val()) ){
			$(this).css('background-color','#f1ffde');
			$('#pwd_prompt').css('width','25px')
			.css('background','left top url("images/cyq_right.jpg") no-repeat')
			.css('background-color','#fff')
			.css('border','')
			.css('padding','0')
			.html('');
		}else{
			$(this).css('background-color','#fef4d0');
			$('#pwd_prompt').css('width','')
			.css('background','')
			.css('border','1px solid #999')
			.css('padding','0 5px')
			.html('密码格式错误,请用大小写字母、数字,长度6-20个字符');
		}
	});
	$('#repwd').on('blur',function(){
		if ( checkPsw($(this).val())==false ) {
			$(this).css('background-color','#fef4d0');
			$('#repwd_prompt').css('width','')
			.css('background','')
			.css('border','1px solid #999')
			.css('padding','0 5px')
			.html('两次的密码不一致,请重新输入');
		}else if( checkPsw($(this).val()) &&  $(this).val()==$('#pwd').val() ){
			$(this).css('background-color','#f1ffde');
			$('#repwd_prompt').css('width','25px')
			.css('background','left top url("images/cyq_right.jpg") no-repeat')
			.css('background-color','#fff')
			.css('border','')
			.css('padding','0')
			.html('');
		}
	});
	//省市级联
    var cityList = new Array();
    var cityLen = 0;
    var province = [];
    cityList['请选择省/城市'] = ['请选择城市/地区'];
    cityList['北京市'] = ['朝阳区','东城区','西城区', '海淀区','宣武区','丰台区','怀柔','延庆','房山'];
    cityList['上海市'] = ['宝山区','长宁区','丰贤区', '虹口区','黄浦区','青浦区','南汇区','徐汇区','卢湾区'];
    cityList['广州省'] = ['广州市','惠州市','汕头市','珠海市','佛山市','中山市','东莞市'];
    cityList['深圳市'] = ['福田区', '罗湖区', '盐田区', '宝安区', '龙岗区', '南山区', '深圳周边'];
    cityList['重庆市'] = ['俞中区', '南岸区', '江北区', '沙坪坝区', '九龙坡区', '渝北区', '大渡口区', '北碚区'];
    cityList['天津市'] = ['和平区', '河西区', '南开区', '河北区', '河东区', '红桥区', '塘古区', '开发区'];
    cityList['江苏省'] = ['南京市','苏州市','无锡市'];
    cityList['浙江省'] = ['杭州市','宁波市','温州市'];
    cityList['四川省'] = ['四川省','成都市'];
    cityList['海南省'] = ['海口市'];
    cityList['福建省'] = ['福州市','厦门市','泉州市','漳州市'];
    cityList['山东省'] = ['济南市','青岛市','烟台市'];
    cityList['江西省'] = ['江西省','南昌市'];
    cityList['广西省'] = ['柳州市','南宁市'];
    cityList['安徽省'] = ['安徽省','合肥市'];
    cityList['河北省'] = ['邯郸市','石家庄市'];
    cityList['河南省'] = ['郑州市','洛阳市'];
    cityList['湖北省'] = ['武汉市','宜昌市'];
    cityList['湖南省'] = ['湖南省','长沙市'];
    cityList['陕西省'] = ['陕西省','西安市'];
    cityList['山西省'] = ['山西省','太原市'];
    cityList['黑龙江省'] = ['黑龙江省','哈尔滨市'];
    cityList['其他'] = ['其他'];
    for(var attr in cityList){
    	province.push(attr);
    	cityLen++;
    }
    for (var i = 1; i < cityLen; i++) {
    	var op = document.createElement('option');
    	op.innerHTML = province[i];
    	$('#province').append(op);
    }
	$('#province').has('option').each(function(i,elem){
		$(elem).click(function(){
			var len = cityList[$(this).val()].length;
			$('#city').children().remove();
			for (var j = 0; j < len; j++) {
				var op = document.createElement('option');
    			op.innerHTML = cityList[$(this).val()][j];
    			$('#city').append(op);
			}
		});
		
	});
    
    // alert($('#province').children().length);
}
function checkEmail(str){
    var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}
function checkPsw(str){
    var re = /^\w{6,20}$/;
    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}