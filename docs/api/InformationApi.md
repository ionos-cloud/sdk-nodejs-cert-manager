# InformationApi

All URIs are relative to *https://api.ionos.com*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**getInfo**](InformationApi.md#getinfo) | **GET** /certificatemanager | Get the Service API Information |
| [**getJsonOpenApiSpec**](InformationApi.md#getjsonopenapispec) | **GET** /certificatemanager/openapi.json | Get the Open API Documentation JSON |
| [**getYamlOpenApiSpec**](InformationApi.md#getyamlopenapispec) | **GET** /certificatemanager/openapi.yaml | Get the Open API Documentation YAML |


## getInfo

> <ApiInfoDto> getInfo

Get the Service API Information

Retrieves the service API information.

### Examples

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

### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiInfoDto**](../models/ApiInfoDto.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJsonOpenApiSpec

> any getJsonOpenApiSpec

Get the Open API Documentation JSON

Displays the Open API documentation in the JSON format.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-cert-manager');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.InformationApi(config);
// Get the Open API Documentation JSON
api_instance
  .getJsonOpenApiSpec()
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

This endpoint does not need any parameter.

### Return type

**any**

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getYamlOpenApiSpec

> any getYamlOpenApiSpec

Get the Open API Documentation YAML

Displays the Open API documentation in the YAML format.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-cert-manager');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.InformationApi(config);
// Get the Open API Documentation YAML
api_instance
  .getYamlOpenApiSpec()
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

This endpoint does not need any parameter.

### Return type

**any**

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/yaml

