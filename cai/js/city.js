$(function() {
	// 选择城市
	$(".change-city").click(function() {
		$("#clist").show();
		$("#bg").show();
	});
	// 更换城市名
	$("#clist dd a").click(function() {
		$(".gray40").html($(this).text());
		$("#clist").hide();
		$("#bg").hide();
	});
	// 关闭城市列表
	$("#clist .close-1").click(function() {
		$("#clist").hide();
		$("#bg").hide();
	});
});