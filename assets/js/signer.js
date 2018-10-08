$(function () {	
	var init = function(){
		//获取canvas元素
        var cvss = $(".canvas");
		cvss.each(function(e){
			//创建image对象
			var cvs = $(this)[0];
			var imgObj = new Image();
			imgObj.src = "/assets/images/template.png";
			//待图片加载完后，将其显示在canvas上
			imgObj.onload = function(){
					var ctx = cvs.getContext('2d');
					ctx.drawImage(this, 0, 0);//this即是imgObj,保持图片的原始大小：470*480
					//ctx.drawImage(this, 0, 0,1024,768);//改变图片的大小到1024*768
				}
		});
	}
	
	var itemData = [{"signId":1,"signImg":"/assets/images/yinzhang/czx.png","name":"陈志雄"},{"signId":2,"signImg":"/assets/images/yinzhang/czx2.png","name":"陈志雄"}];
	var initData = function(){
		for(var i=0;i<itemData.length;i++){
			/**
			 *增加可拖拽div
			 */
			$('.seal-list').append('<div class="seal-item">'+
						  '	 <div draggable="true" class="seal-image" style="background-image: url('+itemData[i].signImg+');" attr="'+itemData[i].signImg+'" draggable="true" ondragstart="drag(event,1)"></div> '+
						  '	 <div class="seal-name">'+itemData[i].name+
						  '	 </div>'+
						  '	</div>'); 
		}  
	} 
	
	/**
	 *点击合同附件
	 */
	$('.attachment').click(function(){
		$('.item-active').removeClass('item-active');
		$(this).addClass('item-active');
	});
	
	/**
	 *回到顶部
	 */
	$('.goto-top').click(function(){
		window.scrollTo(0,0);
	});
	
	$('.goto-bottom').click(function(){
		var hei = $('.sign-content').height();
		$('html,body').animate({scrollTop:hei});
	});
	
	/**
	 *点击单页签或奇缝签按钮
	 */
	$('.pagingSeal-show').click(function(){
		var dat = $(this).attr('data');
		if(dat=='single'){
			//当前为单页签
			$(this).text('单页签章');
			$(this).attr('data','qif');
			$('.pagingSeal-box').show(10);
		}else{
			$(this).text('骑缝签章');
			$(this).attr('data','single');
			$('.pagingSeal-box').hide(10);
		}
	});
	 
	$('.goBack').click(function(){
		window.history.back();
	});

	$('.pagingSeal-set').click(function(){
		$('#flow_popup').css('visibility','visible');
	});

	/**
	 *点击close按钮
	 */
	$('.p-close').click(function(){
		var modePopup = $(this).parents('.model-popup');
		var id = modePopup.attr('id');
		$('#'+id).css('visibility','hidden');
	});
	
	init(); 
	initData();
});

function allowDrop(ev)
{
ev.preventDefault();
}

var dragNum = 0;//拖拽次数
var dragType = 1;//拖拽类型

var x = 0;
var y = 0;
/**
 *开始拖拽
 */
function drag(ev,type)
{ 
	ev = ev||window.event;
	x=ev.layerX||ev.offsetX;
	y=ev.layerY||ev.offsetY;
	if(type==1){
		dragNum++;
		ev.dataTransfer.setData("Text",$(ev.target).attr('attr'));
	}else{
		ev.dataTransfer.setData("Text",ev.target.id);
	}
	
	dragType = type;
}

/**
 *拖拽结束
 */
function drop(ev)
{
	ev.preventDefault();
	ev=ev||window.event; 
	 
	var data=ev.dataTransfer.getData("Text");
	//var dropObj = $('#'+data); 
	var px = (ev.clientX-x)+"px";
	var py = (ev.clientY-y)+"px";
	console.log(x+','+y+','+px+','+py);
	
	if(dragType==1){
		if($('.pagingSeal-show').attr('data')=='single'){
			$('#pdfPageBox').append('<div style="background-image:url('+data+');left:'+px+';top:'+py+'" class="dragImg" id="drag_'+dragNum+'" draggable="true" ondragstart="drag(event,2)">'+
									'<div class="drag_img_close" data="1">X</div>'+
									'</div>');
		}else{
			$('.pagingSeal-box').append('<div style="background-image:url('+data+');top:'+py+'" class="dragImg" id="drag_'+dragNum+'" draggable="true" ondragstart="drag(event,2)">'+
									'<div class="drag_img_close" data="1">X</div>'+
									'</div>');
		}
		/**
		 *点击拖拽图片的close
		 */
		$('.drag_img_close').click(function(){
			$(this).parent().remove();
		});
	}else{
		if($('.pagingSeal-show').attr('data')=='single'){
			$('#'+data).css('left',px);
			$('#'+data).css('top',py);
		}else{
			$('#'+data).css('top',py);
		}
	}
} 