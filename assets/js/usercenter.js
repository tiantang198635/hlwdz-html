$(function () {	
	//============================印章=====================
	$('#uploadBtn').click(function() {
		http.authAjaxSubmit('uploadForm','/sign-user/user/upload',function(data){
			if(data.code==1000){
				$('#default-danger').hide();
				$('#uploadPrint'+active_create_type).hide();
				$('#uploadPrint3').html('<img src="/assets/images/uheader/'+data.msg+'"/>');
				$('#uploadPrint3').show();
				$('#printImg').val(data.msg);
			}else{
				$('#default-danger').show();
				$('#default-danger').html(data.msg);
			}
		});
	});
	
	/**
	 *点击添加印章按钮
	 */
	$('.ion-md-add-circle').click(function(){
		$('#printList').hide();
		$('#upSignDiv').show();
	});
	
	/**
	 *点击颜色
	 */
	$('#print-color p').click(function(){
		$('.ion-ios-checkmark-circle-outline').remove();
		$(this).html('<i class="ion-ios-checkmark-circle-outline color-white"></i>');
		$('#printColor').val($(this).attr('attr'));
	});
	
	/**
	 *选中的创建方式
	 */
	var active_create_type = '0';
	
	/**
	 *点击创建方式
	 */
	$('#print-create-type input').click(function(){
		$('#uploadPrint'+active_create_type).hide();
		var val = $(this).val();
		$('#uploadPrint'+val).show();
		active_create_type = val;
	});
	
	/**
	 *点击印章样式
	 */
	$('.print-style p').click(function(){
		$('.item-active').removeClass('item-active');
		$(this).addClass('item-active');
		$('#printStyle').val($(this).attr('attr'));
	});
	
	/**
	 *点击返回
	 */
	$('#print-back').click(function(){
		$('#printList').show();
		$('#upSignDiv').hide();
	});
	
	//=============================联系人=====================
	/**
	 *点击添加联系人按钮
	 */
	$('#addContactBtn').click(function(){
		$('#contact_popup').css('visibility','visible');
	});
	
	/**
	 *点击批量导入按钮
	 */
	$('#bulkExportBtn').click(function(){
		$('#bulk_popup').css('visibility','visible');
	});
	
	/**
	 *点击下载按钮
	 */
	$('#downTemplateBtn').click(function(){
		window.open("/assets/template/template.xlsx");
	});
	
	/**
	 *点击编辑联系人
	 */
	$('.editBtn').click(function(){
		var dt = $(this).attr('data');
		$('#contactId').val(dt);
		$('#contact_edit_popup').css('visibility','visible');
	});
	
	
	//=================公共=========================
	/**
	 *点击close按钮
	 */
	$('.p-close').click(function(){
		var modePopup = $(this).parents('.model-popup');
		var id = modePopup.attr('id');
		$('#'+id).css('visibility','hidden');
	});
});