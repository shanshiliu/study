define(["jquery","ckeditor","template","uploadify","bootstrap","datepicker","region","form"],function ($,CKEDITOR,template) {

	//向后台请求数据
	$.ajax({
		url: "/api/teacher/profile",
		type: "get",
		success: function(data) {
			if (data.code == 200) {
				//console.log(data.result);
				var htmlStr = template("set-tpl",data.result);
				$(".settings").html(htmlStr);

				//添加上传头像插件
				$("#upfile").uploadify({
					//目标路径
					uploader: "/api/uploader/avatar",
					swf: "/views/public/assets/uploadify/uploadify.swf",
					width: 120,
					buttonText:"",
					height: 120,
					fileObjName:"tc_avatar",
					onUploadSuccess: function(f,data) {
						var data = JSON.parse(data);
						if (data.code ==200) {
							//显示上传的头像
							$("#tc_img").attr("src",data.result.path);
						}
					}

				})
				//添加日期插件
				$(".date-time").datepicker({
			          format: 'yyyy-mm-dd'
		            })


				//添加一个省市区三级联动插件
				$(".form-horizontal").region({
					url: "/views/public/assets/jquery-region/region.json"

					})
				
				
				
				
				//为textaera添加富文本编辑器
				CKEDITOR.replace("tc_introduce", {
			    toolBarGroups: [
			    	 { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
					 { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
					 { name: 'document',    groups: [ 'mode', 'document', 'doctools' ] },
					        '/',
					 { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
					 { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] }
			      ]
			    })

			      

			    //点击保存,发送数据给后台
			    $("form").submit(function() {

			    	//使用富文本插件的value需要手动添加,form表单事件获取不到
			        $("[name=tc_introduce]").val(CKEDITOR.instances.tc_introduce.getData());

			    	$("form").ajaxSubmit({
			    		success: function (data) {
			    		   if (data.code == 200) {
			    		   		alert("22");
			    		   		location.href = "/dashboard/settings"

			    		   };
			    		}
			    	})
			    	return false;
			    })
				
			}
		}
	})




	

})