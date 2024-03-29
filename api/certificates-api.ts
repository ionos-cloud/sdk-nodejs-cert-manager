/* tslint:disable */
/* eslint-disable */
/**
 * Certificate Manager Service API
 * Using the Certificate Manager Service, you can conveniently provision and manage SSL certificates with IONOS services and your internal connected resources. For the [Application Load Balancer](https://api.ionos.com/docs/cloud/v6/#Application-Load-Balancers-get-datacenters-datacenterId-applicationloadbalancers), you usually need a certificate to encrypt your HTTPS traffic.  The service provides the basic functions of uploading and deleting your certificates for this purpose.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration, DEFAULT_MAX_RETRIES, DEFAULT_MAX_WAIT_TIME } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, backOff, runRequest } from '../base';
// @ts-ignore
import { CertificateCollectionDto } from '../model';
// @ts-ignore
import { CertificateDto } from '../model';
// @ts-ignore
import { CertificatePatchDto } from '../model';
// @ts-ignore
import { CertificatePostDto } from '../model';
/**
 * CertificatesApi - axios parameter creator
 * @export
 */
export const CertificatesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes a certificate specified by its ID.
         * @summary Delete a Certificate by ID
         * @param {string} certificateId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificatesDelete: async (certificateId: string, options: any = {}): Promise<RequestArgs> => {
            if (certificateId === null || certificateId === undefined) {
                throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling certificatesDelete.');
            }
            const localVarPath = `/certificatemanager/certificates/{certificateId}`
                .replace(`{${"certificateId"}}`, encodeURIComponent(String(certificateId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }

            // authentication tokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves all available certificates.
         * @summary Get Certificates
         * @param {string} [offset] \&#39;Limit\&#39; and \&#39;Offset\&#39; are optional; you can use these filter parameters to retrieve only part of the results obtained by a request.  Offset is the first element (from the complete list of elements) to be included in the response.
         * @param {string} [limit] \&#39;Limit\&#39; and \&#39;Offset\&#39; are optional; you can use these filter parameters to retrieve only part of the results of a query.  If both \&#39;Offset\&#39; and \&#39;Limit\&#39;are specified, the offset lines are skipped before counting the returned limit lines.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificatesGet: async (offset?: string, limit?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/certificatemanager/certificates`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }

            // authentication tokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarApiKeyValue;
            }

            if ((offset === undefined) && (configuration !== undefined)) {
                offset = configuration.getDefaultParamValue('offset');
            }
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if ((limit === undefined) && (configuration !== undefined)) {
                limit = configuration.getDefaultParamValue('limit');
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a certificate specified by its ID.
         * @summary Get a Certificate by ID
         * @param {string} certificateId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificatesGetById: async (certificateId: string, options: any = {}): Promise<RequestArgs> => {
            if (certificateId === null || certificateId === undefined) {
                throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling certificatesGetById.');
            }
            const localVarPath = `/certificatemanager/certificates/{certificateId}`
                .replace(`{${"certificateId"}}`, encodeURIComponent(String(certificateId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }

            // authentication tokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the name of the specified certificate.
         * @summary Update a Certificate Name by ID
         * @param {string} certificateId 
         * @param {CertificatePatchDto} certificatePatchDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificatesPatch: async (certificateId: string, certificatePatchDto: CertificatePatchDto, options: any = {}): Promise<RequestArgs> => {
            if (certificateId === null || certificateId === undefined) {
                throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling certificatesPatch.');
            }
            if (certificatePatchDto === null || certificatePatchDto === undefined) {
                throw new RequiredError('certificatePatchDto','Required parameter certificatePatchDto was null or undefined when calling certificatesPatch.');
            }
            const localVarPath = `/certificatemanager/certificates/{certificateId}`
                .replace(`{${"certificateId"}}`, encodeURIComponent(String(certificateId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }

            // authentication tokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof certificatePatchDto !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(certificatePatchDto !== undefined ? certificatePatchDto : {})
                : (certificatePatchDto || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds a new PEM (Privacy Enhanced Mail) file that is used to store SSL certificates and their associated private keys.
         * @summary Add a New Certificate
         * @param {CertificatePostDto} certificatePostDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificatesPost: async (certificatePostDto: CertificatePostDto, options: any = {}): Promise<RequestArgs> => {
            if (certificatePostDto === null || certificatePostDto === undefined) {
                throw new RequiredError('certificatePostDto','Required parameter certificatePostDto was null or undefined when calling certificatesPost.');
            }
            const localVarPath = `/certificatemanager/certificates`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }

            // authentication tokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof certificatePostDto !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(certificatePostDto !== undefined ? certificatePostDto : {})
                : (certificatePostDto || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CertificatesApi - functional programming interface
 * @export
 */
export const CertificatesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Deletes a certificate specified by its ID.
         * @summary Delete a Certificate by ID
         * @param {string} certificateId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async certificatesDelete(certificateId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const axiosArgs = await CertificatesApiAxiosParamCreator(configuration).certificatesDelete(certificateId, options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * Retrieves all available certificates.
         * @summary Get Certificates
         * @param {string} [offset] \&#39;Limit\&#39; and \&#39;Offset\&#39; are optional; you can use these filter parameters to retrieve only part of the results obtained by a request.  Offset is the first element (from the complete list of elements) to be included in the response.
         * @param {string} [limit] \&#39;Limit\&#39; and \&#39;Offset\&#39; are optional; you can use these filter parameters to retrieve only part of the results of a query.  If both \&#39;Offset\&#39; and \&#39;Limit\&#39;are specified, the offset lines are skipped before counting the returned limit lines.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async certificatesGet(offset?: string, limit?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CertificateCollectionDto>> {
            const axiosArgs = await CertificatesApiAxiosParamCreator(configuration).certificatesGet(offset, limit, options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * Retrieves a certificate specified by its ID.
         * @summary Get a Certificate by ID
         * @param {string} certificateId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async certificatesGetById(certificateId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CertificateDto>> {
            const axiosArgs = await CertificatesApiAxiosParamCreator(configuration).certificatesGetById(certificateId, options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * Updates the name of the specified certificate.
         * @summary Update a Certificate Name by ID
         * @param {string} certificateId 
         * @param {CertificatePatchDto} certificatePatchDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async certificatesPatch(certificateId: string, certificatePatchDto: CertificatePatchDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CertificateDto>> {
            const axiosArgs = await CertificatesApiAxiosParamCreator(configuration).certificatesPatch(certificateId, certificatePatchDto, options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * Adds a new PEM (Privacy Enhanced Mail) file that is used to store SSL certificates and their associated private keys.
         * @summary Add a New Certificate
         * @param {CertificatePostDto} certificatePostDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async certificatesPost(certificatePostDto: CertificatePostDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CertificateDto>> {
            const axiosArgs = await CertificatesApiAxiosParamCreator(configuration).certificatesPost(certificatePostDto, options);
            return runRequest(axiosArgs, configuration);
        },
    }
};

/**
 * CertificatesApi - factory interface
 * @export
 */
export const CertificatesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Deletes a certificate specified by its ID.
         * @summary Delete a Certificate by ID
         * @param {string} certificateId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificatesDelete(certificateId: string, options?: any): AxiosPromise<void> {
            return CertificatesApiFp(configuration).certificatesDelete(certificateId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves all available certificates.
         * @summary Get Certificates
         * @param {string} [offset] \&#39;Limit\&#39; and \&#39;Offset\&#39; are optional; you can use these filter parameters to retrieve only part of the results obtained by a request.  Offset is the first element (from the complete list of elements) to be included in the response.
         * @param {string} [limit] \&#39;Limit\&#39; and \&#39;Offset\&#39; are optional; you can use these filter parameters to retrieve only part of the results of a query.  If both \&#39;Offset\&#39; and \&#39;Limit\&#39;are specified, the offset lines are skipped before counting the returned limit lines.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificatesGet(offset?: string, limit?: string, options?: any): AxiosPromise<CertificateCollectionDto> {
            return CertificatesApiFp(configuration).certificatesGet(offset, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a certificate specified by its ID.
         * @summary Get a Certificate by ID
         * @param {string} certificateId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificatesGetById(certificateId: string, options?: any): AxiosPromise<CertificateDto> {
            return CertificatesApiFp(configuration).certificatesGetById(certificateId, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the name of the specified certificate.
         * @summary Update a Certificate Name by ID
         * @param {string} certificateId 
         * @param {CertificatePatchDto} certificatePatchDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificatesPatch(certificateId: string, certificatePatchDto: CertificatePatchDto, options?: any): AxiosPromise<CertificateDto> {
            return CertificatesApiFp(configuration).certificatesPatch(certificateId, certificatePatchDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds a new PEM (Privacy Enhanced Mail) file that is used to store SSL certificates and their associated private keys.
         * @summary Add a New Certificate
         * @param {CertificatePostDto} certificatePostDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        certificatesPost(certificatePostDto: CertificatePostDto, options?: any): AxiosPromise<CertificateDto> {
            return CertificatesApiFp(configuration).certificatesPost(certificatePostDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for certificatesDelete operation in CertificatesApi.
 * @export
 * @interface CertificatesApiCertificatesDeleteRequest
 */
export interface CertificatesApiCertificatesDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof CertificatesApiCertificatesDelete
     */
    readonly certificateId: string
}

/**
 * Request parameters for certificatesGet operation in CertificatesApi.
 * @export
 * @interface CertificatesApiCertificatesGetRequest
 */
export interface CertificatesApiCertificatesGetRequest {
    /**
     * \&#39;Limit\&#39; and \&#39;Offset\&#39; are optional; you can use these filter parameters to retrieve only part of the results obtained by a request.  Offset is the first element (from the complete list of elements) to be included in the response.
     * @type {string}
     * @memberof CertificatesApiCertificatesGet
     */
    readonly offset?: string

    /**
     * \&#39;Limit\&#39; and \&#39;Offset\&#39; are optional; you can use these filter parameters to retrieve only part of the results of a query.  If both \&#39;Offset\&#39; and \&#39;Limit\&#39;are specified, the offset lines are skipped before counting the returned limit lines.
     * @type {string}
     * @memberof CertificatesApiCertificatesGet
     */
    readonly limit?: string
}

/**
 * Request parameters for certificatesGetById operation in CertificatesApi.
 * @export
 * @interface CertificatesApiCertificatesGetByIdRequest
 */
export interface CertificatesApiCertificatesGetByIdRequest {
    /**
     * 
     * @type {string}
     * @memberof CertificatesApiCertificatesGetById
     */
    readonly certificateId: string
}

/**
 * Request parameters for certificatesPatch operation in CertificatesApi.
 * @export
 * @interface CertificatesApiCertificatesPatchRequest
 */
export interface CertificatesApiCertificatesPatchRequest {
    /**
     * 
     * @type {string}
     * @memberof CertificatesApiCertificatesPatch
     */
    readonly certificateId: string

    /**
     * 
     * @type {CertificatePatchDto}
     * @memberof CertificatesApiCertificatesPatch
     */
    readonly certificatePatchDto: CertificatePatchDto
}

/**
 * Request parameters for certificatesPost operation in CertificatesApi.
 * @export
 * @interface CertificatesApiCertificatesPostRequest
 */
export interface CertificatesApiCertificatesPostRequest {
    /**
     * 
     * @type {CertificatePostDto}
     * @memberof CertificatesApiCertificatesPost
     */
    readonly certificatePostDto: CertificatePostDto
}

/**
 * CertificatesApi - object-oriented interface
 * @export
 * @class CertificatesApi
 * @extends {BaseAPI}
 */
export class CertificatesApi extends BaseAPI {
    /**
     * Deletes a certificate specified by its ID.
     * @summary Delete a Certificate by ID
     * @param {CertificatesApiCertificatesDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CertificatesApi
     */
    public certificatesDelete(requestParameters: CertificatesApiCertificatesDeleteRequest, options?: any) {
        return CertificatesApiFp(this.configuration).certificatesDelete(requestParameters.certificateId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves all available certificates.
     * @summary Get Certificates
     * @param {CertificatesApiCertificatesGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CertificatesApi
     */
    public certificatesGet(requestParameters: CertificatesApiCertificatesGetRequest = {}, options?: any) {
        return CertificatesApiFp(this.configuration).certificatesGet(requestParameters.offset, requestParameters.limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a certificate specified by its ID.
     * @summary Get a Certificate by ID
     * @param {CertificatesApiCertificatesGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CertificatesApi
     */
    public certificatesGetById(requestParameters: CertificatesApiCertificatesGetByIdRequest, options?: any) {
        return CertificatesApiFp(this.configuration).certificatesGetById(requestParameters.certificateId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the name of the specified certificate.
     * @summary Update a Certificate Name by ID
     * @param {CertificatesApiCertificatesPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CertificatesApi
     */
    public certificatesPatch(requestParameters: CertificatesApiCertificatesPatchRequest, options?: any) {
        return CertificatesApiFp(this.configuration).certificatesPatch(requestParameters.certificateId, requestParameters.certificatePatchDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds a new PEM (Privacy Enhanced Mail) file that is used to store SSL certificates and their associated private keys.
     * @summary Add a New Certificate
     * @param {CertificatesApiCertificatesPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CertificatesApi
     */
    public certificatesPost(requestParameters: CertificatesApiCertificatesPostRequest, options?: any) {
        return CertificatesApiFp(this.configuration).certificatesPost(requestParameters.certificatePostDto, options).then((request) => request(this.axios, this.basePath));
    }
}
