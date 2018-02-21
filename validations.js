$(function() {
	$("form[name='registration']").validate({
		rules: {
			fname: {
				required: true,
				minlength: 1
			},
			email: {
				required: true,
				email : true
			},
			cemail: {
				required: true,
				email : true,
				equalTo: "#email"
			},
			optradio: "required",
			mobile : {
				required: true,
				minlength: 10,
				maxlength: 10 
			}
		},
		messages: {
			fname: "Please enter first name",
			email: {
				required:"Please enter an email address",
				email: "Please enter a valid address"
			},
			cemail: {
				required:"Please enter an email address",
				email: "Please enter a valid address",
				equalTo: "Emails don't match"
			},
			optradio: "Please select a gender",
			mobile:{
				required: "Please enter a mobile number",
				minlength: "Number should be 10 digit long",
				maxlength: "Number should be 10 digit long"
			}
		},
		submitHandler: function(form){
			form.submit();
		}
	});
});