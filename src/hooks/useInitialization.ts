import { useCallback, useEffect, useState } from 'react';
import { globalConfig } from 'src/config/globalConfig';
import { ConfigKeys, InitializationArea } from 'src/types/commonTypes';
import { InitializationError } from 'src/classes/InitializationError';
import { getEnvironmentFromUrl } from 'src/utils/commonUtils';
import { LocalStorageKeyTheme } from 'src/constants/commonConstants';
import { Theme } from 'src/constants/experienceConstants';
import { useExperienceStore } from 'src/stores/experienceStore';

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
                reject(
                    new InitializationError(
                        InitializationArea.Environment,
                        'Environment not found.',
                    ),
                );
            }
        } catch (error: unknown) {
            reject(
                new InitializationError(
                    InitializationArea.Environment,
                    'Environment not found.',
                    error as Error,
                ),
            );
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
                if (
                    themeInLocalStorage === Theme.LightTheme ||
                    themeInLocalStorage === Theme.DarkTheme
                ) {
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
            reject(
                new InitializationError(
                    InitializationArea.Theme,
                    'Could not initialize theme',
                    error as Error,
                ),
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
