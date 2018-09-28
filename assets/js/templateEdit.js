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
	
	var itemNum = 0;
	$('#addInputItem').click(function(){
		itemNum++;		
		/**
		 *增加可拖拽div
		 */
		$('#templateContent').append('<div draggable="true" class="template_pos" ondragstart="drag(event)" id="item_drag_'+itemNum+'"><div class="template_pos_changeDiv"></div> <span class="template_posInex">'+itemNum+'</span>  </div>');
		
		/**
		 * 添加项
		 */
		$('#templateItemList').append('<div class="row col-12 col-sm-12 col-md-12 margin-top-20" id="item_'+itemNum+'">'+
										'<label class="col-2 col-sm-2 col-md-2 col-form-label text-center"><span class="item_num">'+itemNum+'</span></label>'+
										'<div class="col-8 col-sm-8 col-md-8">'+
										'	<input type="text" class="form-control" id="inputItemName'+itemNum+'" name="inputItemName" placeholder="输入项名称" required>'+
										'</div>'+
										'<div class="col-2 col-sm-2 col-md-2">'+
										'	<div class="item_close" data="'+itemNum+'">X</div>'+
										'</div>'+
									  '</div>');
							  
		$('.item_close').click(function(){
			var rmItemNum = $(this).attr('data');
			$('#item_'+rmItemNum).remove();
			$('#item_drag_'+rmItemNum).remove();
			if(itemNum>1){
				itemNum--;
			}
		});
		
	});
	
	init();
});

function allowDrop(ev)
{
ev.preventDefault();
}

var x = 0;
var y = 0;
function drag(ev)
{
	ev = ev||window.event;
	x=ev.layerX||ev.offsetX;
	y=ev.layerY||ev.offsetY;
	ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
	ev.preventDefault();
	ev=ev||window.event; 
	 
	var data=ev.dataTransfer.getData("Text");
	var dropObj = $('#'+data); 
	var px = (ev.clientX-x)+"px";
	var py = (ev.clientY-y)+"px";
	console.log(x+','+y+','+px+','+py);
	$('#'+data).css('left',px);
	$('#'+data).css('top',py);
} 