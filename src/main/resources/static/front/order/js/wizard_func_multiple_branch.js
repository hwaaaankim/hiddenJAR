	/*  Wizard */
	jQuery(function ($) {
		"use strict";
		// Chose here which method to send the email, available:
		// Simple phpmail text/plain > form_send_multiple_branch.php (default)
		// PHPMailer text/html > phpmailer/multiple_branch_phpmailer.php
		// PHPMailer text/html SMTP > phpmailer/multiple_branch_phpmailer_smtp.php
		// PHPMailer with html template > phpmailer/multiple_branch_phpmailer_template.php
		// PHPMailer with html template SMTP> phpmailer/multiple_branch_phpmailer_template_smtp.php
		$('form#wrapped').attr('action', 'form_send_multiple_branch.php');
		$("#wizard_container").wizard({
			stepsWrapper: "#wrapped",
			submit: ".submit",
			beforeSelect: function (event, state) {
				console.log(state);
				if ($('input#website').val().length != 0) {
					return false;
				}
				if (!state.isMovingForward)
					return true;
				var inputs = $(this).wizard('state').step.find(':input');
				return !inputs.length || !!inputs.valid();
			},
			afterSelect:function(event, state){
				if(state.stepIndex === 13){
					console.log('click');
					if($('input[name=model]:checked').attr('id')!=undefined){
						$('#mirrorShape').val('거울 모델 : ' + $('input[name=model]').attr('id'));
					}
					
					if($('input[name=frame]:checked').attr('id')==='프레임있음[Yes]'){
						$('#mirrorFrame').val('프레임 여부 : ' + $('input[name=frame]').attr('id'));
						$('#mirrorStyle').val('프레임 스타일 : ' + $('input[name=style]:checked').attr('id'));
						$('#mirrorColor').val('프레임 색상 : ' + $('input[name=color]:checked').attr('id'));
					}else{
						$('#mirrorFrame').val('프레임 여부 : ' + $('input[name=frame]').attr('id'));
						$('#mirrorStyle').val('프레임 스타일 : 해당 없음');
						$('#mirrorColor').val('프레임 색상 : 해당 없음');
					}
					
					$('#mirrorWidth').val('가로길이 : ' + $('input[id=sizeWidth]').val() + "[단위 : mm]");
					$('#mirrorHeight').val('세로길이 : ' + $('input[id=sizeHeight]').val() + "[단위 : mm]");
					
					if($('#sizeMessage').val()!=undefined){
						$('#mirrorMessage').val('남김말 : ' + $('#sizeMessage').val());
					}else{
						$('#mirrorMessage').val('남김말 : 없음');
					}
					
					if($('input[name=led]:checked').attr('id') === 'LED추가함[YES]'){
						$('#mirrorLed').val('LED 추가여부 : ' + $('input[name=led]:checked').attr('id'));
						$('#mirrorLedMethod').val('LED 동작방식 : ' + $('input[name=method]:checked').attr('id'));
						if($('input[name=method]:checked').attr('id') === '터치식LED[Touchable]'){
							$('#mirrorLedForm').val('LED 형태 : ' + $('input[name=form]:checked').attr('id'));
							$('#mirrorSensor').val('센서 추가여부 : 해당없음');
							$('#mirrorSensorForm').val('센서 형태 : 해당없음');
						}else{
							$('#mirrorLedForm').val('LED 형태 : 해당없음');
							$('#mirrorSensor').val('센서 추가여부 : ' + $('input[name=sensor]:checked').attr('id'));
							if($('input[name=sensor]:checked').attr('id') === '모션감지센서추가함[Add]'){
								$('#mirrorSensorForm').val('센서 형태 : ' + $('input[name=sensor_form]:checked').attr('id'));
							}else{
								$('#mirrorSensorForm').val('센서 형태 : 해당없음');
							}
						}
						
					}else{
						$('#mirrorLed').val('LED 추가여부 : ' + $('input[name=led]:checked').attr('id'));
						$('#mirrorLedMethod').val('LED 동작방식 : 해당없음');
						$('#mirrorLedForm').val('LED 형태 : 해당없음');
						$('#mirrorSensor').val('센서 추가여부 : 해당없음');
						$('#mirrorSensorForm').val('센서 형태 : 해당없음');
					}
					
					
					/*if($('input[name=model]:checked').attr('id')!=undefined){
						$('#mirrorShape').val('거울 모델 : ' + $('input[name=model]').attr('id'));
					}
					
					if($('input[name=frame]:checked').attr('id')!=undefined){
						$('#mirrorFrame').val('프레임 여부 : ' + $('input[name=frame]').attr('id'));
					}
					
					if($('input[name=style]:checked').attr('id')!=undefined){
						$('#mirrorStyle').val('프레임 스타일 : ' + $('input[name=style]:checked').attr('id'));
					}else{
						$('#mirrorStyle').val('프레임 스타일 : 해당 없음');
					}
					
					if($('input[name=color]:checked').attr('id')!=undefined){
						$('#mirrorColor').val('프레임 색상 : ' + $('input[name=color]:checked').attr('id'));
					}else{
						$('#mirrorColor').val('프레임 색상 : 해당 없음');
					}
					
					$('#mirrorWidth').val('가로길이 : ' + $('input[id=sizeWidth]').val() + "[단위 : mm]");
					$('#mirrorHeight').val('세로길이 : ' + $('input[id=sizeHeight]').val() + "[단위 : mm]");
					
					if($('#sizeMessage').val()!=undefined){
						$('#mirrorMessage').val('남김말 : ' + $('#sizeMessage').val());
					}else{
						$('#mirrorMessage').val('남김말 : 없음');
					}
					
					if($('input[name=led]:checked').attr('id')!=undefined){
						$('#mirrorLed').val('LED 추가여부 : ' + $('input[name=led]:checked').attr('id'));
					}
					
					if($('input[name=method]:checked').attr('id')!=undefined){
						$('#mirrorLedMethod').val('LED 동작방식 : ' + $('input[name=method]:checked').attr('id'));
					}else{
						$('#mirrorLedMethod').val('LED 동작방식 : 해당없음');
					}
					
					if($('input[name=form]:checked').attr('id')!=undefined){
						$('#mirrorLedForm').val('LED 형태 : ' + $('input[name=form]:checked').attr('id'));
					}else{
						$('#mirrorLedForm').val('LED 형태 : 해당없음');
					}
					
					if($('input[name=sensor]:checked').attr('id')!=undefined){
						$('#mirrorSensor').val('센서 추가여부 : ' + $('input[name=sensor]:checked').attr('id'));
					}else{
						$('#mirrorSensor').val('센서 추가여부 : 해당없음');
					}
					
					if($('input[name=sensor_form]:checked').attr('id')!=undefined){
						$('#mirrorSensorForm').val('센서 형태 : ' + $('input[name=sensor_form]:checked').attr('id'));
					}else{
						$('#mirrorSensorForm').val('센서 형태 : 해당없음');
					}*/
				}
			}
		}).validate({
			errorPlacement: function (error, element) {
				if (element.is(':radio') || element.is(':checkbox')) {
					error.insertBefore(element.next());
				} else {
					error.insertAfter(element);
				}
			}
		});
	});

	$("#wizard_container").wizard({
		transitions: {
			branchtype: function ($step, action) {
				var branch = $step.find(":checked").val();
				if (!branch) {
					 $("form").valid();
				}
				return branch;
			}
		}
	});
	