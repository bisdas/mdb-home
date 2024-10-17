import { Environment } from 'src/constants/commonConstants';

export const WebApiBaseUrl = {
    [Environment.Production]: 'https://web-api.example.com',
    [Environment.Development]: 'https://web-api.dev.example.com',
    [Environment.Staging]: 'https://web-api.staging.example.com',
};

export const featureEndpoints = {
    getFeature: 'feature',
};
