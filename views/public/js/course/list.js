//课程列表页面
define(["jquery","template"],function($,template) {
	
		$.ajax({
		url:"/api/course",
		type:"get",
		success: function(data) {
			if(data.code == 200){
				alert("33");
				var htmlStr = template("list-tpl",data);
				$(".courses").html(htmlStr);
			}
		}
 
	})
	
})