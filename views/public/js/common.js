
//模块化  定义模块
define(["jquery","template","cookie"], function ($,template) {
	//判断页面是否是登录页面,若是就不执行下面的代码
	if(!(location.pathname == "/login" || location.pathname == "/dashboard/login" || location.pathname == "/index.php/dashboard/login")){
	//获取用户的头像信息, 将其渲染到页面
	var userInfoStr = $.cookie("userInfo");
	if ( !userInfoStr) {
		location.href = "/login";
	}else {
		var userInfo = JSON.parse((userInfoStr));
	console.log(userInfo);
    var htmlStr = template("userInfoTpl", userInfo);
    $("#profile").html(htmlStr);
	}
}

})





