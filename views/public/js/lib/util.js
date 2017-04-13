define(function(){
	return {
		getQuery: function (){
			var queryString = {};
			location.search.slice(1).split("&").forEach(function(v){
				var kvp = v.split("=");
				queryString[kvp[0]] = kvp[1];
			})
			return queryString;
		}
	};
})