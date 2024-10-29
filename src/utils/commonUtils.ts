import { Environment } from 'src/constants/commonConstants';

/**
 * Determines the environment based on the current URL.
 * @returns The environment (CTE or Production).
 */
export const getEnvironmentFromUrl = () => {
    return Environment.Development;
    // todo: implement logic to determine the environment based on the URL
};

/**
 * Gets the site URL.
 * @returns The site URL.
 */
export const getSiteHost = () => {
    return `${location.protocol}//${window.location.host}`;
};
