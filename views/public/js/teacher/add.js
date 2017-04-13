define(["jquery","template","util","bootstrap","datepicker","form","validate"], function($,template,util) {

        //将地址栏中事先存好的id取出来
        //封装
	 	var id = util.getQuery().id;
	 	//向后台获取数据 利用模板引擎将数据渲染到页面去
	 
	 	// console.log(id);
	 	// 
	//根据id 判断是添加讲师还是编辑讲师 
	if(id) {
		//是编辑讲师页面的 
	 	$.ajax({
	 		url:"/api/teacher/edit",
	 		data:{tc_id:id},
	 		type:"get",
	 		success: function (data) {
	 			if (data.code == 200) {
	 				console.log(data.result)
	 				data.result.title = "编辑讲师";
	 				data.result.submit = "保 存";
	 				var htmlStr = template("edit-tpl",data.result);
	 				$(".teacher").html(htmlStr);
	 				//添加一个时间插件
		            $(".join").datepicker({
			          format: 'yyyy-mm-dd'
		            })


		          //点击保存按钮 发送数据到服务器
	 	          $(".btn-success").click(function () {
	 	   	       
	 	   	        $("form").ajaxSubmit({
	 	   		        success: function (data) {
	 	   			        if (data.code == 200) {
	 	   				          alert("更改成功");
	 	   				       location.href = "/teacher/list";
	 	   			        }
	 	   		        } 
	 	   	        })
	 	   	        return false;
	 	   
	 	           })       
	 		    }
	 		}
	 			
	 	})
	 	
    }  else {

    //此处为添加讲师页面的	
    	var data = {
    		title:"添加讲师",
    		submit: "添 加",
    		tc_gender: "0"
    	}
    	var htmlStr = template("edit-tpl",data);
	 	$(".teacher").html(htmlStr);
        
        //添加了时间插件
	 	$(".join").datepicker({
			format: 'yyyy-mm-dd'
		})
		//为表单元素做验证
		$("form").validate({
			sendForm: false,
			onBlur: true,
			// onKeyup: true,
			eachValidField: function() {
				$(this).parent().addClass("has-success").removeClass("has-error");
				$(this).parent().next().css("color","green");
			},
			eachInvalidField: function() {
				$(this).parent().addClass("has-error").removeClass("has-success");
				$(this).parent().next().css("color","red");
			},
			//当整个表单验证成功时,就提交数据
			valid : function() {


				$("form").ajaxSubmit({
				    success: function (data) {
					  if (data.code == 200) {
						alert("请求成功");
						location.href = "/teacher/list"
					  }
				    }
                })

                
			},
			description: {
				name : {
					required : "输入不能为空",
					pattern :"请输入字母数字和下划线组合即可",
					valid : "成功"
				},
				word : {
					required : "输入不能为空",
					pattern :"请输入数字",
					valid : "成功"
				}, 
				time : {
					required : "日期不能为空",
					valid : "成功"
				}
			}

		

		})

	 	


	 	 



        //点击添加按钮,发送数据
		// $("#teacher-add").click(function () {
		// 	//alert(22);
		// 	//
		// 	$("form").ajaxSubmit({
		// 		success: function (data) {
		// 			if (data.code == 200) {
		// 				alert("请求成功");
		// 				location.href = "/teacher/list"
		// 			}
		// 		}	
		// 	})
		// });

    } 

  	
		
})