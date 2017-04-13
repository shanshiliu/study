//课程添加页面
define(["jquery"],function($) {
  //点击创建课程,发送数据到后台,挑转到step1页面即可
  $(".btn-success").on("click",function() {
  	var name = $("[type=text]").val();
  	 $.ajax({
  	 	url:"/api/course/create",
  	 	type: "post",
  	 	data: {cs_name:name},
  	 	success:function (data) {
  	 		if(data.code == 200) {
  	 			// alert(name);
  	 			location.href = "/course/step1?id="+ data.result.cs_id;
  	 		}
  	 	}
  	 })
  	 return false;
  })


})