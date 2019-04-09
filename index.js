const base64 = require('js-base64').Base64;
const axios = require('axios');

const baseURL = 'https://api.sipgate.com/v2';
const username = 'YOUR_SIPGATE_EMAIL';
const password = 'YOUR_SIPGATE_PASSWORD';
const base64EncodedCredentials = base64.encode(`${username}:${password}`);
const requestOptions = {
	method: 'GET',
	headers: {
		Accept: 'application/json',
		Authorization: `Basic ${base64EncodedCredentials}`,
	},
};

axios(`${baseURL}/account`, requestOptions)
	.then(response => {
		console.log(`Status: ${response.status}`);
		console.log(`Body: ${JSON.stringify(response.data)}`);
	})
	.catch(error => console.log('Error: ', error.message));
