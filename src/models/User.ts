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
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    username: string;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    bio: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profileImageUrl: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    _protected: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    url: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    verified: boolean;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "bio" in value;
    isInstance = isInstance && "profileImageUrl" in value;
    isInstance = isInstance && "_protected" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "verified" in value;

    return isInstance;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'username': json['username'],
        'createdAt': (new Date(json['created_at'])),
        'bio': json['bio'],
        'profileImageUrl': json['profile_image_url'],
        '_protected': json['protected'],
        'url': json['url'],
        'verified': json['verified'],
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'username': value.username,
        'created_at': (value.createdAt.toISOString()),
        'bio': value.bio,
        'profile_image_url': value.profileImageUrl,
        'protected': value._protected,
        'url': value.url,
        'verified': value.verified,
    };
}

