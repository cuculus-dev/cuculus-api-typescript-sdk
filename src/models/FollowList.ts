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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface FollowList
 */
export interface FollowList {
    /**
     * ユーザー一覧
     * @type {Array<User>}
     * @memberof FollowList
     */
    users: Array<User>;
    /**
     * 次ページ取得に使用するuntil
     * @type {Date}
     * @memberof FollowList
     */
    nextUntil: Date;
}

/**
 * Check if a given object implements the FollowList interface.
 */
export function instanceOfFollowList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "users" in value;
    isInstance = isInstance && "nextUntil" in value;

    return isInstance;
}

export function FollowListFromJSON(json: any): FollowList {
    return FollowListFromJSONTyped(json, false);
}

export function FollowListFromJSONTyped(json: any, ignoreDiscriminator: boolean): FollowList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'users': ((json['users'] as Array<any>).map(UserFromJSON)),
        'nextUntil': (new Date(json['next_until'])),
    };
}

export function FollowListToJSON(value?: FollowList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'users': ((value.users as Array<any>).map(UserToJSON)),
        'next_until': (value.nextUntil.toISOString()),
    };
}
