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
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     * ユーザーID or メールアドレス
     * @type {string}
     * @memberof LoginRequest
     */
    username: string;
    /**
     * パスワード
     * @type {string}
     * @memberof LoginRequest
     */
    password: string;
}

/**
 * Check if a given object implements the LoginRequest interface.
 */
export function instanceOfLoginRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function LoginRequestFromJSON(json: any): LoginRequest {
    return LoginRequestFromJSONTyped(json, false);
}

export function LoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': json['username'],
        'password': json['password'],
    };
}

export function LoginRequestToJSON(value?: LoginRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'password': value.password,
    };
}

