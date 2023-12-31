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
 * @interface UserInvitations
 */
export interface UserInvitations {
    /**
     * 発行できる招待コードの残数
     * @type {number}
     * @memberof UserInvitations
     */
    remainingInvitations: number;
    /**
     * 自分が発行した招待コード一覧
     * @type {Array<Invitation>}
     * @memberof UserInvitations
     */
    invitations: Array<Invitation>;
}

/**
 * Check if a given object implements the UserInvitations interface.
 */
export function instanceOfUserInvitations(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "remainingInvitations" in value;
    isInstance = isInstance && "invitations" in value;

    return isInstance;
}

export function UserInvitationsFromJSON(json: any): UserInvitations {
    return UserInvitationsFromJSONTyped(json, false);
}

export function UserInvitationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInvitations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'remainingInvitations': json['remaining_invitations'],
        'invitations': ((json['invitations'] as Array<any>).map(InvitationFromJSON)),
    };
}

export function UserInvitationsToJSON(value?: UserInvitations | null): any {
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

