define(["jquery","bootstrap","datepicker","form"], function($) {
		
		//添加一个时间插件
		$(".join").datepicker({
			format: 'yyyy-mm-dd'
		})


		//点击添加按钮,发送数据
		$("#teacher-add").click(function () {
			//alert(22);
			//
			$("form").ajaxSubmit({
				success: function (data) {
					if (data.code == 200) {
						alert("请求成功");
						location.href = "/teacher/list"
					}
				}	
			})
		});
})