import { Analytics, logEvent } from 'firebase/analytics';
import { firebaseConfig } from 'src/config/firebaseConfig';
import { FirebaseConfigKeys } from 'src/types/commonTypes';
import { throttle } from './frameworkUtils';

/**
 * Logs an analytics event using Firebase Analytics.
 * @param eventName - The name of the event to log.
 */
export const logAnalyticsEvent = (eventName: string) => {
    const analyticsService = firebaseConfig.get(FirebaseConfigKeys.Analytics) as Analytics;
    logEvent(analyticsService, eventName);
};

/**
 * Creates a throttled version of the logAnalyticsEvent function.
 * @param timeout - The timeout duration in milliseconds for throttling the event logging.
 * @returns A throttled version of the logAnalyticsEvent function.
 */
export const createThrottledLogAnalyticsEvent = (timeout: number) => {
    return throttle(logAnalyticsEvent, timeout);
};
