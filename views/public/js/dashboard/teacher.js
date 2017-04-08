//主页的js代码
define(["jquery","template","bootstrap"], function($,template) {
	//从后台获取数据,利用模板引擎,渲染到页面
	$.ajax({
		url: "/api/teacher",
		dataType:"get",
		success: function (data) {
			if (data.code == 200) {
				var htmlStr = template("list-tpl",data);
				$("#list-info").html(htmlStr);
			};
		}
	})


})