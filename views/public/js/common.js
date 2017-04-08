
//模块化  定义模块
define(["jquery","template","NProgress","cookie"], function ($,template,NProgress) {

    //添加一个时间进度条
    NProgress.start();
    NProgress.done();

    //发送ajax请求时也要显示进度条
    $(document).ajaxStart(function() {


        NProgress.start();     
    });
    $(document).ajaxStop(function() {
     NProgress.start();
    });
    
    
    



	//判断页面是否是登录页面,若是就不执行下面的代码
	if(!(location.pathname == "/login" || location.pathname == "/dashboard/login" || location.pathname == "/index.php/dashboard/login")){
	//获取用户的头像信息, 将其渲染到页面
	var userInfoStr = $.cookie("userInfo");
  console.log(userInfoStr);
	//判断用户是否已登录,若没有登录直接跳到登录页面
	if ( !userInfoStr) {
		location.href = "/login";
	}else {
		var userInfo = JSON.parse((userInfoStr));
	  console.log(userInfo);
     var htmlStr = template("userInfoTpl", userInfo);
     $("#profile").html(htmlStr);

    //点击导航栏,显示二级菜单
      $("#navs>ul>li>a").on("click",function() {
    	// alert("hehe");
    	$(this).next().slideToggle();
      })

    //退出功能
    $("#login-out").click(function() {
    	//清除cookie 跳转到登录页面
    	$.cookie("useInfo",null);
    	location.href = "/login";
    });
      
    }
}

})





