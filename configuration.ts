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


/* maximum number of retries for 502, 503, 504 or 429 statuses */
export const DEFAULT_MAX_RETRIES = 3;

/* maximum wait time between retries in milliseconds */
export const DEFAULT_MAX_WAIT_TIME = 10000;

export interface ConfigurationParameters {
    apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
    username?: string;
    password?: string;
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    basePath?: string;
    baseOptions?: any;
    formDataCtor?: new () => any;
	debug?: boolean;
}

export class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    username?: string;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    password?: string;
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePath?: string;
    /**
     * base options for axios calls
     *
     * @type {any}
     * @memberof Configuration
     */
    baseOptions?: any;
    /**
     * The FormData constructor that will be used to create multipart form data
     * requests. You can inject this here so that execution environments that
     * do not support the FormData class can still run the generated client.
     *
     * @type {new () => FormData}
     */
    formDataCtor?: new () => any;

    /**
     * Default values for parameters such as pretty and depth
     * @type {Object.<string, any>}
     */
    defaultParamValues: Record<string, any>;

    /**
     * Maximum retries in case a request fails with 
     * 502, 503, 504 or 429.
     */
    maxRetries: number;

    /**
     * Maximum wait time between retries, in milliseconds
     */
    maxWaitTime: number;

    /**
     * Debug flag
     */
    debug: boolean;

    /**
     * User Agent
     */
    userAgent: string;

    constructor(param: ConfigurationParameters = {}) {
        this.apiKey = param.apiKey;
        this.username = param.username;
        this.password = param.password;
        this.accessToken = param.accessToken;
        this.basePath = param.basePath;
        this.baseOptions = param.baseOptions;
        this.formDataCtor = param.formDataCtor;
        this.defaultParamValues = {};
        this.maxRetries = DEFAULT_MAX_RETRIES;
        this.maxWaitTime = DEFAULT_MAX_WAIT_TIME;
        this.debug = false;
        this.setUserAgent('ionos-cloud-cert-manager-node/v1.0.1');
    }

    static fromEnv(): Configuration {
        const configParams: ConfigurationParameters = {
            username: process.env.IONOS_USERNAME,
            password: process.env.IONOS_PASSWORD,
            apiKey: process.env.IONOS_TOKEN,
        }
        configParams.basePath = process.env.IONOS_API_URL || configParams.basePath
        configParams.debug = process.env.IONOS_DEBUG !== undefined
        return new Configuration(configParams)
    }

    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    public isJsonMime(mime: string): boolean {
        const jsonMime: RegExp = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }

    /**
     * Set the default value of a parameter
     * @param param - parameter name
     * @param value - default value
     * @return this
     */
    public setDefaultParamValue(param: string, value: any): this {
        this.defaultParamValues[param] = value;
        return this;
    }

    /**
     * Retrieve the default value of a parameter
     * @param param - parameter
     * @return any
     */
    public getDefaultParamValue(param: string): any {
        return this.defaultParamValues[param];
    }

    /**
     * Set the default value for the 'pretty' param.
     * @param value - default value
     * @return this
     */
    public setPretty(value: boolean): this {
        this.setDefaultParamValue('pretty', value);
        return this;
    }

    /**
     * Set the default value for the 'depth' param.
     * @param value - default value
     * @return this
     */
    public setDepth(value: number): this {
        this.setDefaultParamValue('depth', value);
        return this;
    }

    /**
     * Get the default value for the 'pretty' param
     * @return boolean | undefined
     */
    public getPretty(): boolean | undefined {
        return this.getDefaultParamValue('pretty');
    }

    /**
     * Get the default value for the 'depth' param
     * @return boolean | undefined
     */
    public getDepth(): boolean | undefined {
        return this.getDefaultParamValue('depth');
    }

    /**
     * Set the maximum number of retries in case a request
     * fails with 502, 503, 504 or 429.
     * @param max - maximum number of retries
     * @return this
     */
    public setMaxRetries(max: number): this {
        this.maxRetries = max;
        return this;
    }

    /**
     * Retrieve the maximum number of retries in case a request
     * fails with 502, 503, 504 or 429.
     * @return number
     */
    public getMaxRetries(): number {
        return this.maxRetries;
    }

    /**
     * Set the maximum wait time between retries.
     * @param value - number
     * @return this
     */
    public setMaxWaitTime(value: number): this {
        this.maxWaitTime = value;
        return this;
    }

    /**
     * Retrieve the maximum wait time between retries.
     * @return number
     */
    public getMaxWaitTime(): number {
        return this.maxWaitTime;
    }

    /**
     * Enable/disable debug messages.
     * @param debug - boolean
     * @return this
     */
    public setDebug(debug = true): this {
        this.debug = debug;
        return this;
    }

    /**
     * Determine whether debug mode is enabled or not
     * @return boolean
     */
    public isDebug(): boolean {
        return this.debug;
    }

    /**
     * Set the user agent used in requests.
     * @param userAgent - string
     * @return this
     */
    public setUserAgent(userAgent: string): this {
        this.userAgent = userAgent;
		this.baseOptions = this.baseOptions || {};
		this.baseOptions.headers = this.baseOptions.headers || {};
        this.baseOptions.headers['user-agent'] = this.userAgent;
        return this;
    }

    /**
     * Retrieve the user agent used in requests.
     * @return string
     */
    public getUserAgent(): string {
        return this.userAgent;
    }

}
