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
 * @interface Invitation
 */
export interface Invitation {
    /**
     * 招待コード
     * @type {string}
     * @memberof Invitation
     */
    code: string;
    /**
     * 招待コードの発行日時
     * @type {Date}
     * @memberof Invitation
     */
    issuedAt: Date;
}

/**
 * Check if a given object implements the Invitation interface.
 */
export function instanceOfInvitation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "issuedAt" in value;

    return isInstance;
}

export function InvitationFromJSON(json: any): Invitation {
    return InvitationFromJSONTyped(json, false);
}

export function InvitationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Invitation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'issuedAt': (new Date(json['issued_at'])),
    };
}

export function InvitationToJSON(value?: Invitation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'issued_at': (value.issuedAt.toISOString()),
    };
}

