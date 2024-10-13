import axios, { AxiosResponse } from 'axios';
import { ApiHeaders } from 'src/constants/apiConstants';
import { TypeRequestBody, TypeApiHeaders, TypeRequestQueryString } from 'src/types/apiTypes';
import { logApiError, logApiRequest, logApiResponse } from './loggingUtils';
import * as apiUtils from './apiUtils';

/**
 * Converts an object of parameters into a query string.
 * @param params - The parameters to convert.
 * @returns The query string.
 */
export const mapParamsToQueryString = (params: TypeRequestQueryString) => {
    return Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&');
};

/**
 * Returns the common headers used in API requests.
 * @returns The common headers.
 */
export const getCommonHeaders = () => {
    return {
        [ApiHeaders.ContentType]: 'application/json; charset=utf-8',
    };
};

/**
 * Merges the common headers with any custom headers.
 * @param headers - The common headers.
 * @param customHeaders - The custom headers.
 * @returns The merged headers.
 */
export const mergeHeaders = (headers: TypeApiHeaders, customHeaders: TypeApiHeaders) => {
    return {
        ...headers,
        ...customHeaders,
    };
};

/**
 * Sometimes all API responses irrespective of the endpoint or feature can be handled in a similar
 * way. This placeholder function is used to handle the API response in that manner.
 * @param response - The response from the API request.
 * @returns The data from the response.
 */
export const handleResponse = (response: AxiosResponse) => {
    // todo: gracefully handle the api response.
    return response.data;
};

/**
 * Makes a GET request to the specified URL.
 * @param url - The URL to make the request to.
 * @param headers - The headers to include in the request.
 * @param params - The parameters to include in the request.
 * @returns The data from the response.
 */
export const makeGetRequest = async (
    url: string,
    headers: TypeApiHeaders = {},
    params: TypeRequestQueryString = {},
): Promise<AxiosResponse> => {
    const queryString = apiUtils.mapParamsToQueryString(params);
    const requestUrl = queryString ? `${url}?${queryString}` : url;
    const commonHeaders = apiUtils.getCommonHeaders();
    const requestHeaders = apiUtils.mergeHeaders(commonHeaders, headers);

    logApiRequest({
        url: requestUrl,
        headers: requestHeaders,
        params,
    });

    try {
        const response = await axios.get(requestUrl, {
            headers: requestHeaders,
        });

        logApiResponse({
            url: requestUrl,
            headers: requestHeaders,
            params,
            status: response.status,
            statusText: response.statusText,
            data: response.data,
        });

        const returnValue = apiUtils.handleResponse(response);
        return returnValue;
    } catch (error) {
        logApiError({
            url,
            headers: requestHeaders,
            params,
            error,
        });
        throw error;
    }
};

/**
 * Makes a POST request to the specified URL.
 * @param url - The URL to make the request to.
 * @param headers - The headers to include in the request.
 * @param params - The body to include in the request.
 * @returns The data from the response.
 */
export const makePostRequest = async (
    url: string,
    headers: TypeApiHeaders = {},
    params: TypeRequestBody = {},
): Promise<AxiosResponse> => {
    const commonHeaders = apiUtils.getCommonHeaders();
    const requestHeaders = apiUtils.mergeHeaders(commonHeaders, headers);

    logApiRequest({
        url,
        headers: requestHeaders,
        params,
    });

    try {
        const response = await axios.post(url, params, {
            headers: requestHeaders,
        });

        logApiResponse({
            url,
            headers: requestHeaders,
            params,
            status: response.status,
            statusText: response.statusText,
            data: response.data,
        });

        const handledResponse = apiUtils.handleResponse(response);
        return handledResponse;
    } catch (error) {
        logApiError({
            url,
            headers: requestHeaders,
            params,
            error,
        });
        throw error;
    }
};

/**
 * Makes a PUT request to the specified URL.
 * @param url - The URL to make the request to.
 * @param headers - The headers to include in the request.
 * @param params - The body to include in the request.
 * @returns The data from the response.
 */
export const makePutRequest = async (
    url: string,
    headers: TypeApiHeaders,
    params: TypeRequestBody,
): Promise<AxiosResponse> => {
    const commonHeaders = apiUtils.getCommonHeaders();
    const requestHeaders = apiUtils.mergeHeaders(commonHeaders, headers || {});

    logApiRequest({
        url,
        headers: requestHeaders,
        params,
    });

    try {
        const response = await axios.put(url, params, {
            headers: requestHeaders,
        });

        logApiResponse({
            url,
            headers: requestHeaders,
            params,
            status: response.status,
            statusText: response.statusText,
            data: response.data,
        });

        const handledResponse = apiUtils.handleResponse(response);
        return handledResponse;
    } catch (error) {
        logApiError({
            url,
            headers: requestHeaders,
            params,
            error,
        });
        throw error;
    }
};

/**
 * Makes a DELETE request to the specified URL.
 * @param url - The URL to make the request to.
 * @param headers - The headers to include in the request.
 * @returns The data from the response.
 */
export const makeDeleteRequest = async (
    url: string,
    headers: TypeApiHeaders,
): Promise<AxiosResponse> => {
    const commonHeaders = apiUtils.getCommonHeaders();
    const requestHeaders = apiUtils.mergeHeaders(commonHeaders, headers || {});

    logApiRequest({
        url,
        headers: requestHeaders,
    });

    try {
        const response = await axios.delete(url, {
            headers: requestHeaders,
        });

        logApiResponse({
            url,
            headers,
            status: response.status,
            statusText: response.statusText,
            data: response.data,
        });

        const handledResponse = apiUtils.handleResponse(response);
        return handledResponse;
    } catch (error) {
        logApiError({
            url,
            headers: requestHeaders,
            params: {},
            error,
        });
        throw error;
    }
};
