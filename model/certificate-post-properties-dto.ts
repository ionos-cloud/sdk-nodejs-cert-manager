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



/**
 * 
 * @export
 * @interface CertificatePostPropertiesDto
 */
export interface CertificatePostPropertiesDto {

    /**
     * The certificate name.
     * @type {string}
     * @memberof CertificatePostPropertiesDto
     */
    name: string;

    /**
     * The certificate body.
     * @type {string}
     * @memberof CertificatePostPropertiesDto
     */
    certificate: string;

    /**
     * The certificate chain.
     * @type {string}
     * @memberof CertificatePostPropertiesDto
     */
    certificateChain: string;

    /**
     * The RSA private key is used for authentication and symmetric key exchange when establishing an SSL session. It is a part of the public key infrastructure generally used with SSL certificates.
     * @type {string}
     * @memberof CertificatePostPropertiesDto
     */
    privateKey: string;
}


