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
 * @interface Relationship
 */
export interface Relationship {
    /**
     * 
     * @type {number}
     * @memberof Relationship
     */
    id: number;
    /**
     * フォロー中
     * @type {boolean}
     * @memberof Relationship
     */
    following: boolean;
    /**
     * フォローリクエスト中
     * @type {boolean}
     * @memberof Relationship
     */
    followRequested: boolean;
}

/**
 * Check if a given object implements the Relationship interface.
 */
export function instanceOfRelationship(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "following" in value;
    isInstance = isInstance && "followRequested" in value;

    return isInstance;
}

export function RelationshipFromJSON(json: any): Relationship {
    return RelationshipFromJSONTyped(json, false);
}

export function RelationshipFromJSONTyped(json: any, ignoreDiscriminator: boolean): Relationship {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'following': json['following'],
        'followRequested': json['follow_requested'],
    };
}

export function RelationshipToJSON(value?: Relationship | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'following': value.following,
        'follow_requested': value.followRequested,
    };
}
