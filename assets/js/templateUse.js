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
	
	var itemData = [{"itemNum":1,"inputItemName":"甲方姓名","x":"300","y":"200","fontFamily":"宋体","fontSize":"14px"}];
	var initData = function(){
		for(var i=0;i<itemData.length;i++){
			/**
			 *增加可拖拽div
			 */
			$('#templateContent').append('<div draggable="true" class="template_pos" ondragstart="drag(event)" id="item_drag_'+itemData[i].itemNum+'">'+
											'<div class="template_pos_changeDiv text-left" style="font-family:'+itemData[i].fontFamily+';font-size:'+itemData[i].fontSize+'">'+itemData[i].inputItemName+'</div>'+
											'<span class="template_posInex" style="top:'+itemData[i].y+'px,left:'+itemData[i].x+'px">'+itemData[i].itemNum+'</span>'+
										 '</div>');
			
			/**
			 * 添加项
			 */
			$('#templateItemList').append('<div class="row col-12 col-sm-12 col-md-12 margin-top-20" id="item_'+itemData[i].itemNum+'">'+
											'<label class="col-2 col-sm-2 col-md-2 col-form-label text-center"><span class="item_num">'+itemData[i].itemNum+'</span></label>'+
											'<div class="col-8 col-sm-8 col-md-8">'+
											'	<input type="text" class="form-control inputItemName" data-item="'+itemData[i].itemNum+'" id="inputItemName'+itemData[i].itemNum+'" value="'+itemData[i].inputItemName+'" name="inputItemName" placeholder="输入项名称" required>'+
											'</div>'+
										  '</div>');
		} 
		$('.inputItemName').change(function(){
			var itemNum = $(this).attr('data-item');
			var val = $(this).val();
			$('#item_drag_'+itemNum+' .template_pos_changeDiv').text(val);
		});
	} 
	
	init();
	initData();
});
 