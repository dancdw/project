/**
 * @author : Daviad Chan
 * @description : 这个js依赖于jquery
 */

// 页面跳转
function dumpUrl(obj) {
	var url = $(obj).attr('data');
	window.location.href=url;
}

// 加载弹出框,在加载时和加载失败是调用该方法即可
function upload(str,img) {
	if($("#reload").length){ $("#reload").remove();}
	var reloadDiv = document.createElement("div");
	document.body.appendChild(reloadDiv);
	$(reloadDiv).attr("id","reload");
	var html = "";
	if(img) {var html = "<img src='images/reload.gif'/>";} 
	$(reloadDiv).html(html += "<span>"+str+"</span>");
	var windows_height = document.body.offsetHeight;
	reload.style.top = windows_height/2 - 30;
}

// 清除加载弹出框
function remove_upload() {
	$("#reload").remove();
}

/**
 * 弹出窗
 * 参数为json对象，并且索引名称必须一致，
 * buttons也是一个json对象，可传一个或多个参数
 * callback为回调函数（可选参数）
 * 代码示例：
 * var arr = {
 * 		"title" : "标题",
 * 		"content" : "内容",
 * 		"buttons" : { "queding" : "确定", "quxiao" : "取消", "ceshi" : "测试"},
 * 		"callback" : function(res) { alert(res); }	
 * }
 * dialog(arr);
 */
function dialog(arr) {
	if($("#dialog").length){ $("#dialog").remove();}
	if($("#bg").length){ $("#dialog").remove();}
	var dialogDiv = document.createElement("div");
	var bg = document.createElement("div");
	document.body.appendChild(dialogDiv);
	document.body.appendChild(bg);
	$(bg).attr("id","bg");
	$(dialogDiv).attr("id","dialog");
	for(var k in arr) {
		if( k == "buttons" ) {
			var item = document.createElement("div");
			dialogDiv.appendChild(item);
			$(item).attr("id",k);
			for(var key in arr[k]) {
				$(item).append("<button onclick='javascript:$(\"#dialog\").remove();$(\"#bg\").remove();var callback="+arr["callback"]+";callback(\""+key+"\");'>"+arr[k][key]+"</button>");
			}
		} else if( k == "callback" ) {
			continue;
		} else {
			var item = document.createElement("div");
			dialogDiv.appendChild(item);
			$(item).attr("id",k);
			$(item).html(arr[k]);
		}
	}
	var windows_height = document.body.offsetHeight;
	var dialogDiv_height = dialogDiv.offsetHeight;
	var dialogDiv_width = dialogDiv.offsetWidth;
	dialogDiv.style.marginLeft = "-" + dialogDiv_width / 2;
	dialogDiv.style.top = windows_height/2 - dialogDiv_height / 2;
	dialogDiv.style.left = "50%";
}

/**
 * 加载数据提示
 */
function load_data() {
	$("#more").hide();
	if($("#load-data").length){ $("#load-data").remove();}
	$(".main").append('<p id="load-data" class="center"><img src="images/reload.gif" style="width:1.5rem; top:.3rem; padding:0 .3rem; position:relative;"/>正在加载...</p>');
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