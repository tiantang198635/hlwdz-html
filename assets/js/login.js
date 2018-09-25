$(function () {
     $('#submitBtn').click(function(){
         var account = $('#c-account').val();
         var pwd = $('#c-password').val();
         
		 http.authPost("/sign-user/auth",{name:account,pwd:pwd},function(result){ 
			if(result!=null&&result.code==10000){
				/*http.authGet("/sign-user/user/info",function(result){
					alert(result);
				});*/
				http.forward("/usercenter.html");
			} 
		}); 
    }); 
});