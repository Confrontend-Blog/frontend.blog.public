/* tslint:disable */
/* eslint-disable */
/**
 * Blog Article API
 * Api to manage articles
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ArticleDto
 */
export interface ArticleDto {
    /**
     * 
     * @type {string}
     * @memberof ArticleDto
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof ArticleDto
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof ArticleDto
     */
    'content': string;
    /**
     * 
     * @type {string}
     * @memberof ArticleDto
     */
    'date': string;
    /**
     * 
     * @type {string}
     * @memberof ArticleDto
     */
    'summary': string;
    /**
     * 
     * @type {string}
     * @memberof ArticleDto
     */
    'category': string;
    /**
     * 
     * @type {string}
     * @memberof ArticleDto
     */
    'author': string;
}
/**
 * 
 * @export
 * @interface ArticleSummariesResponse
 */
export interface ArticleSummariesResponse {
    /**
     * 
     * @type {Array<ArticleSummaryDto>}
     * @memberof ArticleSummariesResponse
     */
    'summaries': Array<ArticleSummaryDto>;
    /**
     * 
     * @type {number}
     * @memberof ArticleSummariesResponse
     */
    'count': number;
}
/**
 * 
 * @export
 * @interface ArticleSummaryDto
 */
export interface ArticleSummaryDto {
    /**
     * 
     * @type {string}
     * @memberof ArticleSummaryDto
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof ArticleSummaryDto
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof ArticleSummaryDto
     */
    'date': string;
    /**
     * 
     * @type {string}
     * @memberof ArticleSummaryDto
     */
    'category': string;
    /**
     * 
     * @type {string}
     * @memberof ArticleSummaryDto
     */
    'author': string;
    /**
     * 
     * @type {string}
     * @memberof ArticleSummaryDto
     */
    'summary': string;
    /**
     * 
     * @type {string}
     * @memberof ArticleSummaryDto
     */
    'slug': string;
}
/**
 * 
 * @export
 * @interface CreateArticleDto
 */
export interface CreateArticleDto {
    /**
     * 
     * @type {string}
     * @memberof CreateArticleDto
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof CreateArticleDto
     */
    'content': string;
    /**
     * 
     * @type {string}
     * @memberof CreateArticleDto
     */
    'date': string;
    /**
     * 
     * @type {string}
     * @memberof CreateArticleDto
     */
    'summary': string;
    /**
     * 
     * @type {string}
     * @memberof CreateArticleDto
     */
    'category': string;
    /**
     * 
     * @type {string}
     * @memberof CreateArticleDto
     */
    'author': string;
    /**
     * 
     * @type {string}
     * @memberof CreateArticleDto
     */
    'slug': string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateArticleDto} createArticleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        articlesControllerCreate: async (createArticleDto: CreateArticleDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createArticleDto' is not null or undefined
            assertParamExists('articlesControllerCreate', 'createArticleDto', createArticleDto)
            const localVarPath = `/articles`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createArticleDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        articlesControllerFindAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/articles`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Find all article summaries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        articlesControllerFindAllSummaries: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/articles/summaries`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        articlesControllerFindOne: async (slug: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('articlesControllerFindOne', 'slug', slug)
            const localVarPath = `/articles/{slug}`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        articlesControllerGetArticleSummary: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('articlesControllerGetArticleSummary', 'id', id)
            const localVarPath = `/articles/{id}/summary`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        articlesControllerRemove: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('articlesControllerRemove', 'id', id)
            const localVarPath = `/articles/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        articlesControllerUpdate: async (id: string, body: object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('articlesControllerUpdate', 'id', id)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('articlesControllerUpdate', 'body', body)
            const localVarPath = `/articles/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateArticleDto} createArticleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async articlesControllerCreate(createArticleDto: CreateArticleDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ArticleDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.articlesControllerCreate(createArticleDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async articlesControllerFindAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ArticleDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.articlesControllerFindAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Find all article summaries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async articlesControllerFindAllSummaries(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ArticleSummariesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.articlesControllerFindAllSummaries(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async articlesControllerFindOne(slug: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ArticleDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.articlesControllerFindOne(slug, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async articlesControllerGetArticleSummary(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ArticleSummaryDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.articlesControllerGetArticleSummary(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async articlesControllerRemove(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.articlesControllerRemove(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async articlesControllerUpdate(id: string, body: object, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ArticleDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.articlesControllerUpdate(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {CreateArticleDto} createArticleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        articlesControllerCreate(createArticleDto: CreateArticleDto, options?: any): AxiosPromise<ArticleDto> {
            return localVarFp.articlesControllerCreate(createArticleDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        articlesControllerFindAll(options?: any): AxiosPromise<Array<ArticleDto>> {
            return localVarFp.articlesControllerFindAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Find all article summaries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        articlesControllerFindAllSummaries(options?: any): AxiosPromise<ArticleSummariesResponse> {
            return localVarFp.articlesControllerFindAllSummaries(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        articlesControllerFindOne(slug: string, options?: any): AxiosPromise<ArticleDto> {
            return localVarFp.articlesControllerFindOne(slug, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        articlesControllerGetArticleSummary(id: string, options?: any): AxiosPromise<ArticleSummaryDto> {
            return localVarFp.articlesControllerGetArticleSummary(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        articlesControllerRemove(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.articlesControllerRemove(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        articlesControllerUpdate(id: string, body: object, options?: any): AxiosPromise<ArticleDto> {
            return localVarFp.articlesControllerUpdate(id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {CreateArticleDto} createArticleDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public articlesControllerCreate(createArticleDto: CreateArticleDto, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).articlesControllerCreate(createArticleDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public articlesControllerFindAll(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).articlesControllerFindAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Find all article summaries
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public articlesControllerFindAllSummaries(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).articlesControllerFindAllSummaries(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} slug 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public articlesControllerFindOne(slug: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).articlesControllerFindOne(slug, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public articlesControllerGetArticleSummary(id: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).articlesControllerGetArticleSummary(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public articlesControllerRemove(id: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).articlesControllerRemove(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public articlesControllerUpdate(id: string, body: object, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).articlesControllerUpdate(id, body, options).then((request) => request(this.axios, this.basePath));
    }
}


