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
		region: "jquery-region/jquery.region"
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
	    }
    }	
})