//给login页面  定义模块
define(["jquery","cookie","form"], function ($) {
	//获取用户之前登录的头像信息
	var userInfoStr = $.cookie("userInfo");
	if(userInfoStr){
		//如果获取到了，就把这个头像设置为用户的头像		
		var userInfo = JSON.parse(userInfoStr);
		$(".avatar img").attr("src", userInfo.tc_avatar);
	}

    //发请求  数据交互
    $("form").submit(function(){
            $("form").ajaxSubmit({
                success: function(data){
                    if(data.code == 200){       
                        //将登陆成功之后，返回的用户名以及用户头像存储到cookie当中
                        $.cookie("userInfo", JSON.stringify(data.result),{path:"/"});
                        alert($.cookie("userInfo"));
                        alert("成功");
                        //跳转页面
                        location.href = "/";

                    }else{
                        alert(data.msg);
                    }
                }
            });
            return false;
        });

})