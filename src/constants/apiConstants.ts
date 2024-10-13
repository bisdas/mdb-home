export enum ApiMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export enum ApiHeaders {
    ContentType = 'Content-Type',
    Authorization = 'Authorization',
    XClientID = 'X-Client-ID',
    Accept = 'Accept',
}

export enum HttpStatusCodes {
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    SERVER_ERROR = 500,
}

export enum ApiLogType {
    Request = 'Request',
    Response = 'Response',
    Error = 'Error',
}
