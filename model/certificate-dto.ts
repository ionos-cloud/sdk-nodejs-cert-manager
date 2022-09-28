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


import { CertificatePropertiesDto } from './certificate-properties-dto';
import { ResourceMetadataDto } from './resource-metadata-dto';

/**
 * The certificate information.
 * @export
 * @interface CertificateDto
 */
export interface CertificateDto {

    /**
     * The certificate ID.
     * @type {string}
     * @memberof CertificateDto
     */
    id?: string;

    /**
     * The resource type.
     * @type {string}
     * @memberof CertificateDto
     */
    type?: string;

    /**
     * The URL to the object representation (absolute path).
     * @type {string}
     * @memberof CertificateDto
     */
    href?: string;

    /**
     * 
     * @type {ResourceMetadataDto}
     * @memberof CertificateDto
     */
    metadata?: ResourceMetadataDto;

    /**
     * 
     * @type {CertificatePropertiesDto}
     * @memberof CertificateDto
     */
    properties?: CertificatePropertiesDto;
}

