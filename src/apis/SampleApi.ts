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


import * as runtime from '../runtime';

/**
 * 
 */
export class SampleApi extends runtime.BaseAPI {

    /**
     * 
     */
    async getHelloRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v0/sample`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * 
     */
    async getHello(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getHelloRaw(initOverrides);
        return await response.value();
    }

}
