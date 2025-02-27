import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { firebaseAppConfig } from 'src/constants/firebaseConstants';

/**
 * Initializes firebase app.
 * @returns The initialized Firebase app instance.
 */
export const initializeFirebaseApp = (): FirebaseApp => {
    const firebaseApp = initializeApp(firebaseAppConfig);
    return firebaseApp;
};

/**
 * Initializes Firebase analytics.
 * @param firebaseApp - The initialized Firebase app instance.
 * @returns The Firebase analytics instance.
 */
export const initializeFirebaseAnalytics = (firebaseApp: FirebaseApp) => {
    const analytics = getAnalytics(firebaseApp);
    return analytics;
};
