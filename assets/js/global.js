var http = {
	path:"localhost:8080",
	ignoreUrl:"auth",//忽略认证的url
	/**
	 * 带认证信息的get请求
	 */
	authGet:function(url,callback){
		var token = http.getToken();
		if(http.validateUrl(url)&&(token==null||token=='')){
			window.location.href = "/login.html"; 
			return;
		}
		$.ajax({ 
			type : "GET", 
			url  : url,   
			contentType : 'application/json',
			headers: {
				Accept: "application/json; charset=utf-8",
				Authorization: "Bearer " + token
			}, 
			success : function(result){
				callback(result);
			}
		});
	},
	/**
	 * 带认证信息的post请求
	 */
	authPost:function(url,data,callback){
		var token = http.getToken();
		if(http.validateUrl(url)&&(token==null||token=='')){
			window.location.href = "/login.html"; 
			return;
		}
		$.ajax({ 
			type : "POST", 
			url  : url,   
			contentType : 'application/json',
			data : JSON.stringify(data), 
			success : function(result){
				callback(result);
			}
		});
	},
	/**
	 *获取token
	 */
	getToken:function(){
		var token = $.cookie('token');
		return token;
	},
	//判断url是否需要认证，true需要认证，false不需要认证
	validateUrl:function(url){
		if(url.indexOf(http.ignoreUrl)!=-1){
			return false;
		}else{
			return true;
		}
	},
	//页面跳转
	forward:function(url){
		window.location.href = url;
	},
	//判断是否登录，未登录则跳转到登录页登录
	isLogin:function(){
		var token = http.getToken();
		if(token==null||token==''){
			http.forward("/login.html");
		}
	},
	//获取URL中的参数值
	getQueryString:function(name){
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");		    
		var r = window.location.search.substr(1).match(reg);		    
		if (r != null){
			return unescape(r[2]); 
		}
		return null;
	}
}


var comm = {
	//定时显示
	showTime:function(time,msg,id){
		$('#'+id).html(msg);
		$('#'+id).show();
		setTimeout(function(){
			$('#'+id).hide();
		},time);
	}
}