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
import type { ATProtocolPost } from './ATProtocolPost';
import {
    ATProtocolPostFromJSON,
    ATProtocolPostFromJSONTyped,
    ATProtocolPostToJSON,
} from './ATProtocolPost';
import type { ActivityPubPost } from './ActivityPubPost';
import {
    ActivityPubPostFromJSON,
    ActivityPubPostFromJSONTyped,
    ActivityPubPostToJSON,
} from './ActivityPubPost';
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
     * 投稿ID
     * @type {string}
     * @memberof Post
     */
    id: string;
    /**
     * リポスト|引用元ID|オリジナルには含まれません。
     * @type {string}
     * @memberof Post
     */
    originalPostId?: string;
    /**
     * リプライ先ID|リプライでない場合は含まれません。
     * @type {string}
     * @memberof Post
     */
    replyToPostId?: string;
    /**
     * 
     * @type {User}
     * @memberof Post
     */
    author: User;
    /**
     * 本文|リポストの場合はUndefinedになります。
     * @type {string}
     * @memberof Post
     */
    text?: string;
    /**
     * 
     * @type {Date}
     * @memberof Post
     */
    postedAt: Date;
    /**
     * リポスト数
     * @type {number}
     * @memberof Post
     */
    repostCount: number;
    /**
     * お気に入り数
     * @type {number}
     * @memberof Post
     */
    favoriteCount: number;
    /**
     * 
     * @type {ActivityPubPost}
     * @memberof Post
     */
    activityPub?: ActivityPubPost;
    /**
     * 
     * @type {ATProtocolPost}
     * @memberof Post
     */
    atProtocol?: ATProtocolPost;
}

/**
 * Check if a given object implements the Post interface.
 */
export function instanceOfPost(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "author" in value;
    isInstance = isInstance && "postedAt" in value;
    isInstance = isInstance && "repostCount" in value;
    isInstance = isInstance && "favoriteCount" in value;

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
        'originalPostId': !exists(json, 'original_post_id') ? undefined : json['original_post_id'],
        'replyToPostId': !exists(json, 'reply_to_post_id') ? undefined : json['reply_to_post_id'],
        'author': UserFromJSON(json['author']),
        'text': !exists(json, 'text') ? undefined : json['text'],
        'postedAt': (new Date(json['posted_at'])),
        'repostCount': json['repost_count'],
        'favoriteCount': json['favorite_count'],
        'activityPub': !exists(json, 'activity_pub') ? undefined : ActivityPubPostFromJSON(json['activity_pub']),
        'atProtocol': !exists(json, 'at_protocol') ? undefined : ATProtocolPostFromJSON(json['at_protocol']),
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
        'repost_count': value.repostCount,
        'favorite_count': value.favoriteCount,
        'activity_pub': ActivityPubPostToJSON(value.activityPub),
        'at_protocol': ATProtocolPostToJSON(value.atProtocol),
    };
}

