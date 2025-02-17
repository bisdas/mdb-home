import { FirebaseApp, initializeApp } from 'firebase/app';
import { firebaseAppConfig } from 'src/constants/firebaseConstants';

/**
 * Initializes firebase app.
 * @returns The initialized Firebase app instance.
 */
export const initializeFirebaseApp = (): FirebaseApp => {
    const firebaseApp = initializeApp(firebaseAppConfig);
    return firebaseApp;
};
