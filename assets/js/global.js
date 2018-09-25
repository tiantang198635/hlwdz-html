var http = {
	path:"localhost:8080",
	ignoreUrl:"auth",//������֤��url
	/**
	 * ����֤��Ϣ��get����
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
	 * ����֤��Ϣ��post����
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
	 *��ȡtoken
	 */
	getToken:function(){
		var token = $.cookie('token');
		return token;
	},
	//�ж�url�Ƿ���Ҫ��֤��true��Ҫ��֤��false����Ҫ��֤
	validateUrl:function(url){
		if(url.indexOf(http.ignoreUrl)!=-1){
			return false;
		}else{
			return true;
		}
	},
	//ҳ����ת
	forward:function(url){
		window.location.href = url;
	},
	//�ж��Ƿ��¼��δ��¼����ת����¼ҳ��¼
	isLogin:function(){
		var token = http.getToken();
		if(token==null||token==''){
			http.forward("/login.html");
		}
	},
	//��ȡURL�еĲ���ֵ
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
	//��ʱ��ʾ
	showTime:function(time,msg,id){
		$('#'+id).html(msg);
		$('#'+id).show();
		setTimeout(function(){
			$('#'+id).hide();
		},time);
	}
}