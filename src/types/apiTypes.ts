import { ApiHeaders } from 'src/constants/apiConstants';

export interface TypeRequestQueryString {
    [key: string]: string;
}

export interface TypeRequestBody {
    [key: string]: string | number | boolean | object | Array<string | number | boolean | object>;
}

export interface ErrorDetail {
    code: string;
    message: string;
}

export type TypeResponseBody = {
    data?: object | null;
    errors: Array<ErrorDetail>;
};

export type TypeApiHeaders = {
    [key in ApiHeaders]?: string;
};

export interface TypeApiRequestLog {
    url: string;
    headers: TypeApiHeaders;
    params?: TypeRequestQueryString | TypeRequestBody;
}

export interface TypeApiResponseLog {
    url: string;
    headers: TypeApiHeaders;
    params?: TypeRequestQueryString | TypeRequestBody;
    status: number;
    statusText: string;
    data?: object;
}

export interface TypeApiErrorLog {
    url: string;
    headers: TypeApiHeaders;
    params?: TypeRequestQueryString | TypeRequestBody;
    error: Error | unknown;
}
