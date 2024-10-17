import { WebApiBaseUrl, featureEndpoints } from 'src/apis/apiEndpoints';
import { TypeResponseBody } from 'src/types/apiTypes';
import { globalConfig } from 'src/config/globalConfig';
import { ConfigKeys } from 'src/types/commonTypes';
import { makeGetRequest } from 'src/utils/apiUtils';
import { Environment } from 'src/constants/commonConstants';
import { logToConsole } from 'src/utils/loggingUtils';

/**
 * Fetches a feature by its ID from the API.
 * @param id - The ID of the feature to fetch.
 * @returns The response body from the API.
 * @throws Will throw an error if the request fails.
 */
export const getFeature = async (id: string): Promise<TypeResponseBody> => {
    const environment = globalConfig.get(ConfigKeys.Environment) as Environment;
    const apiBaseUrl = WebApiBaseUrl[environment];

    const requestUrl = [apiBaseUrl, featureEndpoints.getFeature.toLowerCase(), id].join('/');

    try {
        const response = await makeGetRequest(requestUrl, {});
        return response.data;
    } catch (error) {
        logToConsole(`Error in getFeature(), ${error}`);
        throw error;
    }
};
