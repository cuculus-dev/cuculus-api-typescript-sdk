/* tslint:disable */
/* eslint-disable */
/**
 * Cuculus API
 * The Cuculus API description
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface VerifyCodeRequest
 */
export interface VerifyCodeRequest {
    /**
     * メールアドレス
     * @type {string}
     * @memberof VerifyCodeRequest
     */
    email: string;
    /**
     * 認証コード
     * @type {string}
     * @memberof VerifyCodeRequest
     */
    code: string;
}

/**
 * Check if a given object implements the VerifyCodeRequest interface.
 */
export function instanceOfVerifyCodeRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function VerifyCodeRequestFromJSON(json: any): VerifyCodeRequest {
    return VerifyCodeRequestFromJSONTyped(json, false);
}

export function VerifyCodeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyCodeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'code': json['code'],
    };
}

export function VerifyCodeRequestToJSON(value?: VerifyCodeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'code': value.code,
    };
}
