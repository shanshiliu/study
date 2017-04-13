requirejs.config({
	baseUrl: "/views/public/assets",
	paths: {
		jquery: "jquery/jquery",
		cookie: "jquery-cookie/jquery.cookie",
		template: "artTemplate/template",
		form: "jquery-form/jquery.form",
		bootstrap: "bootstrap/js/bootstrap",
		datepicker: "bootstrap-datepicker/js/bootstrap-datepicker",
		NProgress: "nprogress/nprogress",
		validate: "jquery-validate/jquery-validate.min",
		ckeditor:　"ckeditor/ckeditor",
		uploadify: "uploadify/jquery.uploadify.min",
		region: "jquery-region/jquery.region",
		util: "../js/lib/util",
		jcrop:"jcrop/js/Jcrop",
		echarts: "echarts/echarts.min"
	},
	shim: {
		"bootstrap": {
			deps : ["jquery"]
		},
		"validate": {
			deps : ["jquery"]
	    },
	    "ckeditor": {
	    	exports: "CKEDITOR"
	    },
	    "uploadify": {
	    	deps: ["jquery"]
	    },
	    "jcrop": {
	    	deps: ["jquery"]
	    }
    }	
})