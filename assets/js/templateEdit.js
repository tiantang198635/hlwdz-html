$(function () {	
	var init = function(){
		//获取canvas元素
        var cvs = document.getElementById("templateCanvas");
        //创建image对象
        var imgObj = new Image();
        imgObj.src = "/assets/images/template.png";
        //待图片加载完后，将其显示在canvas上
        imgObj.onload = function(){
                var ctx = cvs.getContext('2d');
                ctx.drawImage(this, 0, 0);//this即是imgObj,保持图片的原始大小：470*480
                //ctx.drawImage(this, 0, 0,1024,768);//改变图片的大小到1024*768
            }
	}
	
	init();
});