import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { ApiLogType } from 'src/constants/apiConstants';
import { TypeApiRequestLog, TypeApiResponseLog, TypeApiErrorLog } from 'src/types/apiTypes';
import * as loggingUtils from './loggingUtils';

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Logs the provided data to the console.
 * The eslint rule 'no-console' is disabled as this is a console logging utility function.
 * @param data - The data to log.
 */
export const logToConsole = (data: string): void => {
    /* eslint-disable-next-line no-console */
    console.log(data);
};

/**
 * Logs the details of an API request.
 * @param logData - The data to log.
 */
export const logApiRequest = (logData: TypeApiRequestLog): void => {
    const logObject = {
        logType: ApiLogType.Request,
        timestamp: dayjs.utc().format('YYYY-MM-DDTHH:mm:ssZ[Z]'),
        data: {
            requestUrl: logData.url,
            headers: logData.headers,
            params: logData.params,
        },
    };

    loggingUtils.logToConsole(
        `Log Type: ${logObject.logType}\nTimestamp: ${logObject.timestamp}\nData: ${JSON.stringify(logObject.data)}`,
    );
};

/**
 * Logs the response from an API request.
 * @param logData - The data to log.
 */
export const logApiResponse = (logData: TypeApiResponseLog): void => {
    const logObject = {
        logType: ApiLogType.Response,
        timestamp: dayjs.utc().format('YYYY-MM-DDTHH:mm:ssZ[Z]'),
        data: {
            url: logData.url,
            headers: logData.headers,
            params: logData.params,
            status: logData.status,
            statusText: logData.statusText,
            data: logData?.data,
        },
    };
    loggingUtils.logToConsole(
        `Log Type: ${logObject.logType}\nTimestamp: ${logObject.timestamp}\nData: ${JSON.stringify(logObject.data)}`,
    );
};

/**
 * Logs an error from an API request.
 * @param logData - The data to log.
 */
export const logApiError = (logData: TypeApiErrorLog): void => {
    const logObject = {
        logType: ApiLogType.Error,
        timestamp: dayjs.utc().format('YYYY-MM-DDTHH:mm:ssZ[Z]'),
        data: {
            url: logData.url,
            headers: logData.headers,
            params: logData.params,
            error: logData.error,
        },
    };
    loggingUtils.logToConsole(
        `Log Type: ${logObject.logType}\nTimestamp: ${logObject.timestamp}\nData: ${JSON.stringify(logObject.data)}`,
    );
};
