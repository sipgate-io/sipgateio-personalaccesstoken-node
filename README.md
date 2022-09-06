<img src="https://www.sipgatedesign.com/wp-content/uploads/wort-bildmarke_positiv_2x.jpg" alt="sipgate logo" title="sipgate" align="right" height="112" width="200"/>

# sipgate.io Node.js Personal Access Token example

To demonstrate how to authenticate against the sipgate REST API using HTTP Basic Auth, we query the `/account` endpoint which provides basic account information.

For further information regarding sipgate REST API please visit https://api.sipgate.com/v2/doc.

For more information on how to create a token, visit https://www.sipgate.io/rest-api/authentication#personalAccessToken.

### Prerequisites

- Node.js >= 10.15.3

### How To Use

Navigate to the project's root directory.

Install dependencies:

```bash
$ npm install
```

Create the `.env` file by copying the `.env.example`. Set the values according to the comment above each variable.

The token should have the `account:read` scope.

Run the application:

```bash
$ npm run start
```

### How It Works

Request parameters like url, request method, and headers are defined as follows:

```javascript
const baseURL = "https://api.sipgate.com/v2";

const tokenId = "YOUR_SIPGATE_TOKEN_ID";
const token = "YOUR_SIPGATE_TOKEN";

const base64EncodedCredentials = base64.encode(`${tokenId}:${token}`);

const requestOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: `Basic ${base64EncodedCredentials}`,
  },
};
```

**Note**: Basic Auth requires the credentials to be Base64-encoded.

> If OAuth should be used for `Authorization` instead of Basic Auth we do not suply the auth object in the request options. Instead we set the authorization header to `Bearer` followed by a space and the access token: `` Authorization: `Bearer ${accessToken}`, ``. For an example application interacting with the sipgate API using OAuth see our [sipgate.io Node.js OAuth example](https://github.com/sipgate-io/sipgateio-oauth-node).

We use axios for request generation and execution.
The request URL consists of the base url defined above and the endpoint `/account`.
This example prints the response body to the console.

```javascript
axios(`${baseURL}/account`, requestOptions)
  .then((response) => {
    console.log(`Status: ${response.status}`);
    console.log(`Body: ${JSON.stringify(response.data)}`);
  })
  .catch((error) => console.log("Error: ", error.message));
```

### Common Issues

#### HTTP Errors

| reason                         | errorcode |
| ------------------------------ | :-------: |
| tokenId and/or token are wrong |    401    |
| credentials not Base64-encoded |    401    |
| wrong REST API endpoint        |    404    |
| wrong request method           |    405    |

### Related

- [axios documentation](https://github.com/axios/axios)

### Contact Us

Please let us know how we can improve this example.
If you have a specific feature request or found a bug, please use **Issues** or fork this repository and send a **pull request** with your improvements.

### License

This project is licensed under **The Unlicense** (see [LICENSE file](./LICENSE)).

### External Libraries

This code uses the following external libraries

- js-base64:  
   Licensed under the [BSD 3-Clause "New" or "Revised" License](https://spdx.org/licenses/BSD-3-Clause.html)  
   Website: https://github.com/dankogai/js-base64

- axios:  
   Licensed under [The MIT License](https://opensource.org/licenses/MIT)  
   Website: https://github.com/axios/axios

---

[sipgate.io](https://www.sipgate.io) | [@sipgateio](https://twitter.com/sipgateio) | [API-doc](https://api.sipgate.com/v2/doc)
