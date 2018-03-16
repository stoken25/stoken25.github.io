window.onload=function(){
	//“我的当当”下拉菜单的自动显示与隐藏
    $('#menu').hover(function(){
        $('#dd_menu_top_down').slideDown();
    },function(){
        $('#dd_menu_top_down').slideUp();
    });

}