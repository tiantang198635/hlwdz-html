$(function () {	
	/**
	 *点击添加催签流程按钮
	 */
	$('.signerFlowBtn').click(function(){
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
});