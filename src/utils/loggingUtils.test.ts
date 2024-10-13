import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { describe, it, expect, vi, afterEach, MockInstance, beforeEach } from 'vitest';
import * as loggingUtils from './loggingUtils';
import { ApiLogType } from 'src/constants/apiConstants';
import { TypeApiErrorLog, TypeApiRequestLog, TypeApiResponseLog } from 'src/types/apiTypes';

dayjs.extend(utc);
dayjs.extend(timezone);

describe('logToConsole()', () => {
    let consoleLogSpy: MockInstance | null = null;
    beforeEach(() => {
        consoleLogSpy = vi.spyOn(console, 'log');
    });
    afterEach(() => {
        consoleLogSpy?.mockRestore();
    });
    it('should log the provided data to the console', () => {
        const testData = 'Test data';
        loggingUtils.logToConsole(testData);
        expect(consoleLogSpy).toHaveBeenCalledWith(testData);
    });
});

describe('logApiRequest()', () => {
    let logToConsoleSpy: MockInstance | null = null;
    beforeEach(() => {
        /** set the system time to a specific date and time */
        const mockDateTime = dayjs.tz('2024-07-25 14:00:00', 'UTC').toDate();
        vi.useFakeTimers();
        vi.setSystemTime(mockDateTime);
        logToConsoleSpy = vi.spyOn(loggingUtils, 'logToConsole').mockImplementation(vi.fn());
    });
    afterEach(() => {
        logToConsoleSpy?.mockRestore();
        vi.useRealTimers();
    });
    it('should log API request details to console', () => {
        const mockLogData: TypeApiRequestLog = {
            url: 'https://api.example.com',
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                key: 'value',
            },
        };
        const expectedLogMessage = `Log Type: ${ApiLogType.Request}\nTimestamp: 2024-07-25T14:00:00+00:00Z\nData: ${JSON.stringify(
            {
                requestUrl: mockLogData.url,
                headers: mockLogData.headers,
                params: mockLogData.params,
            },
        )}`;
        loggingUtils.logApiRequest(mockLogData);
        expect(logToConsoleSpy).toHaveBeenCalledWith(expectedLogMessage);
    });
});

describe('logApiResponse()', () => {
    let logToConsoleSpy: MockInstance | null = null;
    beforeEach(() => {
        const mockDateTime = dayjs.tz('2024-07-25 00:00:00', 'UTC').toDate();
        vi.useFakeTimers();
        vi.setSystemTime(mockDateTime);
        logToConsoleSpy = vi.spyOn(loggingUtils, 'logToConsole').mockImplementation(vi.fn());
    });
    afterEach(() => {
        logToConsoleSpy?.mockRestore();
        vi.useRealTimers();
    });

    it('should log API response details to console', () => {
        const mockLogData: TypeApiResponseLog = {
            url: 'https://api.example.com',
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                key: 'value',
            },
            status: 200,
            statusText: 'OK',
            data: { key: 'value' },
        };

        const expectedLogMessage = `Log Type: ${ApiLogType.Response}\nTimestamp: 2024-07-25T00:00:00+00:00Z\nData: ${JSON.stringify(
            {
                url: mockLogData.url,
                headers: mockLogData.headers,
                params: mockLogData.params,
                status: mockLogData.status,
                statusText: mockLogData.statusText,
                data: mockLogData?.data,
            },
        )}`;
        loggingUtils.logApiResponse(mockLogData);
        expect(logToConsoleSpy).toHaveBeenCalledWith(expectedLogMessage);
    });
});

describe('logApiError()', () => {
    let logToConsoleSpy: MockInstance | null = null;
    beforeEach(() => {
        const mockDateTime = dayjs.tz('2024-07-26 18:20:00', 'UTC').toDate();
        vi.useFakeTimers();
        vi.setSystemTime(mockDateTime);
        logToConsoleSpy = vi.spyOn(loggingUtils, 'logToConsole').mockImplementation(vi.fn());
    });
    afterEach(() => {
        logToConsoleSpy?.mockRestore();
        vi.useRealTimers();
    });

    it('should log API Error details to console', () => {
        const mockLogData: TypeApiErrorLog = {
            url: 'https://api.example.com',
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                key: 'value',
            },
            error: new Error('Test Error'),
        };

        const expectedLogMessage = `Log Type: ${ApiLogType.Error}\nTimestamp: 2024-07-26T18:20:00+00:00Z\nData: ${JSON.stringify(
            {
                url: mockLogData.url,
                headers: mockLogData.headers,
                params: mockLogData.params,
                error: mockLogData.error,
            },
        )}`;

        loggingUtils.logApiError(mockLogData);
        expect(logToConsoleSpy).toHaveBeenCalledWith(expectedLogMessage);
    });
});
