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
import type { Post } from './Post';
import {
    PostFromJSON,
    PostFromJSONTyped,
    PostToJSON,
} from './Post';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface UserPost
 */
export interface UserPost {
    /**
     * 投稿ID
     * @type {string}
     * @memberof UserPost
     */
    id: string;
    /**
     * リポスト|引用元ID|オリジナルには含まれません。
     * @type {string}
     * @memberof UserPost
     */
    originalPostId?: string;
    /**
     * リプライ先ID|リプライでない場合は含まれません。
     * @type {string}
     * @memberof UserPost
     */
    replyToPostId?: string;
    /**
     * 
     * @type {User}
     * @memberof UserPost
     */
    author: User;
    /**
     * 本文|リポストの場合はUndefinedになります。
     * @type {string}
     * @memberof UserPost
     */
    text?: string;
    /**
     * 
     * @type {Date}
     * @memberof UserPost
     */
    postedAt: Date;
    /**
     * リポスト数
     * @type {number}
     * @memberof UserPost
     */
    repostCount: number;
    /**
     * お気に入り数
     * @type {number}
     * @memberof UserPost
     */
    favoriteCount: number;
    /**
     * 
     * @type {ActivityPubPost}
     * @memberof UserPost
     */
    activityPub?: ActivityPubPost;
    /**
     * 
     * @type {ATProtocolPost}
     * @memberof UserPost
     */
    atProtocol?: ATProtocolPost;
    /**
     * 
     * @type {Post}
     * @memberof UserPost
     */
    originalPost?: Post;
    /**
     * リポスト済み
     * @type {boolean}
     * @memberof UserPost
     */
    reposted: boolean;
    /**
     * お気に入り登録済み
     * @type {boolean}
     * @memberof UserPost
     */
    favorited: boolean;
}

/**
 * Check if a given object implements the UserPost interface.
 */
export function instanceOfUserPost(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "author" in value;
    isInstance = isInstance && "postedAt" in value;
    isInstance = isInstance && "repostCount" in value;
    isInstance = isInstance && "favoriteCount" in value;
    isInstance = isInstance && "reposted" in value;
    isInstance = isInstance && "favorited" in value;

    return isInstance;
}

export function UserPostFromJSON(json: any): UserPost {
    return UserPostFromJSONTyped(json, false);
}

export function UserPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPost {
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
        'originalPost': !exists(json, 'original_post') ? undefined : PostFromJSON(json['original_post']),
        'reposted': json['reposted'],
        'favorited': json['favorited'],
    };
}

export function UserPostToJSON(value?: UserPost | null): any {
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
        'original_post': PostToJSON(value.originalPost),
        'reposted': value.reposted,
        'favorited': value.favorited,
    };
}

