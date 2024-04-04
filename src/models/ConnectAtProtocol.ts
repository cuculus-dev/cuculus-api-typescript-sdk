/* tslint:disable */
/* eslint-disable */
/**
 * Cuculus API
 * The Cuculus API description
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ConnectAtProtocol
 */
export interface ConnectAtProtocol {
    /**
     * 
     * @type {string}
     * @memberof ConnectAtProtocol
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectAtProtocol
     */
    appPassword: string;
}

/**
 * Check if a given object implements the ConnectAtProtocol interface.
 */
export function instanceOfConnectAtProtocol(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "appPassword" in value;

    return isInstance;
}

export function ConnectAtProtocolFromJSON(json: any): ConnectAtProtocol {
    return ConnectAtProtocolFromJSONTyped(json, false);
}

export function ConnectAtProtocolFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectAtProtocol {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'appPassword': json['app_password'],
    };
}

export function ConnectAtProtocolToJSON(value?: ConnectAtProtocol | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'app_password': value.appPassword,
    };
}
