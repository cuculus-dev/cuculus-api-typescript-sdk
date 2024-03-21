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
 * @interface HealthControllerCheck200ResponseInfoValue
 */
export interface HealthControllerCheck200ResponseInfoValue {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof HealthControllerCheck200ResponseInfoValue
     */
    status: string;
}

/**
 * Check if a given object implements the HealthControllerCheck200ResponseInfoValue interface.
 */
export function instanceOfHealthControllerCheck200ResponseInfoValue(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function HealthControllerCheck200ResponseInfoValueFromJSON(json: any): HealthControllerCheck200ResponseInfoValue {
    return HealthControllerCheck200ResponseInfoValueFromJSONTyped(json, false);
}

export function HealthControllerCheck200ResponseInfoValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthControllerCheck200ResponseInfoValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
            ...json,
        'status': json['status'],
    };
}

export function HealthControllerCheck200ResponseInfoValueToJSON(value?: HealthControllerCheck200ResponseInfoValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
            ...value,
        'status': value.status,
    };
}

