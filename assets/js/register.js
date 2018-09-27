$(function () {	
	$("#register-form").validate({
		errorElement : 'span',
		errorClass : 'help-block',

		rules : {
			account : "required",
			pwd : {
				required : true,
				minlength : 6
			},
			cpassword : {
				required : true,
				equalTo : "#pwd"
			} 
		},
		messages : {
			account : "请输入姓名",
			pwd : {
				required : "请输入密码",
				minlength : "密码不能小于6个字符"
			},
			cpassword : {
				required : "请输入确认密码",
				equalTo : "两次输入密码不一致不一致"
			}
		},
		success : function(label) {
			var el=label.closest('.form-group').find("input");
			el.next().remove();
			el.after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
			label.closest('.form-group').removeClass('has-error').addClass("has-feedback has-success");
			label.remove();
		},
		submitHandler: function(form) {  
			var account = $('#account').val();
			var pwd = $('#pwd').val();
			 
			http.authPost("/sign-user/auth/register",{name:account,pwd:pwd},function(result){ 
				if(result!=null&&result.code==10000){ 
					http.forward("/login.html");
				}else{
					comm.showTime(2000,result.msg,'errorInfo');
				}			
			});  
		}
	})     
});