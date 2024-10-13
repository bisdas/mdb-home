import { useCallback, useEffect, useState } from 'react';
import { globalConfig } from 'src/config/globalConfig';
import { ConfigKeys, InitializationArea } from 'src/types/commonTypes';
import { InitializationError } from 'src/classes/InitializationError';
import { getEnvironmentFromUrl } from 'src/utils/commonUtils';

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
 * React hook for initializing application-wide settings and configurations.
 * @returns
 *  An object containing:
 * - `isLoading`: A boolean indicating if the initialization process is still ongoing.
 * - `loadingErrors`: An array of errors encountered during the initialization process.
 */
export const useInitialization = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [loadingErrors, setLoadingErrors] = useState<InitializationError[]>([]);

    /**
     * Initializes application configurations.
     */
    const initializeAll = useCallback(async () => {
        try {
            globalConfig.set(ConfigKeys.Environment, await initializeEnvironment());
        } catch (error: unknown) {
            // todo: have a standard error format
            setLoadingErrors([...loadingErrors, error as InitializationError]);
        } finally {
            setIsLoading(false);
        }
    }, [loadingErrors]);

    useEffect(() => {
        initializeAll();
    }, [initializeAll]);

    return { isLoading, loadingErrors };
};
