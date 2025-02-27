import { useCallback, useEffect, useState } from 'react';
import { globalConfig } from 'src/config/globalConfig';
import { ConfigKeys, FirebaseConfigKeys, InitializationArea } from 'src/types/commonTypes';
import { InitializationError } from 'src/classes/InitializationError';
import { getEnvironmentFromUrl } from 'src/utils/commonUtils';
import { LocalStorageKeyTheme } from 'src/constants/commonConstants';
import { Theme } from 'src/constants/experienceConstants';
import { useExperienceStore } from 'src/stores/experienceStore';
import { initializeFirebaseAnalytics, initializeFirebaseApp } from 'src/utils/firebaseUtils';
import { firebaseConfig } from 'src/config/firebaseConfig';

/**
 * Initializes the environment.
 * @returns A promise that resolves with the environment if found, or rejects with an error if not found.
 */
const initializeEnvironment = () => {
    return new Promise((resolve, reject) => {
        try {
            const environment = getEnvironmentFromUrl();
            if (environment) {
                resolve(environment);
            } else {
                reject(new InitializationError(InitializationArea.Environment, 'Environment not found.'));
            }
        } catch (error: unknown) {
            reject(new InitializationError(InitializationArea.Environment, 'Environment not found.', error as Error));
        }
    });
};

/**
 * Initializes the environment.
 * @returns A promise that resolves with the environment if found, or rejects with an error if not found.
 */
const initializeTheme = () => {
    return new Promise((resolve, reject) => {
        try {
            const themeInLocalStorage = localStorage.getItem(LocalStorageKeyTheme);
            if (themeInLocalStorage) {
                if (themeInLocalStorage === Theme.LightTheme || themeInLocalStorage === Theme.DarkTheme) {
                    resolve(themeInLocalStorage);
                } else {
                    localStorage.setItem(LocalStorageKeyTheme, Theme.LightTheme);
                    resolve(Theme.LightTheme);
                }
            } else {
                localStorage.setItem(LocalStorageKeyTheme, Theme.LightTheme);
                resolve(Theme.LightTheme);
            }
        } catch (error: unknown) {
            reject(new InitializationError(InitializationArea.Theme, 'Could not initialize theme', error as Error));
        }
    });
};

/**
 * Initializes the firebase backend.
 * @returns A promise that resolves with the initialized Firebase app instance, or rejects with an error if initialization fails.
 */
const initializeFirebaseBackend = (): Promise<{ firebaseApp: object; firebaseAnalytics: object }> => {
    return new Promise((resolve, reject) => {
        try {
            const firebaseApp = initializeFirebaseApp();
            const firebaseAnalytics = initializeFirebaseAnalytics(firebaseApp);
            if (firebaseApp && firebaseAnalytics) {
                resolve({ firebaseApp, firebaseAnalytics });
            } else {
                reject(new InitializationError(InitializationArea.Firebase, 'Could not initialize Firebase.'));
            }
        } catch (error: unknown) {
            reject(
                new InitializationError(InitializationArea.Firebase, 'Could not initialize Firebase.', error as Error),
            );
        }
    });
};

/**
 * React hook for initializing application-wide settings and configurations.
 * @returns
 *  An object containing:
 * - `isLoading`: A boolean indicating if the initialization process is still ongoing.
 * - `loadingErrors`: An array of errors encountered during the initialization process.
 */
export const useInitialization = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { setExperience } = useExperienceStore();
    const [loadingErrors, setLoadingErrors] = useState<InitializationError[]>([]);

    /**
     * Initializes application configurations.
     */
    const initializeAll = useCallback(async () => {
        try {
            globalConfig.set(ConfigKeys.Environment, await initializeEnvironment());

            const theme = (await initializeTheme()) as Theme;
            setExperience({ theme });

            const { firebaseAnalytics } = await initializeFirebaseBackend();
            firebaseConfig.set(FirebaseConfigKeys.Analytics, firebaseAnalytics);
        } catch (error: unknown) {
            setLoadingErrors((errors) => [...errors, error as InitializationError]);
        } finally {
            setIsLoading(false);
        }
    }, [setExperience]);

    useEffect(() => {
        initializeAll();
    }, [initializeAll]);

    return { isLoading, loadingErrors };
};
