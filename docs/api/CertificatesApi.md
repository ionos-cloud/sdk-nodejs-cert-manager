# CertificatesApi

All URIs are relative to *https://api.ionos.com*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**certificatesDelete**](CertificatesApi.md#certificatesdelete) | **DELETE** /certificatemanager/certificates/{certificateId} | Delete a Certificate by ID |
| [**certificatesGet**](CertificatesApi.md#certificatesget) | **GET** /certificatemanager/certificates | Get Certificates |
| [**certificatesGetById**](CertificatesApi.md#certificatesgetbyid) | **GET** /certificatemanager/certificates/{certificateId} | Get a Certificate by ID |
| [**certificatesPatch**](CertificatesApi.md#certificatespatch) | **PATCH** /certificatemanager/certificates/{certificateId} | Update a Certificate Name by ID |
| [**certificatesPost**](CertificatesApi.md#certificatespost) | **POST** /certificatemanager/certificates | Add a New Certificate |


## certificatesDelete

> certificatesDelete(certificateId)

Delete a Certificate by ID

Deletes a certificate specified by its ID.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-cert-manager');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.CertificatesApi(config);
// Delete a Certificate by ID
api_instance
  .certificatesDelete({
    certificateId: certificateId_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **certificateId** | **string** |  | [default to undefined] |

### Return type

nil (empty response body)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## certificatesGet

> <CertificateCollectionDto> certificatesGet(opts)

Get Certificates

Retrieves all available certificates.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-cert-manager');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.CertificatesApi(config);
// Get Certificates
api_instance
  .certificatesGet({
    offset: offset_example,
    limit: limit_example
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **offset** | **string** | \&#39;Limit\&#39; and \&#39;Offset\&#39; are optional; you can use these filter parameters to retrieve only part of the results obtained by a request.  Offset is the first element (from the complete list of elements) to be included in the response. | [optional][default to undefined] |
| **limit** | **string** | \&#39;Limit\&#39; and \&#39;Offset\&#39; are optional; you can use these filter parameters to retrieve only part of the results of a query.  If both \&#39;Offset\&#39; and \&#39;Limit\&#39;are specified, the offset lines are skipped before counting the returned limit lines. | [optional][default to undefined] |

### Return type

[**CertificateCollectionDto**](../models/CertificateCollectionDto.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## certificatesGetById

> <CertificateDto> certificatesGetById(certificateId)

Get a Certificate by ID

Retrieves a certificate specified by its ID.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-cert-manager');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.CertificatesApi(config);
// Get a Certificate by ID
api_instance
  .certificatesGetById({
    certificateId: certificateId_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **certificateId** | **string** |  | [default to undefined] |

### Return type

[**CertificateDto**](../models/CertificateDto.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## certificatesPatch

> <CertificateDto> certificatesPatch(certificateId, certificatePatchDto)

Update a Certificate Name by ID

Updates the name of the specified certificate.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-cert-manager');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.CertificatesApi(config);
// Update a Certificate Name by ID
api_instance
  .certificatesPatch({
    certificateId: certificateId_example,
    certificatePatchDto: certificatePatchDto_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **certificateId** | **string** |  | [default to undefined] |
| **certificatePatchDto** | [**CertificatePatchDto**](../models/CertificatePatchDto.md) |  |  |

### Return type

[**CertificateDto**](../models/CertificateDto.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## certificatesPost

> <CertificateDto> certificatesPost(certificatePostDto)

Add a New Certificate

Adds a new PEM (Privacy Enhanced Mail) file that is used to store SSL certificates and their associated private keys.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-cert-manager');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.CertificatesApi(config);
// Add a New Certificate
api_instance
  .certificatesPost({
    certificatePostDto: certificatePostDto_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **certificatePostDto** | [**CertificatePostDto**](../models/CertificatePostDto.md) |  |  |

### Return type

[**CertificateDto**](../models/CertificateDto.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

