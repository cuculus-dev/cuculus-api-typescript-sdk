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
 * @interface SystemSettings
 */
export interface SystemSettings {
    /**
     * 招待制ON/OFF
     * @type {boolean}
     * @memberof SystemSettings
     */
    invitationOnly: boolean;
    /**
     * メンテナンス中
     * @type {boolean}
     * @memberof SystemSettings
     */
    maintenance: boolean;
}

/**
 * Check if a given object implements the SystemSettings interface.
 */
export function instanceOfSystemSettings(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "invitationOnly" in value;
    isInstance = isInstance && "maintenance" in value;

    return isInstance;
}

export function SystemSettingsFromJSON(json: any): SystemSettings {
    return SystemSettingsFromJSONTyped(json, false);
}

export function SystemSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invitationOnly': json['invitation_only'],
        'maintenance': json['maintenance'],
    };
}

export function SystemSettingsToJSON(value?: SystemSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invitation_only': value.invitationOnly,
        'maintenance': value.maintenance,
    };
}

