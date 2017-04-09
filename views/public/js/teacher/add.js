define(["jquery","template","bootstrap","datepicker","form","validate"], function($,template) {

        //将地址栏中事先存好的id取出来
	 	var id = location.search.slice(1).split("=")[1];
	 	//向后台获取数据 利用模板引擎将数据渲染到页面去
	 
	 	// console.log(id);
	 	// 
	//根据id 判断是添加讲师还是编辑讲师 
	if(id) {
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
	 	   				    location.href = "/teacher/list"
	 	   			    }
	 	   		      }
	 	   	         })
	 	   
	 	           })       
	 		    }
	 		}
	 			
	 	})
	 	
    }   else {
    	var data = {
    		title:"添加讲师",
    		submit: "添 加"
    	}
    	var htmlStr = template("edit-tpl",data);
	 	$(".teacher").html(htmlStr);

	 	$(".join").datepicker({
			format: 'yyyy-mm-dd'
		})

	 	//为表单添加验证事件
	 	$("form").validate({
			//当表单元素失去焦点的时候，进行校验
			onBlur: true,
			//当表单验证通过的时候，需要阻止表单的默认提交事件（因为我们要使用ajaxSubmit进行提交）
			//sendForm属性设置为false，表单验证通过后就不会自动提交了
			sendForm: false,
			//每当一个表单元素通过验证的时候，会调用这个方法
			eachValidField: function(){
				//当该表单元素通过验证的时候，我们给其添加一个绿色边框，去掉红色的边框
				$(this).parent().addClass("has-success").removeClass("has-error");
			},
			//每当一个表单元素未通过验证的时候，会调用这个而方法
			eachInvalidField: function(){
				//当该表单元素通过验证的时候，我们给其添加一个红色边框，去掉绿色的边框
				$(this).parent().addClass("has-error").removeClass("has-success");
			},
			//当整个表单中所有的元素都通过验证的时候，就调用valid方法
			valid: function(){
				//因为所有的字段都合格了，所以我们要提交数据
				//通过jQuery-form插件向后台提交数据
				$("form").ajaxSubmit({
					success: function(data){
						if(data.code == 200){
							//当保存成功的时候，跳转到列表页
							location.href="/teacher/list"
						}
					}
				});
			},
			description: {
				name: {
					//为空的时候，使用required的内容
					required: "<span style='color:#a94442;'>请输入用户名</span>",
					//成功的时候，使用valid的内容
					valid: ""
				},
				pass: {
					required: "请输入密码",
					//当正则表达式匹配不通过的时候，使用pattern的内容
					pattern: "请输入6-15位数字作为密码",
					valid: ""
				},
				join_date: {
					required: "请选择入职日期",
					valid: ""
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