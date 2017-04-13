//step2页面
define(["jquery","util","template","jcrop","uploadify"],function($,util,template,Jcrop) {
	var id = util.getQuery().id;
    
    var x = 0;
    var y = 0;
    var w = 0;
    var h = 0;

	$.ajax({
		url:"/api/course/picture",
		type:"get",
		data:{cs_id:id},
		success:function(data) {
			if(data.code == 200) {
				console.log(data.result);
				var htmlStr = template("step2-tpl",data.result)
				$(".course-add").html(htmlStr);

				//点击裁剪图片,uploadify插件
				$("#upload").uploadify({
					uploader:"/api/uploader/cover",
					swf: "/views/public/assets/uploadify/uploadify.swf",
					width:70,
					heigh:30,
					formData: {cs_id: id},
					fileObjName:"cs_cover_original",
					buttonText:"选择图片",
					itemTemplate: "<span></span>",
					buttonClass: "btn btn-success btn-sm",
					onUploadSuccess:function(f,data) {
						var data = JSON.parse(data);
						if(data.code == 200) {
							console.log(data);
							$(".preview>img").attr("src",data.result.path);
     						//裁剪可用
     						$(".btn-warning").attr("disabled",false);
     						
						}
					}
			    })
			    $("#upload-button").css("lineHeight", "1.5");	 
			}
		}
	})

	$(".course-add").on("click",".btn-warning",function(){
     							//裁剪
     							alert("33");
     							if( $(".btn-warning").attr("data-status") == "cut") {
     								$(".btn-warning").attr("data-status","save");
     								$(".preview>img").Jcrop({
     								setSelect:[0,100,400,200],

     							},function() {
     								var jcrop_api = this;
		                            thumbnail = this.initComponent('Thumbnailer', { width: 240, height: 120,ele:$(".thumb") });
		                            this.ui.preview = thumbnail;

     							})
     							} else {
     								//保存图片
     								$.ajax({
     									url: "/api/course/update/picture",
     									data: {cs_id:id,x:x,y:y,w:w,h:h},
     									type: "post",
     									success: function(data) {
     										if(data.code == 200) {
     											//刷新页面
     											location.href="/course/step3?id="+ data.result.cs_id;
     										}
     									}

     								})
     							}
     							
     							
    })
    $(".course-add").on("cropmove",".preview",function(a,b,c) {
    	x = c.x ;
    	y = c.y ;
    	w = c.w ;
    	h = c.h ;
    	console.log(w);

    })

	
	// $(".course-add").on("click",".btn-success",function() {	          
	// })

})