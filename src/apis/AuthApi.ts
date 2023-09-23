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
import type {
  AuthResponse,
  LoginRequest,
  PreUserRequest,
  TokenResponse,
  UserRequest,
  VerifyCodeRequest,
} from '../models/index';
import {
    AuthResponseFromJSON,
    AuthResponseToJSON,
    LoginRequestFromJSON,
    LoginRequestToJSON,
    PreUserRequestFromJSON,
    PreUserRequestToJSON,
    TokenResponseFromJSON,
    TokenResponseToJSON,
    UserRequestFromJSON,
    UserRequestToJSON,
    VerifyCodeRequestFromJSON,
    VerifyCodeRequestToJSON,
} from '../models/index';

export interface PostPreSignUpRequest {
    preUserRequest: PreUserRequest;
}

export interface PostSignInRequest {
    loginRequest: LoginRequest;
}

export interface PostSignUpRequest {
    userRequest: UserRequest;
}

export interface PostVerifyCodeRequest {
    verifyCodeRequest: VerifyCodeRequest;
}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI {

    /**
     * 仮登録API
     */
    async postPreSignUpRaw(requestParameters: PostPreSignUpRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.preUserRequest === null || requestParameters.preUserRequest === undefined) {
            throw new runtime.RequiredError('preUserRequest','Required parameter requestParameters.preUserRequest was null or undefined when calling postPreSignUp.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v0/auth/pre-sign-up`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PreUserRequestToJSON(requestParameters.preUserRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 仮登録API
     */
    async postPreSignUp(requestParameters: PostPreSignUpRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPreSignUpRaw(requestParameters, initOverrides);
    }

    /**
     * ログインAPI
     */
    async postSignInRaw(requestParameters: PostSignInRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthResponse>> {
        if (requestParameters.loginRequest === null || requestParameters.loginRequest === undefined) {
            throw new runtime.RequiredError('loginRequest','Required parameter requestParameters.loginRequest was null or undefined when calling postSignIn.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v0/auth/sign-in`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginRequestToJSON(requestParameters.loginRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthResponseFromJSON(jsonValue));
    }

    /**
     * ログインAPI
     */
    async postSignIn(requestParameters: PostSignInRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthResponse> {
        const response = await this.postSignInRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 本登録API
     */
    async postSignUpRaw(requestParameters: PostSignUpRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthResponse>> {
        if (requestParameters.userRequest === null || requestParameters.userRequest === undefined) {
            throw new runtime.RequiredError('userRequest','Required parameter requestParameters.userRequest was null or undefined when calling postSignUp.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v0/auth/sign-up`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserRequestToJSON(requestParameters.userRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthResponseFromJSON(jsonValue));
    }

    /**
     * 本登録API
     */
    async postSignUp(requestParameters: PostSignUpRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthResponse> {
        const response = await this.postSignUpRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * アクセストークンの再発行(現在はCookieのみ対応)
     */
    async postTokenRefreshRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TokenResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v0/auth/token/refresh`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenResponseFromJSON(jsonValue));
    }

    /**
     * アクセストークンの再発行(現在はCookieのみ対応)
     */
    async postTokenRefresh(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TokenResponse> {
        const response = await this.postTokenRefreshRaw(initOverrides);
        return await response.value();
    }

    /**
     * 認証コードの確認
     */
    async postVerifyCodeRaw(requestParameters: PostVerifyCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.verifyCodeRequest === null || requestParameters.verifyCodeRequest === undefined) {
            throw new runtime.RequiredError('verifyCodeRequest','Required parameter requestParameters.verifyCodeRequest was null or undefined when calling postVerifyCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v0/auth/verify-code`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VerifyCodeRequestToJSON(requestParameters.verifyCodeRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 認証コードの確認
     */
    async postVerifyCode(requestParameters: PostVerifyCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postVerifyCodeRaw(requestParameters, initOverrides);
    }

}