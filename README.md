<img src="https://www.sipgatedesign.com/wp-content/uploads/wort-bildmarke_positiv_2x.jpg" alt="sipgate logo" title="sipgate" align="right" height="112" width="200"/>


# sipgate.io Node.js Basic Auth example

To demonstrate how to authenticate against the sipgate REST API using HTTP Basic Auth, we query the `/account` endpoint which provides basic account information.

For further information regarding sipgate REST API please visit https://api.sipgate.com/v2/doc


### Prerequisites
+ Node.js >= 10.15.3

### How To Use
Navigate to the project's root directory.

Install dependencies:
```bash
$ npm install
```

Change username and password in index.js:
```javascript
const username = 'YOUR_SIPGATE_EMAIL';
const password = 'YOUR_SIPGATE_PASSWORD';
```

Run the application:
```bash
$ npm run start
```


### How It Works
Request parameters like url, request method, and headers are defined as follows:  
```javascript
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
```
**Note**: Basic Auth requires the credentials to be Base64-encoded. 

We use axios for request generation and execution.
The request URL consists of the base url defined above and the endpoint `/account`.
This example prints the response body to the console.
```javascript
axios(`${baseURL}/account`, requestOptions)
	.then(response => {
		console.log(`Status: ${response.status}`);
		console.log(`Body: ${JSON.stringify(response.data)}`);
	})
	.catch(error => console.log('Error: ', error.message));
```






### Basic Auth
Basic access authentication (Basic Auth) is an easy to use, well known, and well supported authentication method. 
You can find a lot of documentation about this authentication method on the internet, e.g: [Wikipedia](https://en.wikipedia.org/wiki/Basic_access_authentication) or [RFC 2617](https://www.ietf.org/rfc/rfc2617.txt).

To use Basic Auth, you simply have to provide an Authorization header with each request. 
The header uses the keyword `Basic` followed by a space and a credentials string. 
The credentials string is `username:password` Base64-encoded.

For example, if your username is `John` and your password is `topsecret`, 
your plaintext credentials string would be `John:topsecret`. 
The Base64-encoded string would be `Sm9objp0b3BzZWNyZXQ=`.

The complete header would look like:

`Authorization: Basic Sm9objp0b3BzZWNyZXQ=`



### Common Issues

#### HTTP Errors
| reason | errorcode |
| ------------- |:-------------:|
| username and/or password are wrong | 401 |
| credentials not Base64-encoded | 401 |
| wrong REST API endpoint | 404 |
| wrong request method | 405 |


### Related

+ [axios documentation](https://github.com/axios/axios)


### Contact Us
Please let us know how we can improve this example. 
If you have a specific feature request or found a bug, please use **Issues** or fork this repository and send a **pull request** with your improvements.


### License
This project is licensed under **The Unlicense** (see [LICENSE file](./LICENSE)).


### External Libraries
This code uses the following external libraries

+ js-base64:  
    Licensed under the [BSD 3-Clause "New" or "Revised" License](https://spdx.org/licenses/BSD-3-Clause.html)  
    Website: https://github.com/dankogai/js-base64

+ axios:  
    Licensed under [The MIT License](https://opensource.org/licenses/MIT)  
    Website: https://github.com/axios/axios

----
[sipgate.io](https://www.sipgate.io) | [@sipgateio](https://twitter.com/sipgateio) | [API-doc](https://api.sipgate.com/v2/doc)
