import { vi, describe, test, expect, Mock, afterEach, beforeEach } from 'vitest';
import axios, { AxiosResponse } from 'axios';
import * as apiUtils from './apiUtils';
import { logApiRequest, logApiResponse, logApiError } from './loggingUtils';

vi.mock('axios');
vi.mock('../utils/loggingUtils.ts');

const mockCommonHeader = {
    'Content-Type': 'application/json; charset=utf-8',
};
const mockCustomHeaders = {
    Authorization: 'Bearer token',
    'X-Client-ID': 'some value',
};
const mockMergeHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Bearer token',
    'X-Client-ID': 'some value',
};
const mockUrl = 'https://api.example.com';
const mockRequestBody = {
    key: 'value',
};
const mockResponse = {
    data: {
        data: {
            key: 'value1',
        },
    },
    status: 200,
};
const mockError = new Error('Network Error');

describe('mapParamsToQueryString', () => {
    test('should convert a single parameter to a query string', () => {
        const params = { key: 'value' };
        const queryString = apiUtils.mapParamsToQueryString(params);
        expect(queryString).toBe('key=value');
    });

    test('should convert multiple parameters to a query string', () => {
        const params = { key1: 'value1', key2: 'value2' };
        const queryString = apiUtils.mapParamsToQueryString(params);
        expect(queryString).toBe('key1=value1&key2=value2');
    });

    test('should encode special characters in parameters', () => {
        const params = { 'key one': 'value/one', 'key&two': 'value@two' };
        const queryString = apiUtils.mapParamsToQueryString(params);
        expect(queryString).toBe('key one=value/one&key&two=value@two');
    });
});

describe('getCommonHeaders', () => {
    test('should return the expected common headers', () => {
        const headers = apiUtils.getCommonHeaders();
        expect(headers).toEqual(mockCommonHeader);
    });
});

describe('mergeHeaders', () => {
    test('merges the common headers with custom headers', () => {
        const mergedHeaders = apiUtils.mergeHeaders(mockCommonHeader, mockCustomHeaders);
        const expectedHeaders = {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: 'Bearer token',
            'X-Client-ID': 'some value',
        };
        expect(mergedHeaders).toEqual(expectedHeaders);
    });

    test('returns common headers if custom headers are empty', () => {
        const mergedHeaders = apiUtils.mergeHeaders(mockCommonHeader, {});
        expect(mergedHeaders).toEqual(mockCommonHeader);
    });

    test('returns custom headers if common headers are empty', () => {
        const mergedHeaders = apiUtils.mergeHeaders({}, mockCustomHeaders);
        expect(mergedHeaders).toEqual(mockCustomHeaders);
    });

    test('returns an empty object if both common headers and custom headers are empty', () => {
        const mergedHeaders = apiUtils.mergeHeaders({}, {});
        expect(mergedHeaders).toEqual({});
    });
});

describe('handleResponse', () => {
    test('should return response data', () => {
        const result = apiUtils.handleResponse(mockResponse as AxiosResponse);
        expect(result).toEqual(mockResponse.data);
    });
});

describe('makeGetRequest', () => {
    const spyMapParamsToQueryString = vi.spyOn(apiUtils, 'mapParamsToQueryString');
    const spyGetCommonHeaders = vi.spyOn(apiUtils, 'getCommonHeaders');
    const spyMergeHeaders = vi.spyOn(apiUtils, 'mergeHeaders');
    const spyHandleResponse = vi.spyOn(apiUtils, 'handleResponse');
    beforeEach(() => {
        spyMapParamsToQueryString.mockImplementationOnce(
            (): string => 'param1=value1&param2=value2',
        );
        spyGetCommonHeaders.mockImplementationOnce((): typeof mockCommonHeader => mockCommonHeader);
        spyMergeHeaders.mockImplementationOnce(() => mockMergeHeaders);
        spyHandleResponse.mockImplementationOnce((): typeof mockResponse.data => mockResponse.data);
    });
    afterEach(() => {
        vi.restoreAllMocks();
    });
    const mockParams = { param1: 'value1', param2: 'value2' };
    test('should make a GET request and return response data with mocked internal functions', async () => {
        (axios.get as Mock).mockResolvedValueOnce(mockResponse);
        const result = await apiUtils.makeGetRequest(mockUrl, mockCustomHeaders, mockParams);
        expect(result).toEqual(mockResponse.data);
        expect(spyMapParamsToQueryString).toHaveBeenCalledWith(mockParams);
        expect(spyGetCommonHeaders).toHaveBeenCalled();
        expect(spyMergeHeaders).toHaveBeenCalledWith(mockCommonHeader, mockCustomHeaders);
        expect(axios.get).toHaveBeenCalledWith(`${mockUrl}?param1=value1&param2=value2`, {
            headers: {
                ...mockCommonHeader,
                ...mockCustomHeaders,
            },
        });
        expect(spyHandleResponse).toHaveBeenCalledWith(mockResponse);
    });

    test('should log request and response', async () => {
        (axios.get as Mock).mockResolvedValueOnce(mockResponse);
        await apiUtils.makeGetRequest(mockUrl, mockCustomHeaders, mockParams);
        expect(logApiRequest).toHaveBeenCalled();
        expect(logApiResponse).toHaveBeenCalled();
    });

    test('should log error on request failure', async () => {
        (axios.get as Mock).mockRejectedValueOnce(mockError);
        try {
            await apiUtils.makeGetRequest(mockUrl, mockCustomHeaders, mockParams);
        } catch (error) {
            expect(logApiError).toHaveBeenCalled();
        }
    });
});

describe('makePostRequest', () => {
    const spyGetCommonHeaders = vi.spyOn(apiUtils, 'getCommonHeaders');
    const spyMergeHeaders = vi.spyOn(apiUtils, 'mergeHeaders');
    beforeEach(() => {
        spyGetCommonHeaders.mockImplementationOnce((): typeof mockCommonHeader => mockCommonHeader);
        spyMergeHeaders.mockImplementationOnce(() => mockMergeHeaders);
    });
    afterEach(() => {
        vi.restoreAllMocks();
    });

    test('should make a POST request and return response data with mocked internal functions', async () => {
        (axios.post as Mock).mockResolvedValueOnce(mockResponse);
        const result = await apiUtils.makePostRequest(mockUrl, mockCustomHeaders, mockRequestBody);
        expect(result).toEqual(mockResponse.data);
        expect(spyGetCommonHeaders).toHaveBeenCalled();
        expect(spyMergeHeaders).toHaveBeenCalledWith(mockCommonHeader, mockCustomHeaders);
        expect(axios.post).toHaveBeenCalledWith(mockUrl, mockRequestBody, {
            headers: {
                ...mockCommonHeader,
                ...mockCustomHeaders,
            },
        });
    });

    test('should log request and response', async () => {
        (axios.post as Mock).mockResolvedValueOnce(mockResponse);
        await apiUtils.makePostRequest(mockUrl, mockCustomHeaders, mockRequestBody);
        expect(logApiRequest).toHaveBeenCalled();
        expect(logApiResponse).toHaveBeenCalled();
    });

    test('should log error on request failure', async () => {
        (axios.post as Mock).mockRejectedValueOnce(mockError);
        try {
            await apiUtils.makePostRequest(mockUrl, mockCustomHeaders, mockRequestBody);
        } catch (error) {
            expect(logApiError).toHaveBeenCalled();
        }
    });
});

describe('makePutRequest', () => {
    const spyGetCommonHeaders = vi.spyOn(apiUtils, 'getCommonHeaders');
    const spyMergeHeaders = vi.spyOn(apiUtils, 'mergeHeaders');
    const spyHandleResponse = vi.spyOn(apiUtils, 'handleResponse');
    beforeEach(() => {
        spyGetCommonHeaders.mockImplementationOnce((): typeof mockCommonHeader => mockCommonHeader);
        spyMergeHeaders.mockImplementationOnce(() => mockMergeHeaders);
        spyHandleResponse.mockImplementationOnce((): typeof mockResponse.data => mockResponse.data);
    });
    afterEach(() => {
        vi.restoreAllMocks();
    });

    test('should make a PUT request and return response data with mocked internal functions', async () => {
        (axios.put as Mock).mockResolvedValueOnce(mockResponse);
        const result = await apiUtils.makePutRequest(mockUrl, mockCustomHeaders, mockRequestBody);
        expect(result).toEqual(mockResponse.data);
        expect(spyGetCommonHeaders).toHaveBeenCalled();
        expect(spyMergeHeaders).toHaveBeenCalledWith(mockCommonHeader, mockCustomHeaders);
        expect(axios.put).toHaveBeenCalledWith(mockUrl, mockRequestBody, {
            headers: {
                ...mockCommonHeader,
                ...mockCustomHeaders,
            },
        });
        expect(spyHandleResponse).toHaveBeenCalledWith(mockResponse);
    });

    test('should log request and response', async () => {
        (axios.put as Mock).mockResolvedValueOnce(mockResponse);
        await apiUtils.makePutRequest(mockUrl, mockCustomHeaders, mockRequestBody);
        expect(logApiRequest).toHaveBeenCalled();
        expect(logApiResponse).toHaveBeenCalled();
    });

    test('should log error on request failure', async () => {
        (axios.put as Mock).mockRejectedValueOnce(mockError);
        try {
            await apiUtils.makePutRequest(mockUrl, mockCustomHeaders, mockRequestBody);
        } catch (error) {
            expect(logApiError).toHaveBeenCalled();
        }
    });
});

describe('makeDeleteRequest', () => {
    let spyGetCommonHeaders = vi.spyOn(apiUtils, 'getCommonHeaders');
    let spyMergeHeaders = vi.spyOn(apiUtils, 'mergeHeaders');
    let spyHandleResponse = vi.spyOn(apiUtils, 'handleResponse');
    beforeEach(() => {
        spyGetCommonHeaders = vi
            .spyOn(apiUtils, 'getCommonHeaders')
            .mockImplementationOnce((): typeof mockCommonHeader => mockCommonHeader);
        spyMergeHeaders = vi
            .spyOn(apiUtils, 'mergeHeaders')
            .mockImplementationOnce(() => mockMergeHeaders);
        spyHandleResponse = vi
            .spyOn(apiUtils, 'handleResponse')
            .mockImplementationOnce((): typeof mockResponse.data => mockResponse.data);
    });
    afterEach(() => {
        vi.restoreAllMocks();
    });

    test('should make a DELETE request and return response data', async () => {
        (axios.delete as Mock).mockResolvedValueOnce(mockResponse);
        const result = await apiUtils.makeDeleteRequest(mockUrl, mockCustomHeaders);
        expect(result).toEqual(mockResponse.data);
        expect(spyGetCommonHeaders).toHaveBeenCalled();
        expect(spyMergeHeaders).toHaveBeenCalledWith(mockCommonHeader, mockCustomHeaders);
        expect(axios.delete).toHaveBeenCalledWith(mockUrl, {
            headers: {
                ...mockCommonHeader,
                ...mockCustomHeaders,
            },
        });
        expect(spyHandleResponse).toHaveBeenCalledWith(mockResponse);
    });

    test('should log request and response', async () => {
        (axios.delete as Mock).mockResolvedValueOnce(mockResponse);
        await apiUtils.makeDeleteRequest(mockUrl, mockCustomHeaders);
        expect(logApiRequest).toHaveBeenCalled();
        expect(logApiResponse).toHaveBeenCalled();
    });

    test('should log error on request failure', async () => {
        (axios.delete as Mock).mockRejectedValueOnce(mockError);
        try {
            await apiUtils.makeDeleteRequest(mockUrl, mockCustomHeaders);
        } catch (error) {
            expect(logApiError).toHaveBeenCalled();
        }
    });
});
