/* Add your JavaScript to this file */
const email = document.getElementById('email')
const form = document.getElementById('form')

form.addEventListener('submit', (e) =>{
	let messages = []
	if (email.value == '' || email.value == null){
		messages.push('Email is required')
	}

	if (messages.length >0){
		e.preventDefault()
		errorElement.innerText = messages.join(',')
	}
})