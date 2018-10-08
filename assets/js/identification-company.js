$(function () {	
	/**
	 *点击提交
	 */
	$('#nextStep').click(function(){
		$('#firstStepFooter').hide();
		$('.main-next').show();
		$('.main-dashboard').hide();
		$('#nextStepFooter').show();
	});

	$('#beforeBtn').click(function(){
		$('#nextStepFooter').hide();
		$('.main-dashboard').show();
		$('.main-next').hide();
		$('#firstStepFooter').show();
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