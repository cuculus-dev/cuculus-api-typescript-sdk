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
  UserPost,
} from '../models/index';
import {
    UserPostFromJSON,
    UserPostToJSON,
} from '../models/index';

export interface GetHomeTimelineRequest {
    maxId?: string;
    sinceId?: string;
    minId?: string;
    limit?: number;
}

export interface GetPublicTimelineRequest {
    maxId?: string;
    sinceId?: string;
    minId?: string;
    limit?: number;
}

/**
 * 
 */
export class TimelinesApi extends runtime.BaseAPI {

    /**
     * ホームタイムラインの取得
     */
    async getHomeTimelineRaw(requestParameters: GetHomeTimelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UserPost>>> {
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
            path: `/v0/timelines/home`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserPostFromJSON));
    }

    /**
     * ホームタイムラインの取得
     */
    async getHomeTimeline(requestParameters: GetHomeTimelineRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UserPost>> {
        const response = await this.getHomeTimelineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 全体タイムラインの取得(廃止予定)
     */
    async getPublicTimelineRaw(requestParameters: GetPublicTimelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UserPost>>> {
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
            path: `/v0/timelines/public`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserPostFromJSON));
    }

    /**
     * 全体タイムラインの取得(廃止予定)
     */
    async getPublicTimeline(requestParameters: GetPublicTimelineRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UserPost>> {
        const response = await this.getPublicTimelineRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
