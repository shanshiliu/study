define(["jquery","template","util","form","bootstrap"],function($,template,util) {
	var id = util.getQuery().id;
	$.ajax({
		url:"/api/course/lesson",
		data:{cs_id:id},
		type:"get",
		success: function(data) {
			if(data.code == 200) {
				console.log(data.result);
				var htmlStr = template("step3-tpl",data.result);
				$(".course-add").html(htmlStr);

				//添加课时功能
				$("#list-add").click(function() {
					var data = {
						title:"添加讲师",
						btnText: "添 加",
						ct_cs_id:id
					}
					console.log(data.ct_cs_id);
					var htmlStr = template("modal-tpl",data);
					$("#chapterModal").html(htmlStr);
					$("#chapterModal").modal();
					//获取表单数据,提交后台	
				})

				//给编辑按钮注册委托事件
				$(".course-add").on("click",".list-edit",function() {
					var id = $(this).parent().attr("data-id");
					console.log(id);
					$.ajax({
						url:"/api/course/chapter/edit",
						data:{ct_id:id},
						success: function(data) {
							if(data.code == 200) {
								console.log(data.result)
								 data.result.title = "编辑课时";
								 data.result.btnText = "保 存";
								var htmlStr = template("modal-tpl",data.result);
								$("#chapterModal").html(htmlStr);

								//显示模态框
								$("#chapterModal").modal();


							}
			 			}
					})
					
				})

                //保存按钮
				$("#chapterModal").on("click","#btn-save",function() {					
					//判断是否为免费课程
					if($("#free").checked){
						var free = 1;
					}else {
						var free = 0;
					}
					$("form").ajaxSubmit({
						data:{ct_is_free:free},
						success: function(data) {
							if(data.code == 200) {
								alert("成功");
								$("#chapterModal").modal("hide");
								 //将课时列表重新渲染
								 $.ajax({
								 	url: "/api/course/lesson",
								 	data: {cs_id:id},
								 	type: "get",
								 	success:function(data) {
								 		if (data.code == 200) {
								 			var htmlStr = template("sub-tpl",data.result);
								 			$(".lessons").html(htmlStr);
								 		}
								 	}
								 })
							}
						}
					})
				})
			}
		}
	})

})