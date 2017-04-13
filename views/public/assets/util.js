//封装的js公共工具


//获取地址栏的id
function getQuery() {
        	var id = location.search.slice(1).split("=")[1];
        	return id;
        }