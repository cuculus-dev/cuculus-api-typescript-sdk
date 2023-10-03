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
  CreatePost,
  PostResponse,
  User,
} from '../models/index';
import {
    CreatePostFromJSON,
    CreatePostToJSON,
    PostResponseFromJSON,
    PostResponseToJSON,
    UserFromJSON,
    UserToJSON,
} from '../models/index';

export interface CreateFavoriteRequest {
    id: string;
}

export interface CreatePostRequest {
    createPost: CreatePost;
}

export interface CreateRepostRequest {
    id: string;
}

export interface DeleteFavoriteRequest {
    id: string;
}

export interface DeletePostRequest {
    id: string;
}

export interface DeleteRepostRequest {
    id: string;
}

export interface GetFavoritedByRequest {
    id: string;
}

export interface GetPostRequest {
    id: string;
}

export interface GetRepostedByRequest {
    id: string;
}

/**
 * 
 */
export class PostsApi extends runtime.BaseAPI {

    /**
     * お気に入り登録
     */
    async createFavoriteRaw(requestParameters: CreateFavoriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createFavorite.');
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
            path: `/v0/posts/{id}/favorite`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostResponseFromJSON(jsonValue));
    }

    /**
     * お気に入り登録
     */
    async createFavorite(requestParameters: CreateFavoriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostResponse> {
        const response = await this.createFavoriteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 引用ポスト、ポスト、リプライに対応(予定)
     */
    async createPostRaw(requestParameters: CreatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostResponse>> {
        if (requestParameters.createPost === null || requestParameters.createPost === undefined) {
            throw new runtime.RequiredError('createPost','Required parameter requestParameters.createPost was null or undefined when calling createPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v0/posts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreatePostToJSON(requestParameters.createPost),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostResponseFromJSON(jsonValue));
    }

    /**
     * 引用ポスト、ポスト、リプライに対応(予定)
     */
    async createPost(requestParameters: CreatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostResponse> {
        const response = await this.createPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * リポスト
     */
    async createRepostRaw(requestParameters: CreateRepostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createRepost.');
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
            path: `/v0/posts/{id}/repost`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostResponseFromJSON(jsonValue));
    }

    /**
     * リポスト
     */
    async createRepost(requestParameters: CreateRepostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostResponse> {
        const response = await this.createRepostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * お気に入り登録解除
     */
    async deleteFavoriteRaw(requestParameters: DeleteFavoriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteFavorite.');
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
            path: `/v0/posts/{id}/favorite`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostResponseFromJSON(jsonValue));
    }

    /**
     * お気に入り登録解除
     */
    async deleteFavorite(requestParameters: DeleteFavoriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostResponse> {
        const response = await this.deleteFavoriteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Postの削除
     */
    async deletePostRaw(requestParameters: DeletePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deletePost.');
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
            path: `/v0/posts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Postの削除
     */
    async deletePost(requestParameters: DeletePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePostRaw(requestParameters, initOverrides);
    }

    /**
     * リポスト解除
     */
    async deleteRepostRaw(requestParameters: DeleteRepostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteRepost.');
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
            path: `/v0/posts/{id}/repost`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostResponseFromJSON(jsonValue));
    }

    /**
     * リポスト解除
     */
    async deleteRepost(requestParameters: DeleteRepostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostResponse> {
        const response = await this.deleteRepostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ポストIDからお気に入りしたアカウント一覧を返す
     */
    async getFavoritedByRaw(requestParameters: GetFavoritedByRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<User>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getFavoritedBy.');
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
            path: `/v0/posts/{id}/favorited_by`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

    /**
     * ポストIDからお気に入りしたアカウント一覧を返す
     */
    async getFavoritedBy(requestParameters: GetFavoritedByRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<User>> {
        const response = await this.getFavoritedByRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ポストIDからポストを取得する(認証は任意)
     */
    async getPostRaw(requestParameters: GetPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getPost.');
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
            path: `/v0/posts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostResponseFromJSON(jsonValue));
    }

    /**
     * ポストIDからポストを取得する(認証は任意)
     */
    async getPost(requestParameters: GetPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostResponse> {
        const response = await this.getPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ポストIDからリポストしたアカウント一覧を返す
     */
    async getRepostedByRaw(requestParameters: GetRepostedByRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<User>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getRepostedBy.');
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
            path: `/v0/posts/{id}/reposted_by`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

    /**
     * ポストIDからリポストしたアカウント一覧を返す
     */
    async getRepostedBy(requestParameters: GetRepostedByRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<User>> {
        const response = await this.getRepostedByRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
