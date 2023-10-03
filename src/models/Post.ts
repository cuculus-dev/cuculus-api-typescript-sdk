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
 * @interface Post
 */
export interface Post {
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    id: string;
    /**
     * リポスト|引用元ID|オリジナルには含まれません。
     * @type {string}
     * @memberof Post
     */
    originalPostId: string;
    /**
     * リプライ先ID|リプライでない場合は含まれません。
     * @type {string}
     * @memberof Post
     */
    replyToPostId: string;
    /**
     * 
     * @type {User}
     * @memberof Post
     */
    author: User;
    /**
     * 本文|空orNullの場合はRTです。
     * @type {string}
     * @memberof Post
     */
    text: string;
    /**
     * 
     * @type {Date}
     * @memberof Post
     */
    postedAt: Date;
}

/**
 * Check if a given object implements the Post interface.
 */
export function instanceOfPost(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "originalPostId" in value;
    isInstance = isInstance && "replyToPostId" in value;
    isInstance = isInstance && "author" in value;
    isInstance = isInstance && "text" in value;
    isInstance = isInstance && "postedAt" in value;

    return isInstance;
}

export function PostFromJSON(json: any): Post {
    return PostFromJSONTyped(json, false);
}

export function PostFromJSONTyped(json: any, ignoreDiscriminator: boolean): Post {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'originalPostId': json['original_post_id'],
        'replyToPostId': json['reply_to_post_id'],
        'author': UserFromJSON(json['author']),
        'text': json['text'],
        'postedAt': (new Date(json['posted_at'])),
    };
}

export function PostToJSON(value?: Post | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'original_post_id': value.originalPostId,
        'reply_to_post_id': value.replyToPostId,
        'author': UserToJSON(value.author),
        'text': value.text,
        'posted_at': (value.postedAt.toISOString()),
    };
}

