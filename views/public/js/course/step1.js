//step1页面
define(["jquery","template","util","ckeditor","form"],function($,template,util,CKEDITOR) {
	//发送数据
	var id = util.getQuery().id;
	$.ajax({
		url:"/api/course/basic",
		type:"get",
		data:{cs_id:id},
		success:function(data) {
			if(data.code == 200) {
				// alert("he");
				var htmlStr = template("step1-tpl",data.result)
				$(".course-add").html(htmlStr);

				//富文本插件
				// CKEDITOR.repacle("cs_brief");
				// 
				// 
				getChild();

			}
		}
	})

	//封装
	function getChild() {
		//根据一级写出二级子菜单
		var pid = $("#top").val();
		$.ajax({
			url: "/api/category/child",
			type: "get",
			data: {cg_id: pid},
			success: function(cgData){
				//js中生成模板
				//模板字符串
					var tpl_category = '{{each result as v i}}<option value="{{v.cg_id}}">{{v.cg_name}}</option>{{/each}}';
					//根据模板字符串生成一个渲染函数
					var render = template.compile(tpl_category);
					//使用上一步生成的渲染函数传入数据，将模板渲染
					var htmlStr = render(cgData);
					$("[name=cs_cg_id]").html(htmlStr);
			}
		})			
	}
	//代理事件 top
	$(".course-add").on("change", "#top", function(){
		getChild();
	})


	//点击保存,上传数据
	$(".course-add").on('click', '#btn-save', function() {
		$("form").ajaxSubmit({
			url: "/api/course/update/basic",
			type: "post",
			success: function(data){
				if(data.code == 200){
					alert("33");
					location.href="/course/step2?id=" + data.result.cs_id;
				}
			}
		});
		return false;
	});


})