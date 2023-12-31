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
import type { Invitation } from './Invitation';
import {
    InvitationFromJSON,
    InvitationFromJSONTyped,
    InvitationToJSON,
} from './Invitation';

/**
 * 
 * @export
 * @interface InvitationsInfo
 */
export interface InvitationsInfo {
    /**
     * 発行できる招待コードの残数
     * @type {number}
     * @memberof InvitationsInfo
     */
    remainingInvitations: number;
    /**
     * 自分が発行した招待コード一覧
     * @type {Array<Invitation>}
     * @memberof InvitationsInfo
     */
    invitations: Array<Invitation>;
}

/**
 * Check if a given object implements the InvitationsInfo interface.
 */
export function instanceOfInvitationsInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "remainingInvitations" in value;
    isInstance = isInstance && "invitations" in value;

    return isInstance;
}

export function InvitationsInfoFromJSON(json: any): InvitationsInfo {
    return InvitationsInfoFromJSONTyped(json, false);
}

export function InvitationsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvitationsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'remainingInvitations': json['remaining_invitations'],
        'invitations': ((json['invitations'] as Array<any>).map(InvitationFromJSON)),
    };
}

export function InvitationsInfoToJSON(value?: InvitationsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'remaining_invitations': value.remainingInvitations,
        'invitations': ((value.invitations as Array<any>).map(InvitationToJSON)),
    };
}

