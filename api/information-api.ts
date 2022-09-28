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
import { ApiInfoDto } from '../model';
/**
 * InformationApi - axios parameter creator
 * @export
 */
export const InformationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves the service API information.
         * @summary Get the Service API Information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/certificatemanager`;
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
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
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
         * Displays the Open API documentation in the JSON format.
         * @summary Get the Open API Documentation JSON
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJsonOpenApiSpec: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/certificatemanager/openapi.json`;
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
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
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
         * Displays the Open API documentation in the YAML format.
         * @summary Get the Open API Documentation YAML
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getYamlOpenApiSpec: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/certificatemanager/openapi.yaml`;
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
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
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
    }
};

/**
 * InformationApi - functional programming interface
 * @export
 */
export const InformationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves the service API information.
         * @summary Get the Service API Information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInfo(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiInfoDto>> {
            const axiosArgs = await InformationApiAxiosParamCreator(configuration).getInfo(options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * Displays the Open API documentation in the JSON format.
         * @summary Get the Open API Documentation JSON
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJsonOpenApiSpec(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const axiosArgs = await InformationApiAxiosParamCreator(configuration).getJsonOpenApiSpec(options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * Displays the Open API documentation in the YAML format.
         * @summary Get the Open API Documentation YAML
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getYamlOpenApiSpec(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const axiosArgs = await InformationApiAxiosParamCreator(configuration).getYamlOpenApiSpec(options);
            return runRequest(axiosArgs, configuration);
        },
    }
};

/**
 * InformationApi - factory interface
 * @export
 */
export const InformationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves the service API information.
         * @summary Get the Service API Information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo(options?: any): AxiosPromise<ApiInfoDto> {
            return InformationApiFp(configuration).getInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * Displays the Open API documentation in the JSON format.
         * @summary Get the Open API Documentation JSON
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJsonOpenApiSpec(options?: any): AxiosPromise<any> {
            return InformationApiFp(configuration).getJsonOpenApiSpec(options).then((request) => request(axios, basePath));
        },
        /**
         * Displays the Open API documentation in the YAML format.
         * @summary Get the Open API Documentation YAML
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getYamlOpenApiSpec(options?: any): AxiosPromise<any> {
            return InformationApiFp(configuration).getYamlOpenApiSpec(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * InformationApi - object-oriented interface
 * @export
 * @class InformationApi
 * @extends {BaseAPI}
 */
export class InformationApi extends BaseAPI {
    /**
     * Retrieves the service API information.
     * @summary Get the Service API Information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InformationApi
     */
    public getInfo(options?: any) {
        return InformationApiFp(this.configuration).getInfo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Displays the Open API documentation in the JSON format.
     * @summary Get the Open API Documentation JSON
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InformationApi
     */
    public getJsonOpenApiSpec(options?: any) {
        return InformationApiFp(this.configuration).getJsonOpenApiSpec(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Displays the Open API documentation in the YAML format.
     * @summary Get the Open API Documentation YAML
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InformationApi
     */
    public getYamlOpenApiSpec(options?: any) {
        return InformationApiFp(this.configuration).getYamlOpenApiSpec(options).then((request) => request(this.axios, this.basePath));
    }
}
