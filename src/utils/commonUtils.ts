import { Environment } from 'src/constants/commonConstants';

/**
 * Determines the environment based on the current URL.
 * @returns The environment (CTE or Production).
 */
export const getEnvironmentFromUrl = () => {
    return Environment.Development;
    // todo: implement logic to determine the environment based on the URL
};
