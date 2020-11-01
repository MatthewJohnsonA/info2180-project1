/* Add your JavaScript to this file */
"use strict";
getElementsByClassName("btn").onclick = function() {Email()};

function Email(formData){
	let newEmail = formData.email.value;
	var messageElement = document.querySelector('.message');
	if (newEmail){
		messageElement.innerHtml = `Your email address <${newEmail}> has been added to our mailing list`;
		return false;
	}else{
		messageElement.innerHtml = "Email must be filled out, please enter a valid email address";
		return false;
	}
}