# sdk-nodejs-cert-manager
Using the Certificate Manager Service, you can conveniently provision and manage SSL certificates with IONOS services and your internal connected resources.

## Installation

Install the following dependencies:

```shell
npm i --save @ionos-cloud/sdk-nodejs-cert-manager
```

## Usage
Import the SDK using:

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-cert-manager')
```

Or, if the import is done from an ES module, use:

```javascript
import * as ionoscloud from '@ionos-cloud/sdk-nodejs-cert-manager';
```

### Example

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-cert-manager');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.InformationApi(config);
// Get the Service API Information
api_instance
  .getInfo()
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

Returns the information about the api.