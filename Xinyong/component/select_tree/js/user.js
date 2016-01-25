function create_user_seltree(/*input_menu, json*/) { // 后台同事可以传递两个参数，1个input的name，和要遍历的json数组
	mydtree = new dTree('mydtree','imgmenu/','no','no');
	//树代码
	/*var arr = eval("(" + json + ")");
	var arrlen = 
	for(var i = 0; i < arr.length; i++) {
		mydtree.add(0,
		-1,
		"根目录",
		"javascript:void(0);",
		"根目录",
		"_self",
		false);
	}*/
	if(!input_menu) var input_menu = "input_menu"; // 测试用，有传递该参数直接去掉该代码
	
	mydtree.add(0,
	      -1,
	      "根目录",
	      "javascript:void(0);",
	      "根目录",
	      "_self",
	      false);
	mydtree.add(152,
	          0,
	          "根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1根目录1",
	          "javascript:void(0);",
	          "根目录1",
	          "_self",
	          false);
	mydtree.add(153,
		    152,
		    '许可证信息维护1',
		    "javascript:void(0);",
		    '许可证信息维护1',
		    '_self',
		    false);
	mydtree.add(154,
		    153,
		    '许可证信息维护2',
		    "javascript:void(0);",
		    '许可证信息维护2',
		    '_self',
		    false);
	mydtree.add(155,
		    154,
		    'aa',
		    "javascript:void(0);",
		    'aa',
		    '_self',
		    false);
	mydtree.add(162,
	          0,
	          "根目录1",
	          "javascript:void(0);",
	          "根目录1",
	          "_self",
	          false);
	mydtree.add(163,
		    162,
		    '许可证信息维护1',
		    "javascript:void(0);",
		    '许可证信息维护1',
		    '_self',
		    false);
	mydtree.add(164,
		    163,
		    '许可证信息维护2',
		    "javascript:void(0);",
		    '许可证信息维护2',
		    '_self',
		    false);
	mydtree.add(165,
		    164,
		    'aa',
		    "javascript:void(0);",
		    'aa',
		    '_self',
			false);
	document.write('<input type="hidden" name="' + input_menu + '" class="sel_tree_input" /><div class="treediv">' + mydtree + '</div>');
}

$(function() {
	//点击body关闭弹出层
	$(document).click(function(){
		if($(".treediv:visible").length){
			var obj = $(".treediv:visible");
			if(!checkIn(obj)) obj.hide();
		}
		showTree();
	});
	// 设置末尾元素字体颜色为红色
	$(".endNode").next().css("color","#d30d0d");
})

// 展示树
function showTree() {
	var e = window.event || arguments.callee.caller.arguments[0]; 
 	var x = e.clientX; 
 	var y = e.clientY;  
	var len = $(".dtree_div").length;
	var indent = 2000;
	for(var i = 0; i < len; i++) {
		var obj = $(".dtree_div").eq(i)[0];
		if(x>obj.offsetLeft&&x<(obj.offsetLeft+obj.clientWidth)&&y>(obj.offsetTop)&&y<(obj.offsetTop+obj.clientHeight)){  
			xOffset = 0;//向右偏移量
			yOffset = 41;//向下偏移量
			$(".dtree_div").eq(i).nextAll(".treediv")
			.css("position", "absolute")
			.css("left", $(".dtree_div").eq(i).position().left+xOffset + "px")
			.css("z-index", indent)
			.css("top", $(".dtree_div").eq(i).position().top+yOffset +"px").show();
		}
	}
}

//点击菜单树给文本框赋值------------------菜单树里加此方法
function setvalue(obj, id, name){
	$(obj).parents(".treediv").prevAll(".dtree_div").html(name);
	$(obj).parents(".treediv").prevAll(".sel_tree_input").val(id);
	$(obj).parents(".treediv").hide();
}

//判断鼠标在不在弹出层范围内
function checkIn(id){
 	var yy = 26;   //偏移量
 	var str = "";
 	var e = window.event || arguments.callee.caller.arguments[0]; 
 	var x = e.clientX; 
 	var y = e.clientY;  
    var obj=id[0];
    if(x>obj.offsetLeft&&x<(obj.offsetLeft+obj.clientWidth)&&y>(obj.offsetTop-yy)&&y<(obj.offsetTop+obj.clientHeight)){   
        return true;
    }else{   
        return false;
 	}
}