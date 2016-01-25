/**
 * @author : Daviad Chan
 * @description : 本common.js需要基于jquery
 */

$(function() {
	// 档案查询-列表，单选按钮
	$(".choice").click(function() {
		$(".choice").removeClass("choice_true");
		$(this).addClass("choice_true");
	});
	// 档案查询-结果，左侧选项卡切换
	$(".archives .nav-left a").click(function() {
		var now = $(this).index();
		var len = $(this).parent().children().length;
		for(var i = 0; i < len; i++) {
			$(this).parent().removeClass("archives_" + i);
		}
		$(this).parent().addClass("archives_" + now);
		$(".archives .content_right").addClass("hidden");
		$(".archives .content_right").eq(now).removeClass("hidden");
	});
	// 档案查询-结果，右边选项卡切换
	$(".content_right_title li").click(function() {
		var now = $(this).index();
		$(this).parent().children().removeClass("action");
		$(this).addClass("action");
		$(this).parent().parent().parent().find("dd").addClass("hidden");
		$(this).parent().parent().parent().find("dd").eq(now).removeClass("hidden");
	});
	// 指标类配置说明选项卡切换
	$(".index_class_explain .tag a").click(function() {
		var now = $(this).index();
		var len = $(this).parent().children().length;
		for(var i = 0; i < len; i++) {
			$(this).parent().removeClass("tag_" + i);
			$(".index_class_explain dd").eq(i).addClass("hidden");
		}
		$(this).parent().addClass("tag_" + now);
		$(".index_class_explain dd").eq(now).removeClass("hidden");
	});
	// 编辑指标类配置收缩
	$(".contraction").click(function() {
		if($(".index_table").is(":hidden")) {
			$(this).find("i").removeClass("open");
			$(".index_table").show();
		} else {
			$(this).find("i").addClass("open");
			$(".index_table").hide();
		}
	});
	$("#nav-left dt i").removeClass("action");
	$("#nav-left dd").hide();
	$("#nav-left dd .red").parent().show();
	$("#nav-left dd .red").parent().prev().find("i").addClass("action");
});

// 左侧导航显示隐藏
function leftNavSel(obj) {
	if($(obj).next().is(":hidden")) {
		$(obj).find("i").addClass("action");
		$(obj).next().show();
	} else {
		$(obj).find("i").removeClass("action");
		$(obj).next().hide();
	}
}