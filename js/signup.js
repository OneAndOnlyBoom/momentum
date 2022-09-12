async function signup() {
	const email = document.getElementById("email");
	const password = document.getElementById("password");
	const userName = document.getElementById("userName");

	const response = await axios.post(
		"http://localhost:2008/api/v1/auth/signup",
		{
			email,
			userName,
			password,
		}
	);

	console.log(response);
}
