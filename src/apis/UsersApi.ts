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


import * as runtime from '../runtime';
import type {
  User,
  UserPost,
} from '../models/index';
import {
    UserFromJSON,
    UserToJSON,
    UserPostFromJSON,
    UserPostToJSON,
} from '../models/index';

export interface CreateFollowRequest {
    id: number;
}

export interface DeleteFollowRequest {
    id: number;
}

export interface GetUserByIdRequest {
    id: number;
}

export interface GetUserByUsernameRequest {
    username: string;
}

export interface GetUserFollowersRequest {
    id: number;
}

export interface GetUserFollowingRequest {
    id: number;
}

export interface GetUserPostsRequest {
    id: number;
    maxId?: string;
    sinceId?: string;
    minId?: string;
    limit?: number;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * ユーザーIDをフォローする
     */
    async createFollowRaw(requestParameters: CreateFollowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createFollow.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v0/users/{id}/follow`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * ユーザーIDをフォローする
     */
    async createFollow(requestParameters: CreateFollowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.createFollowRaw(requestParameters, initOverrides);
    }

    /**
     * ユーザーIDをフォロー解除する
     */
    async deleteFollowRaw(requestParameters: DeleteFollowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteFollow.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v0/users/{id}/follow`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * ユーザーIDをフォロー解除する
     */
    async deleteFollow(requestParameters: DeleteFollowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteFollowRaw(requestParameters, initOverrides);
    }

    /**
     * 自身の情報を返す
     */
    async getMeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v0/users/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * 自身の情報を返す
     */
    async getMe(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.getMeRaw(initOverrides);
        return await response.value();
    }

    /**
     * ユーザーIDからユーザーを取得する
     */
    async getUserByIdRaw(requestParameters: GetUserByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getUserById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v0/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * ユーザーIDからユーザーを取得する
     */
    async getUserById(requestParameters: GetUserByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.getUserByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ユーザー名からユーザーを取得する
     */
    async getUserByUsernameRaw(requestParameters: GetUserByUsernameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling getUserByUsername.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v0/users/by/username/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * ユーザー名からユーザーを取得する
     */
    async getUserByUsername(requestParameters: GetUserByUsernameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.getUserByUsernameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ユーザーIDからフォロワーを取得する
     */
    async getUserFollowersRaw(requestParameters: GetUserFollowersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<User>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getUserFollowers.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v0/users/{id}/followers`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

    /**
     * ユーザーIDからフォロワーを取得する
     */
    async getUserFollowers(requestParameters: GetUserFollowersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<User>> {
        const response = await this.getUserFollowersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ユーザーIDからフォローを取得する
     */
    async getUserFollowingRaw(requestParameters: GetUserFollowingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<User>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getUserFollowing.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v0/users/{id}/following`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

    /**
     * ユーザーIDからフォローを取得する
     */
    async getUserFollowing(requestParameters: GetUserFollowingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<User>> {
        const response = await this.getUserFollowingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ユーザーIDから投稿を取得する
     */
    async getUserPostsRaw(requestParameters: GetUserPostsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UserPost>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getUserPosts.');
        }

        const queryParameters: any = {};

        if (requestParameters.maxId !== undefined) {
            queryParameters['max_id'] = requestParameters.maxId;
        }

        if (requestParameters.sinceId !== undefined) {
            queryParameters['since_id'] = requestParameters.sinceId;
        }

        if (requestParameters.minId !== undefined) {
            queryParameters['min_id'] = requestParameters.minId;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v0/users/{id}/posts`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserPostFromJSON));
    }

    /**
     * ユーザーIDから投稿を取得する
     */
    async getUserPosts(requestParameters: GetUserPostsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UserPost>> {
        const response = await this.getUserPostsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
