$(function () {
     $('#submitBtn').click(function(){
         var account = $('#c-account').val();
         var pwd = $('#c-password').val();
         
		$.ajax({ 
			type : "POST", 
			url  : "/sign-user/auth",   
			contentType : 'application/json',
			data : JSON.stringify({name:account,pwd:pwd}), 
			success : function(result){
				var token = result.token;
				if(token!=null&&token!=''){
					getInfo(token);
				}
				/*if(result.code==10000){
					window.location.href = "/account-index.html";
				}else{
					alert(result.result);
				}*/
			}
		});

    });
	
	function getInfo(token){
		$.ajax({ 
			type : "GET", 
			url  : "/sign-user/user/info",   
			contentType : 'application/json',
			headers: {
				Accept: "application/json; charset=utf-8",
				Authorization: "Bearer " + token
			}, 
			success : function(result){
				alert(result);
			}
		});
	}
});