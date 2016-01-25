/**
 * @author : Daviad Chan
 * @description : 这个js依赖于jquery
 */

/**
 * 页面跳转
 */
function dumpUrl(obj) {
	var url = $(obj).attr('url-data');
	window.location.href=url;
}

/**
 * 加载数据提示
 */
function load_data() {
	$("#more").hide();
	if($("#load-data").length){ $("#load-data").remove();}
	$(".main").append('<p id="load-data" class="center"><img src="images/public/reload.gif" style="width:1.5rem; top:.3rem; padding:0 .3rem; position:relative;"/>正在加载...</p>');
}

/**
 * 删除加载数据提示
 */
function remove_load_data() {
	$("#load-data").remove();
	$("#more").show();
}

/**
 * 点击加载更多（用于点击请求数据）
 */
function load_more() {
	$(".main").append('<p id="more" class="center gray" onclick="load_data();">点击加载更多</p>');
}


/**
 * js返回键
 */
$(function() {
	$(".icon-back").click(function() {
		window.history.go(-1);
	});
})