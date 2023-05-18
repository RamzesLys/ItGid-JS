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
	console.log(result);
}

