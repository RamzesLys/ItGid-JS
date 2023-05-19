let userEmail = getCookie('email')
console.log(userEmail);
ajax('core/get_user_data.php', 'POST', getUserData, {"email" : userEmail});

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function getUserData(result) {
	result = JSON.parse(result);
	console.log(result);
	document.querySelector('#signup-name').value = result.name;
	document.querySelector('#signup-pass').value = result.password;
	document.querySelector('#signup-birthday').value = result.birthday;
}

document.querySelector('#signup-submit').onclick = function(event) {
	event.preventDefault();
	let updateData = {
		"email": userEmail,
		"name": document.querySelector('#signup-name').value,
		"pass": document.querySelector('#signup-pass').value,
		"birthday": document.querySelector('#signup-birthday').value,
	}
	ajax('core/update_user_data.php', 'POST', updateUserData, updateData);
}

function updateUserData(result) {
	console.log(result);
	
}
