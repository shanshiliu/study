//主页的js代码
define(["jquery","template","bootstrap"], function($,template) {
	//从后台获取数据,利用模板引擎,渲染到页面
	$.ajax({
		url: "/api/teacher",
		type:"get",
		success: function (data) {
			if (data.code == 200) {
				//alert(22);
				var htmlStr = template("list-tpl",data);
				$("#list-info>tbody").html(htmlStr);
			};
		}
	})
	//点击查看按钮,显示模态框,查看教师信息
	//注册代理事件
	$("#list-info>tbody").on("click",".btn-look", function () {
		var id = $(this).parent().attr("data-id");
		$.ajax({
			url:"/api/teacher/view",
			data: {tc_id:id},
			type:"get",
			success: function (data) {
				if (data.code == 200) {
					var htmlStr = template("add-tpl",data.result);
					$("#info_dialog").html(htmlStr);
				}
			}
		})

	})
	//点击注销事件 让其注销和启用功能
	$("#list-info>tbody").on("click",".btn-toogle", function() {
		var status = $(this).attr("data-status");
		var id = $(this).parent().attr("data-id");
		var _this = this;
		$.ajax({
			url:"/api/teacher/handle",
			type:"post",
			data:{tc_status:status,tc_id:id},
			success: function(data) {
				if (data.code == 200) {
					//改变状态
					$(_this).attr("data-status",data.result.tc_status);
					$(_this).text(data.result.tc_status==1 ? "启 用" : "注 销");	
				}
			}
 		})
	})
	//改变按钮的颜色
	if( $(".btn-toogle").attr("data-status") == 1){
		$(".btn-toogle").css("color","black");
	} else {
		$(".btn-toogle").css("color","white");
	}
	


})