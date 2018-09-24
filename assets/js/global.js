var path="localhost:8080";

/**
 *ªÒ»°token
 */
getToken = function(){
	var token = $.cookie('token');
	if(token==null||token==''){
		window.location.href = "/login.html";
	}
}